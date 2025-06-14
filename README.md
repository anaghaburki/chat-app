Chatty – Realtime Chat Application
Chatty is a full-stack real-time chat application built using modern web technologies. It offers instant messaging, media sharing, live user presence, theme support, and secure authentication. Designed with scalability, responsiveness, and performance in mind, Chatty enables smooth 1-on-1 conversations using WebSockets and JWT for secure sessions.

Tech Stack
Frontend:
ReactJS with Vite

Tailwind CSS for utility-first styling

Zustand for state management

Socket.io Client for real-time messaging

JWT (WebTokens) for authentication

Backend:
Node.js with Express.js

MongoDB for data storage

Socket.io Server for event-based communication

JWT for user session security

Features
Real-time 1-on-1 messaging

Image/media uploads

Theme toggle: light and dark mode

Token-based user authentication

Live online/offline user status

Responsive design

Message history with persistent storage

Getting Started
1. Clone the repository
git clone https://github.com/anaghaburki/chat-app.git
cd chat-app

2. Set up the frontend
cd client
npm install
npm run dev
Ensure your .env file in client/ contains:
VITE_API_URL=http://localhost:5000

3. Set up the backend
cd server
npm install
npm run dev
Your .env file in server/ should include:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

License
This project is licensed under the MIT License.

Author
Anagha Burki S
Email: anagha.burki@gmail.com
GitHub: anaghaburki
LinkedIn: anagha-burki
