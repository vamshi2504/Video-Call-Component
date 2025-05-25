<!-- filepath: c:\Users\ravin\OneDrive\Documents\VamshiProjects\DimpuAnnaWork\Video-CallComponent\README.md -->
# Video Call Component

A React & Node.js based video-call widget for doctor–patient consultations.  
Supports waiting rooms, request approvals, and real-time video sessions.

## Features

- Loading spinner while initializing  
- Join-request popups with accept/reject  
- Waiting queue with auto-redirect  
- Full duplex video via WebRTC  
- Simple role-based UI (doctor/patient)

## Folder Structure

```
/backend      – Node.js Express API  
/video-call   – React/Vite frontend component  
  /src        – React source files  
  /public     – Static assets  
.gitignore    
.gitattributes
README.md
```

## Prerequisites

- Node.js ≥ 16  
- npm or yarn  
- A TURN/STUN server (for production)

## Installation

```powershell
# Clone repo
git clone https://github.com/<your-username>/video-call-Component.git
cd video-call-Component

# Install backend deps
cd backend
npm install

# Install frontend deps
cd ../video-call
npm install
```

## Running Locally

### Backend

```powershell
cd backend
npm start
# listens on http://localhost:3000
```

### Frontend

```powershell
cd video-call
npm run dev
# open http://localhost:5173
```

## Usage

1. Open two browser windows—one as doctor, one as patient.  
2. Patient requests to join → doctor approves/rejects.  
3. Once approved, video session starts.

## Scripts

In `/video-call`:
- `npm run dev` – start dev server   

In `/backend`:
- `npm start` – launch API server  

## Contributing

1. Fork the repo  
2. Create a branch (`git checkout -b feature/my-feature`)  
3. Commit your changes (`git commit -m 'Add feature'`)  
4. Push to branch (`git push origin feature/my-feature`)  
5. Open a pull request
