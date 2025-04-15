![logo](https://raw.githubusercontent.com/jozskagyerek72/ProjektMunka_Frontend/refs/heads/master/public/WL(good).png)
# WorkLinker
**A Web-Based Work Tracking System**  

## What is WorkLinker?
WorkLinker is a modern web-based time-tracking and workforce management system designed to help businesses and employees accurately log work hours and simplify payroll processing. Our platform provides an intuitive and secure solution that enhances transparency and efficiency in workforce management.

## Problem Statement  
Manual work-hour tracking is prone to inaccuracies, data loss, and delays in payroll processing. This system automates time tracking to ensure precision, security, and efficiency for both employees and HR teams.  

## System Objectives  
- Provide an **easy-to-use** time-tracking solution.  
- Ensure **accurate** record-keeping.  
- Enhance workforce management and **payroll integration**.  
- Improve **accessibility** and **security** via cloud storage.  

## Key Features  
### **Employee Module**  
- Log into shifts (start/end).  (This uses the Qr reader module of this project which you can view [here](https://github.com/jozskagyerek72/Qr_reader_vizsgaprojekt))
- View shift analytics (worked hours, estimated paycheck).  

### **HR Module**  
- Activate/deactivate workers.  
- View all employees and their analytics.  
- Choosable database schemas and the tests page are accessible to admins

### **Cloud & Security**  
- Real-time cloud storage for accessibility.  
- Secure authentication for all users.  

---

## How it works

- **Services Used**
  - Firebase for storing data and for authentication 
  - Cloudinary for storing images
  - Netlify for hosting both the main website and the QR-Gate website

- **Technologies Used**
  - React 
  - TailwindCSS + DaisyUi
  - Vite for dev tools, build tools and testing
  - PNPM for package managing