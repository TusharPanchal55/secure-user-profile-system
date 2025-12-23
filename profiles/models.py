from django.db import models
from cryptography.fernet import Fernet
import os
from django.contrib.auth.hashers import make_password, check_password

key = os.getenv("ENCRYPTION_KEY").encode()
cipher = Fernet(key)

class UserProfile(models.Model):
    username = models.CharField(max_length = 50, unique = True)
    password = models.CharField(max_length = 128)
    email = models.EmailField(unique = True)
    aadhaar_enc = models.BinaryField()
    created_at = models.DateTimeField(auto_now_add = True)

    def set_password(self, raw_password):
        self.password = make_password(raw_password)

    def check_password(self, raw_password):
        return check_password(raw_password, self.password)
     
    def set_aadhaar(self, aadhaar_num):
        self.aadhaar_enc = cipher.encrypt(aadhaar_num.encode())
    
    def get_aadhaar(self):
        return cipher.decrypt(bytes(self.aadhaar_enc)).decode()
