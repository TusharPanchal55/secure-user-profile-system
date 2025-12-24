# Secure User Profile & Access Control System

## Project Overview
This project is a Secure User Profile and Access Control System built as an identity management microservice.
It implements JWT-based authentication and AES-256 encryption to securely store and retrieve sensitive user identity data such as Aadhaar/ID numbers.

The system follows a backend-first microservice approach, with a decoupled frontend architecture for scalability and secure access control.

**Tech Stack**
- Backend: Django, Django REST Framework
- Frontend: React (planned)
- Database: PostgreSQL
- Security: JWT, AES Encryption
- Deployment: Render (Backend), Vercel (Frontend - Deployment Target)

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

**Create a .env file with:**

ENCRYPTION_KEY=your_fernet_key

SECRET_KEY=your_django_secret

DEBUG=False

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

**Deployment Details**

Backend Deployment (Completed)

Hosted on Render

PostgreSQL database managed via Render

Environment variables securely configured

APIs tested using Postman after deployment

Frontend Deployment (Prepared)

Frontend implemented using React + Vite + TypeScript

All core UI screens (Register, Login, Profile) implemented and tested locally

Environment-based API configuration using VITE_API_URL

Planned Vercel Configuration

Root Directory: secure-profile-frontend

Build Command: npm run build

Output Directory: dist

Environment Variable:
VITE_API_URL = https://<render-backend-url>

Due to time constraints, the final Vercel deployment could not be completed.
However, the frontend is production-ready and structured for seamless deployment with environment-based configuration.

**AI Tool Usage Log**

-Assistance in designing and validating JWT authentication flows in Django REST Framework (ChatGPT)

-Assisted in debugging backend issues related to CORS, authentication failures, and API integration with frontend (ChatGPT)

-Assisted in creating React + TypeScript component structures aligned with modern UI patterns. (v0.dev)

-Generated 6+ frontend UI components and layouts (registration form, login form, cards, input validation UI), helping reduce frontend development and styling effort by approximately 45%. (v0.dev)

-All AI generated code was manually reviewed, modified, and tested before integration.


**Author**
Tushar Panchal
