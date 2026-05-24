# ⚡ React Authentication Frontend (JWT + Role-Based Access)

A simple but practical authentication frontend built with React.  
This project demonstrates real-world authentication concepts including registration, login, JWT handling, and role-based access control.

---

## 🚀 Features

- User Registration & Login system
- JWT Authentication (access token handling)
- Role-based authorization (User / Admin)
- Protected routes using React Router
- Global authentication state using Context API
- Axios API integration (centralized instance)
- Error handling for auth flows (400 / 401 / 409)
- Persistent auth structure (ready for localStorage upgrade)
- Clean and modular React structure

---

## 🔐 Authentication Flow

### 📌 Registration
- User enters username and password
- Data sent to backend `/register`
- Backend validates and hashes password
- Handles duplicate users (409 error)
- Redirects to login after success

---

### 📌 Login
- User submits username + password
- Backend validates credentials
- Backend returns:
  - JWT Access Token
  - Roles (User / Admin)
- Frontend stores auth in Context API:
  - username
  - roles
  - accessToken
- User is redirected to protected routes based on role

---

## 🛡️ Authorization System

- Protected routes implemented using `RequireRole`
- Role-based access control:
  - User → can access user routes
  - Admin → can access admin routes
- Unauthorized users redirected to `/unauthorized`

---

## ⚙️ Tech Stack

- React (Functional Components)
- React Router
- Context API
- Axios
- Node.js backend (API integration)
- JWT Authentication
- bcrypt password hashing (backend)

---

## 🧠 Key Learnings

- JWT authentication flow (frontend + backend integration)
- Role-based access control in React
- Context API for global auth state management
- Protected routes using React Router
- Handling API errors properly (400 / 401 / 409)
- Axios instance design for scalable projects
- Debugging real-world issues (CORS, role mismatch, auth state issues)

---

## 🔥 Current Status

✔ Registration working  
✔ Login working  
✔ JWT returned from backend  
✔ Roles implemented  
✔ Protected routes working  
✔ Auth context functional  

---

## 🚀 Next Improvements (Planned)

- Persist login using localStorage
- Refresh token implementation
- Axios interceptors (auto attach token)
- Auto logout on token expiry
- UI improvements (clean auth forms)
- Backend integration hardening

---

## 👨‍💻 Author

Built while learning full-stack authentication with MERN concepts and modern React patterns.
