# 📝 MERN Todo Application

## JWT Authentication + Role-Based Authorization (User / Admin)

------------------------------------------------------------------------

## 📌 Project Description

This is a Full Stack Todo Application built using the MERN Stack:

-   MongoDB
-   Express.js
-   React.js
-   Node.js

This project demonstrates:

-   🔐 User Authentication (Register & Login)
-   🔑 JWT Token Based Security
-   👤 Role-Based Authorization (User / Admin)
-   🛡 Protected Routes
-   📝 Full CRUD Operations

This is a beginner-friendly and interview-ready full-stack project.

------------------------------------------------------------------------

# 🚀 Tech Stack

### Frontend

-   React\
-   React Router (createBrowserRouter)\
-   Context API\
-   Axios\
-   Bootstrap

### Backend

-   Node.js\
-   Express.js\
-   MongoDB\
-   Mongoose\
-   jsonwebtoken (JWT)\
-   bcryptjs\
-   dotenv\
-   cors

------------------------------------------------------------------------

# 🎯 Features

## 🔐 Authentication

-   User Registration\
-   User Login\
-   Password hashing using bcrypt\
-   JWT token generation\
-   Token verification using middleware

## 👤 Role-Based Access

### 👤 User Role

-   Can create todos\
-   Can see only their own todos\
-   Can edit their own todos\
-   Can delete their own todos

### 👑 Admin Role

-   Can see all users' todos\
-   Can edit any todo\
-   Can delete any todo\
-   Can access admin panel

------------------------------------------------------------------------

# 🧠 Authentication Flow

1.  User registers or logs in\
2.  Backend verifies email and password\
3.  Backend generates JWT token\
4.  Token is stored in localStorage\
5.  Token is sent in request headers\
6.  Backend verifies token using middleware

Authorization header format:

Authorization: Bearer `<token>`{=html}

------------------------------------------------------------------------

# 📂 Project Structure

project-root\
│\
├── backend\
│ ├── config\
│ │ └── db.js\
│ ├── models\
│ │ ├── User.js\
│ │ └── Todo.js\
│ ├── controllers\
│ │ ├── authController.js\
│ │ └── todoController.js\
│ ├── middleware\
│ │ └── authMiddleware.js\
│ ├── routes\
│ │ ├── authRoutes.js\
│ │ └── todoRoutes.js\
│ ├── server.js\
│ └── .env\
│\
└── frontend\
├── api\
│ └── axios.js\
├── context\
│ └── AuthContext.jsx\
├── components\
│ ├── ProtectedRoute.jsx\
│ ├── AdminRoute.jsx\
│ └── Navbar.jsx\
├── pages\
│ ├── Login.jsx\
│ ├── Register.jsx\
│ ├── TodoApp.jsx\
│ └── AdminPanel.jsx\
└── main.jsx

------------------------------------------------------------------------

# 🗄 Database Models

## User Model

-   name (String)\
-   email (String, unique)\
-   password (Hashed)\
-   role (user / admin)\
-   createdAt\
-   updatedAt

Default role = user

## Todo Model

-   title (String)\
-   completed (Boolean)\
-   user (Reference to User)\
-   createdAt\
-   updatedAt

Relationship: One User → Many Todos

------------------------------------------------------------------------

# 🔗 API Endpoints

## Authentication

POST /api/auth/register\
POST /api/auth/login

## Todos (Protected)

GET /api/todos\
POST /api/todos\
PUT /api/todos/:id\
DELETE /api/todos/:id

Access Rules: - User → only their own todos\
- Admin → all todos

------------------------------------------------------------------------

# 🔓 Logout

Logout works by: 1. Removing token from localStorage\
2. Clearing user from Context\
3. Redirecting to login page

JWT is stateless, so no backend session storage is required.

------------------------------------------------------------------------

# ⚙️ How To Run The Project

## Backend Setup

1.  Install dependencies\
    npm install

2.  Create a .env file inside backend folder

    PORT=5000\
    MONGO_URI=your_mongodb_connection_string\
    JWT_SECRET=your_secret_key

3.  Start backend server\
    npm run dev

Backend runs on:\
http://localhost:5000

------------------------------------------------------------------------

## Frontend Setup

1.  Install dependencies\
    npm install

2.  Start frontend\
    npm run dev

Frontend runs on:\
http://localhost:5173

------------------------------------------------------------------------

# 📚 Concepts Covered

-   MERN Stack Architecture\
-   JWT Authentication\
-   Role-Based Authorization\
-   Middleware in Express\
-   Protected Routes\
-   CRUD Operations

------------------------------------------------------------------------

# 🎓 Learning Outcome

After completing this project, students will understand:

✔ How authentication works\
✔ How JWT secures backend APIs\
✔ How role-based access control works\
✔ How frontend and backend communicate\
✔ How to build a complete MERN application

------------------------------------------------------------------------

# 📌 Conclusion

This MERN Todo Application demonstrates secure authentication,
role-based authorization, protected routes, and full CRUD operations in
a clean and structured way.
