from rest_framework import serializers
from.models import UserProfile

class UserProfileSerializes(serializers.ModelSerializer):
    aadhaar = serializers.CharField(write_only = True)
    password = serializers.CharField(write_only = True)

    class Meta:
        model = UserProfile
        fields = ['username', 'email', 'password', 'aadhaar']
    
    def create(self, validated_data):
        aadhaar = validated_data.pop('aadhaar') 
        raw_password = validated_data.pop('password')
        user = UserProfile(**validated_data)
        user.set_password(raw_password)
        user.set_aadhaar(aadhaar)
        user.save()

        return user