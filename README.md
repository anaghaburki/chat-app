# Chatty – Realtime Chat Application

Chatty is a full-stack real-time chat application built using modern web technologies.  
It provides instant messaging, media sharing, live user presence, theme switching, and secure authentication.  
Designed with scalability and responsiveness in mind, Chatty enables seamless one-on-one conversations using WebSockets and JSON Web Tokens (JWT).

## Tech Stack

### Frontend
- ReactJS with Vite  
- Tailwind CSS for styling  
- Zustand for state management  
- Socket.io Client for real-time communication  
- JWT for token-based authentication  

### Backend
- Node.js with Express.js  
- MongoDB for data storage  
- Socket.io Server for WebSocket communication  
- JWT for user session handling

## Features

- Realtime one-on-one messaging  
- Image and media upload support  
- Light and dark theme toggle  
- Secure authentication using JWT  
- Live online/offline user presence indicator  
- Fully responsive user interface  
- Persistent message history using MongoDB  

## Getting Started

### 1. Clone the Repository

git clone https://github.com/anaghaburki/chat-app.git
cd chat-app

### 2. Setup Frontend

cd client  
npm install  
npm run dev  

Create a `.env` file inside the client directory with the following:

VITE_API_URL=http://localhost:5000

### 3. Setup Backend

cd server  
npm install  
npm run dev  

Create a `.env` file inside the server directory with the following:

PORT=5000  
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_secret_key

## License

This project is licensed under the MIT License.  
See the LICENSE file for more details.

## Author

Anagha Burki S  
Email: anagha.burki@gmail.com  
GitHub: https://github.com/anaghaburki  
LinkedIn: https://www.linkedin.com/in/anagha-burki

![image](https://github.com/user-attachments/assets/e8c50ac6-c1f8-4610-8e7d-a907a6a0400b)
![image](https://github.com/user-attachments/assets/84302d93-96b5-46c3-a0af-7661cd24eb9f)
![image](https://github.com/user-attachments/assets/31475044-a07d-4881-986e-3f454c68e538)
![image](https://github.com/user-attachments/assets/868f516f-ec21-48fb-8627-d8288565e7d5)
![image](https://github.com/user-attachments/assets/5b81577d-61fc-4b38-aa77-91c48bb66ba2)





