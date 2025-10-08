# 🎵 Music Project — Django + PostgreSQL (Dockerized)

This project demonstrates a simple **Django application** for managing musicians, albums, and songs.  
It uses **Docker** and **Docker Compose** to containerize both the Django app and a **PostgreSQL** database.

---

## Project Overview

The system includes three core models:

- **Musician** 
- **Album**
- **Song**

## How to Run the Project

### 1. Clone the Repository
```bash
git clone git@github.com:alejandrocald13/progra-web-25.git
cd progra-web-25
```

### 2. Build the docker container
```bash
  docker compose build
```
### 3. Start the docker container
```bash
  docker compose up
```
### 4. Open django on localhost:8000
```bash
http://localhost:8000
```
### 5. Clean containers
```bash
  docker compose down
```
