# PARUVATHTHE PAYIR SEI (PPS) - Website

## About
Welcome to the official repository for the PARUVATHTHE PAYIR SEI (PPS) website! 
At PPS, we believe true education goes beyond textbooks. We are dedicated to enriching the younger generation through various educational programs, internships, and skill-building courses. 

This repository contains the source code for our modern, responsive, and highly-performant website, built using Next.js for the frontend and Python FastAPI for the backend.

## Implementation Steps & Architecture

### 1. Technology Stack
*   **Frontend**: Next.js (React), Tailwind CSS for styling, Framer Motion for smooth animations.
*   **Backend**: Python FastAPI (currently serving as a foundation for future dynamic database integrations and secure form processing).
*   **Deployment**: Fully containerized using Docker and Docker Compose. Hosted seamlessly on Render.

### 2. Running Locally for Development

To run this project locally, you will need to start both the Frontend and Backend servers.

**Frontend (Next.js)**
1. Open a terminal and navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies (if you haven't already):
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev -p 3001
   ```
4. Access the site at `http://localhost:3001`.

**Backend (FastAPI)**
1. Open a *new* terminal window and navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```
3. Start the server with hot-reloading:
   ```bash
   uvicorn main:app --reload --port 8000
   ```
4. Access the API at `http://localhost:8000`.

### 3. Docker Deployment (Production)
We utilize a multi-stage Docker build to optimize performance and reduce container size. 

1. Ensure Docker and Docker Compose are installed on your machine.
2. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
3. Build and spin up the containers in the background:
   ```bash
   docker-compose up -d --build
   ```
This will automatically launch an Nginx reverse proxy routing traffic to your Next.js standalone container.
