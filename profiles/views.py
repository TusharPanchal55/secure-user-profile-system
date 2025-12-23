import jwt
from django.shortcuts import render
from functools import wraps
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import UserProfile
from .serializers import UserProfileSerializes

SECRET_KEY = "WfSSOTxc8KKc5RfC9K4yN4jDs6P0eW6CGGN-jH0KF3s="

def token_required(func):
    @wraps(func)
    def wrapper(self, request, *args, **kwargs):
        auth_header = request.META.get('HTTP_AUTHORIZATION')
        #token = request.headers.get('Authorization')
        if not auth_header:
            return Response({'error': 'Token missing'},status = 401)
        try:
            token = auth_header.split(" ")[1]
            payload = jwt.decode(token, SECRET_KEY, algorithms = ['HS256'])
            request.user = UserProfile.objects.get(username = payload['username'])
        except:
            return Response({'error' : 'Invalid Token'}, status = 401)
        return func(self, request, *args, **kwargs)
    return wrapper

class RegisterUser(APIView):
    def post(self, request):
        serializer = UserProfileSerializes(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message' : 'User Registered Successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    

class LoginUser(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = UserProfile.objects.filter(username=username).first()
        if not user:
            return Response(
                {'error': 'User does not exist'},
                status=status.HTTP_404_NOT_FOUND
            )

        if not user.check_password(password):
            return Response(
                {'error': 'Incorrect password'},
                status=status.HTTP_401_UNAUTHORIZED
            )
        if user and user.check_password(password):
            token = jwt.encode({'username': user.username}, SECRET_KEY, algorithm = 'HS256')
            return Response({'token':token}, status=status.HTTP_200_OK)
        return Response({'error': "Invalid Message"}, status = status.HTTP_401_UNAUTHORIZED)

class ProfileView(APIView):
    @token_required
    def get(self, request):
        user = request.user
        data = {'username' : user.username, 'email' : user.email, 'aadhaar' : user.get_aadhaar() }
        return Response(data, status = 200)

#{
#  "username": "Tushar",
#  "email": "tushar@example.com",
#  "aadhaar": 635783489485
# }
