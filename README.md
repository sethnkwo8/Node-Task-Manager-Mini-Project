# Task Manager API

A RESTful backend API built with Node.js, Express, and MongoDB for managing user authentication and tasks.

---

## 🚀 Features

- User authentication (JWT)
- Protected routes
- Task CRUD operations
- Input validation using Zod
- Error handling middleware
- MongoDB database integration
- Environment variable configuration

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- Zod (validation)
- JSON Web Tokens (JWT)
- Bcrypt

---

## 📦 Installation

```bash
git clone https://github.com/sethnkwo8/Node-Task-Manager-Mini-Project
npm install
```

---

## ⚙️ Environment Variables

Create a .env file in the root directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## ▶️ Running the Server

```bash 
npm run dev 
```

Server runs on:

```code
http://localhost:3000
```

## 🔐 Authentication

All protected routes require a Bearer token:

```code
Authorization: Bearer <your_token>
```

---

## 📌 API Endpoints

### Auth Routes

#### Signup
```code
POST /auth/signup
```

Body:
```json
{   
    "name": "Seth",   
    "email": "seth@example.com",  
    "password": "password123" 
}
 ```

---

#### Login
```code
POST /auth/login
```

Body:
```json
{   
    "email": "seth@example.com",  
    "password": "password123" 
}
 ```

---

### Task Routes (Protected)

#### Create Task
```code
POST /tasks
```

Body:
```json 
{   
    "title": "Learn Node",  
    "description": "Practice backend" 
} 
```

---

#### Get All Tasks
```code
GET /tasks
```

---

#### Update Task
```code
PATCH /tasks/:id
```

---

#### Delete Task
```code
DELETE /tasks/:id
```

---

## 🧠 Project Structure

```code
src/  
    controllers/  
    services/  
    models/   
    routes/   
    middleware/  
    validators/   
    config/
```

---

## ⚠️ Notes

- Passwords are hashed using bcrypt
- JWT is used for authentication
- MongoDB is used as the database
- Environment variables are required for configuration

---

## 📌 Future Improvements

- Filtering & pagination
- Task categories
- Rate limiting
- Logging
- Unit testing

---

## 👤 Author

Seth Nkwo

---

## 📄 License

This project is open-source and available under the MIT License