# Secure User Profile & Access Control System

## Project Overview
This project is a Secure User Profile and Access Control System built as an identity management microservice.  
It implements JWT-based authentication and AES-256 encryption to securely store and retrieve sensitive user identity data such as Aadhaar/ID numbers.

**Tech Stack**
- Backend: Django, Django REST Framework
- Frontend: React (planned)
- Database: PostgreSQL
- Security: JWT, AES Encryption
- Deployment: Render (Backend), Vercel (Frontend)

---

## Features
- User Registration with encrypted Aadhaar/ID storage
- Secure Login with JWT authentication
- JWT-protected Profile API
- Decryption of Aadhaar/ID only on authorized access
- Robust API error handling

---

## Backend Setup Instructions

### Prerequisites
- Python 3.11+
- PostgreSQL
- Virtualenv

### Steps

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Apply migrations
python manage.py makemigrations
python manage.py migrate

# Run server
python manage.py runserver

Create a .env file with:

ENCRYPTION_KEY=your_fernet_key

**API Documentation**

Postman Collection: docs/postman_collection.json

**Database Schema**
(UserProfile Table)

-username (unique)

-email (unique)

-password (hashed)

-aadhaar_enc (encrypted binary data)

-created_at

**Security Implementation**

-JWT-based stateless authentication

-AES encryption for sensitive fields (Aadhaar/ID)

-Password hashing using Django’s secure hashing utilities

-Token validation middleware for protected routes

**AI Tool Usage Log**

-AI assistance was used to design and validate JWT token handling logic.

-AI was used to help structure encryption and decryption utility functions.

-AI support was used for improving API structure and error-handling patterns.

-All AI-generated code was manually reviewed, modified, and tested before integration.

Demo Video

Demo Video Link: (To be added)

**Author**
Tushar Panchal
