# Secure Link App

A simple application inspired by [scrt.link](https://scrt.link), built with **Django**, **React (Vite)**, and **Redis**.  
It allows users to create one-time secret links — once revealed, the message is deleted.

---

## How to Run

### 1. Clone the Repository
```bash
git clone https://github.com/alejandrocald13/progra-web-25.git
cd <progra-web-25>
git checkout assessment-3
```

### 2️. Build and Start the Containers
```bash
docker compose up --build
```

This command starts all services:
- **Backend (Django)** → `http://localhost:8000`
- **Frontend (React)** → `http://localhost:5173`
- **Redis Insight** → `http://localhost:5540`

---

## 3. Access

| Service | URL |
|----------|-----|
| Frontend | http://localhost:5173 |
| Backend | http://localhost:8000 |
| Redis Insight | http://localhost:5540 |

To connect Redis Insight, use:
```
Host: redis
Port: 6379
```

---

## 4. Stop the Containers
To stop all running services:
```bash
docker compose down
```

**Author:** Roberto Alejandro Calderón Martínez

**Project:** Assessment #3 – Secure Link (Django + React + Redis)
