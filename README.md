 # AWS 3-Tier Portfolio Web Application

This project is a full-stack **3-tier web application** deployed on **AWS infrastructure**, featuring:

- **Frontend**: React App served via **Nginx** on EC2
- **Backend**: Node.js REST API
- **Database**: Aurora MySQL (Amazon RDS)
  
## Architecture Overview

 | Tier      | Technology                 | Details                                                           |
|-----------|----------------------------|-------------------------------------------------------------------|
| Web Tier  | React + Nginx              | Hosted on EC2, Auto Scaling Group, behind ALB, HTTPS via ACM      |
| App Tier  | Node.js                    | Private EC2, ALB in private subnet, connected to Web Tier         |
| DB Tier   | Aurora MySQL (Amazon RDS)  | Hosted in private subnet, accessible only from App Tier           |

---
 
## Architecture Diagram

![3TierArch](https://github.com/user-attachments/assets/1d727dfe-06ab-4c0f-b164-9c4013dc056a)



##  Features

-  Frontend: React app hosted on EC2 (via Nginx)
-  Backend: Node.js app on EC2 with API endpoints
-  Database: Aurora MySQL with secure backend connection
-  HTTPS enabled with AWS ACM
-  Custom domain via Route 53
-  Auto Scaling & Load Balancers for Web & App tiers
-  Security Groups & Private Subnets for isolation

---

## Services Used

 - EC2 (Frontend and Backend)
- ALB (Web & App Tiers)
- S3 (for file uploads and backups)
- Route 53 (DNS + custom domain)
- ACM (SSL Certificates)
- Aurora MySQL (RDS)
- Auto Scaling Groups
- VPC + Subnets + IGW + NAT Gateway
- Security Groups + Key Pairs

## Application Flow

1. **User visits** `https://manasportfolio.com` → lands on React frontend (Web Tier).
2. Frontend **fetches project data** from the Node.js backend (App Tier).
3. Backend **queries Aurora MySQL** and returns the response.
##  Deployed Domain

Visit the site here: [https://manasportfolio.com](https://manasportfolio.com)

---

##  Deployment Steps 

1. **Frontend Tier**
   - Built React app
   - Served using Nginx on EC2
   - Placed behind ALB + Auto Scaling
   - Domain mapped via Route 53

2. **App Tier**
   - Node.js app deployed on EC2 (private subnet)
   - Connected to Aurora MySQL
   - Behind separate ALB (internal)

3. **Database Tier**
   - Aurora MySQL created in private subnet
   - Only accessible by backend

4. **Security**
   - ALBs configured for HTTPS via ACM
   - Security Groups used for tier-specific access

---
