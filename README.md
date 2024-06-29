**Gatos Sin Hogar - Backend**

Backend for ngo dedicated to the rescue of abandoned animals in the streets. This backend is being developed in NodeJs as a collaboration with El Rincón Institute mentoring the student Kilian Sosa.

To run the project:

1. Install docker and run it
2. docker build -t gatos-sin-hogar-backend .
3. docker run -p 8080:7000 gatos-sin-hogar-backend

IMPORTANT
This project has a frontend repository related

To have in mind:

Ubuntu doesn't accept RSA keys by default

1. Edit /etc/ssh/sshd_config using `sudo nano`
2. Add this line at the end of the file `CASignatureAlgorithms +ssh-rsa`

User from EC2 needs permissions to interact with Docker
(Run this command in EC2 for troubleshooting)
sudo usermod -aG docker $USER

CONNECT TO INSTANCE
`ssh -i "gatos-sin-hogar.pem" ubuntu@ec2-18-133-76-236.eu-west-2.compute.amazonaws.com`
