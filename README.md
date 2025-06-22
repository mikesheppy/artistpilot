# ArtistPilot Prototype

A hosted web prototype for ArtistPilot – an artist support platform that tailors content by location, genre, and career level.

## 🚀 Features
- Personalized content feed
- Filtered by user’s location, genre, and level
- Express.js backend with a React frontend

---

## 🔧 Deployment Instructions

### Backend on Render
1. Go to [Render](https://render.com) and create a new Web Service.
2. Set the root directory to `backend/`
3. Set the Start command to:
   ```
   node server.js
   ```

### Frontend on Vercel
1. Go to [Vercel](https://vercel.com)
2. Create a new project from GitHub
3. Set root directory to `frontend/`
4. Add environment variable:
   ```
   REACT_APP_API_URL=https://your-backend-url.onrender.com/api/recommendations
   ```

Update the frontend’s `App.jsx` if needed to pull the env variable.

---

## 🗂 Folder Structure
```
ArtistPilot/
├── backend/
│   └── server.js
├── frontend/
│   └── App.jsx
└── README.md
```

---

## 📄 License
MIT