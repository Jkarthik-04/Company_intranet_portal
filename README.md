# Company Intranet Portal – DevOps Project

A complete DevOps implementation of a **Company Intranet Portal** web application demonstrating Continuous Integration (CI), Continuous Deployment (CD), containerization, Kubernetes orchestration, and monitoring using Jenkins, Docker, Kubernetes, Nagios, Graphite, Telegraf, and Grafana.

---

## Project Overview

This project demonstrates a complete DevOps workflow, covering the entire software delivery lifecycle from application development and automated testing to deployment and continuous monitoring.

The application is a web-based **Company Intranet Portal** designed to provide employees with centralized access to essential company information and internal resources. The portal includes the following modules:

* **Home** – Displays company news, announcements, and updates.
* **About Us** – Provides information about the company's vision, mission, and organizational details.
* **Departments** – Lists various departments and their functions.
* **Employee Resources** – Offers quick access to internal documents, policies, forms, and useful links.
* **Contact** – Contains company contact information and support details.

The application is containerized using Docker to ensure consistency across different environments. Jenkins automates the Continuous Integration and Continuous Deployment (CI/CD) pipeline by building the application, creating Docker images, and deploying them to a Kubernetes cluster. Nagios continuously monitors the application's availability through HTTP health checks, while Telegraf collects system performance metrics such as CPU usage, memory utilization, disk usage, network traffic, and system uptime. These metrics are stored in Graphite and visualized through Grafana dashboards, providing real-time insights into the health and performance of the application and its infrastructure.



---

# Technologies Used

| Technology | Purpose |
|------------|----------|
| Java 21 | Application Development |
| Spring Boot | Backend Framework |
| Maven | Build Tool |
| Docker | Containerization |
| Docker Hub | Image Registry |
| Kubernetes | Container Orchestration |
| Jenkins | CI/CD Pipeline |
| Nagios | Website Monitoring |
| Graphite | Metrics Storage |
| Telegraf | System Metrics Collection |
| Grafana | Metrics Visualization |

---

# Project Structure

```
Event-Manager/
│
├── event-manager/
│   ├── src/
│   ├── target/
│   ├── pom.xml
│   ├── Dockerfile
│   └── ...
│
├── deployment.yaml
├── service.yaml
├── Jenkinsfile
├── localhost.cfg
├── telegraf/
│     └── telegraf.conf
│
└── README.md
```

---

# Features

- Spring Boot Web Application
- Docker Containerization
- Kubernetes Deployment
- Jenkins CI/CD Pipeline
- Docker Hub Integration
- Nagios Website Monitoring
- Graphite Metrics Collection
- Grafana Monitoring Dashboard

---

# Jenkins Pipeline

The Jenkins pipeline performs the following stages:

1. Checkout Source Code
2. Build using Maven
3. Create Docker Image
4. Push Image to Docker Hub

Pipeline Flow:

```
GitHub
   │
   ▼
Jenkins
   │
   ▼
Maven Build
   │
   ▼
Docker Build
   │
   ▼
Docker Push
```



# Kubernetes Deployment

Deploy Application

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

Check Pods

```bash
kubectl get pods
```

Check Services

```bash
kubectl get svc
```



Application URL

```
http://localhost:9090
```

---

# Jenkins Setup

Install Plugins

- Git
- Pipeline
- Docker Pipeline
- Kubernetes CLI
- Maven Integration

Configure

- JDK
- Maven
- Docker
- kubectl

Create Pipeline Job

Repository:

```
(https://github.com/Jkarthik-04/Company_intranet_portal)
```

Pipeline Script:

```
Jenkinsfile
```

---

# Nagios Monitoring

Nagios monitors:

- Website Availability
- HTTP Status

Application URL

```
http://host.docker.internal:8080
```

Nagios UI

```
http://localhost:8085
```

Example Status

```
Company Intranet Portal Website

Status : OK

HTTP 200 OK
```

---

# Graphite Monitoring

Metrics Collected

- CPU Usage
- Memory Usage
- Disk Usage
- Network Usage
- System Uptime

Graphite URL

```
http://localhost:8086
```

---

# Grafana Dashboard

Grafana Visualizes

- CPU Usage
- Memory Usage
- Disk Usage
- Network Usage
- Uptime

Grafana URL

```
http://localhost:3000
```

Default Login

```
Username: admin

Password: admin
```

---

# Monitoring Stack

```
Telegraf
     │
     ▼
 Graphite
     │
     ▼
 Grafana
```



# Author

**Karthikeyan J**

B.Tech Computer Science (AI & ML)

VIT Vellore

GitHub:

(https://github.com/Jkarthik-04)

---

# License

This project is developed for educational purposes as part of the DevOps course at VIT.
