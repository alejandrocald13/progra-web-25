# SonarQube Tradio-App Scan Results

## Backend (Django)

### General View
![Backend General View](/docs/screenshot-backend-generalview.png)

### Warnings
![Backend Warnings](/docs/screenshot-backend-warning1.png)

---

## Frontend (Next.js)

### General View
![Frontend General View](/docs/screenshot-frontend-generalview.png)

## Main Commands Used

```bash
# Start SonarQube and PostgreSQL
docker compose up -d

# Run backend (Python) analysis
pysonar --sonar-host-url=http://localhost:9000 --sonar-token=<backend-token> --sonar-project-key=backend

# Run frontend (Next.js) analysis
sonar -Dsonar.host.url=http://localhost:9000 -Dsonar.token=<frontend-token> -Dsonar.projectKey=frontend