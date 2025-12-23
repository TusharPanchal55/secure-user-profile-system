from django.urls import path
from .views import RegisterUser, LoginUser, ProfileView

urlpatterns = [
    path('register/', RegisterUser.as_view(), name = 'register'),
    path('login/', LoginUser.as_view(), name = 'login'),
    path('profile/', ProfileView.as_view(), name = 'profile')
]
