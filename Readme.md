
# DreamMatch 💘  
An AI-powered dating app that helps users break the ice, find meaningful matches, and even get suggestions while they sleep — thanks to our signature feature, **DreamMatch**.

---

## 🔧 Tech Stack

- **Frontend:** React + Vite + Tailwind CSS  
- **Backend:** Java + Spring Boot *(WIP)*  
- **Database:** MySQL  
- **AI Layer:** OpenAI GPT (3.5 / 4)

---

## 💡 MVP Features (Current Progress)

- ✅ User authentication (Login / Signup) via Context API
- ✅ Protected routes using `ProtectedRoute.jsx`
- ✅ Persistent login state via `localStorage`
- ⏳ User profile setup and onboarding *(not started)*
- ⏳ Match feed with static/mock data *(not started)*
- ⏳ AI-powered icebreaker suggestions *(not started)*
- ⏳ DreamMatch: background match suggestions *(logic not implemented)*
- 🧠 1-on-1 GPT-assisted chat *(planned)*

---

## 📁 Project Structure (Frontend)

```
📦 frontend/
├── src/
│   ├── assets/                # Static assets (e.g. images, icons)
│   ├── components/            # Reusable UI components
│   │   ├── InputField.jsx
│   │   ├── IntroScreen.jsx
│   │   ├── Navbar.jsx
│   │   └── ProtectedRoute.jsx
│   ├── context/
│   │   └── AuthContext.jsx    # Login state and auth logic
│   ├── hooks/                 # (Empty for now — for custom hooks later)
│   ├── pages/                 # Route-bound pages
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Profile.jsx
│   │   └── Signup.jsx
│   ├── utils/
│   │   └── validators.js      # Form validation logic
│   ├── App.jsx                # Route structure
│   └── main.jsx               # App entry point
├── index.css                  # Global Tailwind styles
├── tailwind.config.js         # Tailwind customization
├── vite.config.js             # Vite bundler config
```

---

## 🚀 Setup Instructions

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend (Spring Boot)
```bash
cd backend
./mvnw spring-boot:run
```

> Make sure MySQL is running and `application.properties` is configured correctly.

---

## 🧠 AI Features (Coming Soon)

- GPT-based icebreaker generation
- DreamMatch sleep-time background matchmaking
- GPT-powered chat guidance during conversations

---

## 📌 Development Status

- [x] Frontend routing + auth context
- [x] LocalStorage-based session persistence
- [x] Componentized structure with Tailwind UI
- [ ] Spring Boot backend setup
- [ ] REST API endpoints for login/signup
- [ ] Profile & match display logic
- [ ] AI integration

---

## ❤️ Built by Aakash with 💻, ☕, and relentless hustle.
