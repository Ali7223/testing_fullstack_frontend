## 🚀 React Authentication Frontend


A simple yet modern authentication frontend built with **React**.
It includes user registration, login, and authentication state management using **Context API**.

---

## ✨ Features

* 🔐 User registration form
* 🔑 Login system
* ✔️ Confirm password validation
* 🌐 Axios API integration
* 🧠 Centralized auth state using Context API
* 🪪 Stores user data (username, roles, access token)
* ⚠️ Basic error handling
* 🎨 Clean centered UI design

---

## 🔐 Authentication Flow

### 📝 Registration

* User enters username and password
* Frontend validates confirm password
* Sends data to `/register` API endpoint
* Shows success or error messages
* Redirects user to login page

---

### 🔑 Login

* User submits credentials



* Stores authentication data in Context API

Stores:

* `username`
* `roles`
* `accessToken`

---

## 🧠 Auth Context Structure

```js
{
  username,
  roles,
  accessToken
}


## 🧠 Learning Goals

This project demonstrates:

* Full-stack authentication flow
* JWT-based authorization
* Secure password handling
* React Context API for global state
* REST API communication
* CORS understanding
* Real-world MERN architecture patterns



## 📌 Note

This project focuses on learning authentication fundamentals and frontend state management.
The backend handles actual authentication logic.

---

## 🏁 Getting Started

```bash
npm install
npm run dev
```
