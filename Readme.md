# DreamMatch 💘  
An AI-powered dating app that helps users break the ice, find meaningful matches, and even get suggestions while they sleep — thanks to our signature feature, **DreamMatch**.

---

## 🔧 Tech Stack

- **Frontend:** React + Vite + Tailwind CSS  
- **Backend:** Java + Spring Boot  
- **Database:** MySQL  
- **AI Layer:** OpenAI GPT (3.5 / 4)

---

## 💡 MVP Features (Phase 1)

- User authentication (Login / Signup)
- Protected routes & persistent sessions
- User profile setup and onboarding
- Match feed with static/mock data
- AI-powered icebreaker suggestions *(frontend placeholder for now)*
- DreamMatch: background match suggestions *(logic placeholder for now)*
- 1-on-1 GPT-assisted chat *(planned)*

---

## 📁 Project Structure

```bash
📦 dreammatch/
├── frontend/
│   ├── src/
│   │   ├── pages/           # Login, Signup, Home, Profile
│   │   ├── components/      # Navbar, InputField, ProtectedRoute
│   │   ├── context/         # AuthContext
│   │   ├── utils/           # Form validators
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── tailwind.config.js
└── backend/
    ├── src/main/java/com/dreammatch/
    │   ├── controller/
    │   ├── model/
    │   ├── repository/
    │   ├── service/
    │   └── DreamMatchApplication.java
