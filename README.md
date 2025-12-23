# Secure User Profile & Access Control System

## Project Overview
This project is a Secure User Profile & Access Control System designed as an identity management microservice.  
It provides secure user registration, authentication, and profile access using JWT-based authentication and encryption for sensitive data.  
Sensitive identity information such as Aadhaar/ID numbers is encrypted at rest and decrypted only for authorized access.  
The system is built with a clear separation between backend APIs and frontend UI, following best security and API design practices.

---

## Tech Stack
**Backend**
- Django
- Django REST Framework
- JWT (JSON Web Tokens)
- PostgreSQL
- AES-based encryption (cryptography library)

**Frontend**
- React.js

**Deployment**
- Backend: Render
- Frontend: Vercel

---

## Setup & Run Instructions

### Backend Setup
1. Clone the repository
2. Create and activate a virtual environment
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
Create a .env file and configure required environment variables (DB credentials, encryption key, JWT secret)

Apply database migrations:

bash
Copy code
python manage.py makemigrations
python manage.py migrate
Start the backend server:

bash
Copy code
python manage.py runserver
Frontend Setup
Navigate to the frontend folder

Install dependencies:

bash
Copy code
npm install
Start the frontend:

bash
Copy code
npm start
API Documentation
1. Register User
Endpoint: POST /api/register/
Authentication: Not Required
Description:
Registers a new user and securely encrypts the Aadhaar/ID number before storing it in the database.

2. Login User
Endpoint: POST /api/login/
Authentication: Not Required
Description:
Authenticates the user using username and password and returns a JWT token for authorized access.

3. Fetch User Profile
Endpoint: GET /api/profile/
Authentication: Required (JWT Token)
Description:
Returns the authenticated user's profile data and decrypts the Aadhaar/ID number before sending it to the client.

**Database Schema**
UserProfile Table

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

AI Tool Usage Log (Mandatory)
AI assistance was used to design and validate JWT token handling logic.

AI was used to help structure encryption and decryption utility functions.

AI support was used for improving API structure and error-handling patterns.

All AI-generated code was manually reviewed, modified, and tested before integration.

Demo Video
Demo Video Link: (To be added)

Author
Tushar Panchal

markdown
Copy code
