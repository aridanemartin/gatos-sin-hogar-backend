**Gatos Sin Hogar - Backend**

Backend for ngo dedicated to the rescue of abandoned animals in the streets. This backend is being developed in NodeJs as a collaboration with El Rincón Institute mentoring the student Kilian Sosa.

To run the project:

1. Install docker and run it
2. docker build -t gatos-sin-hogar-backend .
3. docker run -p 8080:7000 gatos-sin-hogar-backend

IMPORTANT
This project has a frontend repository related

To have in mind:

User from EC2 needs permissions to interact with Docker
(Run this command in EC2 for troubleshooting)
sudo usermod -aG docker $USER
