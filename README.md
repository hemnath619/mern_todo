# MERN Stack TODO Web Application

This is a simple TODO application built using the MERN stack. It allows users to manage their tasks with basic CRUD operations (Create, Read, Update, Delete).

## Screenshot
<img src="https://github.com/hemnath619/mern_todo/blob/main/edit%20page.png" height=300px width=500px alt="to_do"> <img src="https://github.com/hemnath619/mern_todo/blob/main/login%20page.png" height=300px width=500px alt="to_do"> <img src="https://github.com/hemnath619/mern_todo/blob/main/todo%20page.png" height=300px width=500px alt="to_do"> <img src="https://github.com/hemnath619/mern_todo/blob/main/backend%20page.png" height=300px width=500px alt="to_do"> 
## Features

- User authentication (signup, login, logout)
- Create a new task
- View all tasks
- Update a task
- Delete a task
- Mark tasks as completed

## Technologies Used

- **MongoDB**: NoSQL database to store tasks and user information
- **Express.js**: Backend framework to handle HTTP requests and routes
- **React.js**: Frontend library for building user interfaces
- **Node.js**: JavaScript runtime environment for server-side scripting

## Getting Started

To get a local copy of the project up and running, follow these steps:

### Prerequisites

- Node.js installed on your machine
- MongoDB installed locally or accessible via MongoDB Atlas

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your/repository.git
   cd repository-folder
   
2. **Install dependencies:**
    
    ``` bash
    cd client && npm install
    cd ../server && npm install
### Configuration
**Server Configuration**
- Create a .env file in the server directory and add the following variables:

    ```bash
    MONGODB_URI=<your_mongodb_uri>
    JWT_SECRET=<your_jwt_secret>
Replace <your_mongodb_uri> with your MongoDB connection string and <your_jwt_secret> with a secret key for JWT token generation.

## Running the Application
1. **Start the server:**

    ```bash
    cd server
    npm start
2. **Start the client:**
    ```bash
    cd client
    npm start
3. **Open your browser and navigate to http://localhost:3000.**

## API Endpoints
**User Routes**
- POST /api/users/register - Register a new user
- POST /api/users/login - Login a user
**Task Routes**
- GET /api/tasks - Get all tasks
- POST /api/tasks - Create a new task
- PUT /api/tasks/:id - Update a task
- DELETE /api/tasks/:id - Delete a task
### Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any changes.

### License
This project is licensed under the MIT License. See the LICENSE file for details.

### Contact
- Your Name: your.email@example.com
- GitHub: https://github.com/yourusername
