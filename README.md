# 🍽️ MHT Restaurant Landing Page


![App Screenshot](./public/screenshot.png)

---

## 🚀 Overview

A modern and responsive **restaurant landing page** built with **Next.js 15**, **Tailwind CSS**, and **shadcn/ui**.  
This project is designed to provide a digital-first restaurant experience with features like QR code menu access and online table reservations.

---

## 🚀 Features

- 📱 **Responsive design** for desktop, tablet, and mobile  
- 🧭 **Navigation bar** with smooth scrolling  
- 🎨 **Modern UI** built with Tailwind CSS & shadcn/ui  
- 🍕 **Dynamic Menu Section** with QR code access  
- 📍 **Google Maps integration** for restaurant location  
- 📝 **Reservation form** with email notifications (Nodemailer + Gmail SMTP)  
- 💡 **Toast notifications** for better UX  

---

## 🛠️ Tech Stack

- [Next.js 15](https://nextjs.org/) – React framework  
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS  
- [shadcn/ui](https://ui.shadcn.com/) – UI components  
- [Nodemailer](https://nodemailer.com/) – Email sending  
- [TypeScript](https://www.typescriptlang.org/) – Type safety  

---

## 📂 Project Structure

app/
├── api/ # API routes (reservation endpoint)
├── assets/ # Images & icons
├── components/ # Reusable UI components
├── layout.tsx # Root layout
├── page.tsx # Landing page
└── globals.css # Global styles

yaml
Copier le code

---

## ⚡ Getting Started

### 1️⃣ Clone the repo
```bash
git clone https://github.com/MHTech229/mht-restaurant-landing-page-001.git
cd mht-restaurant-landing-page-001
2️⃣ Install dependencies
bash
Copier le code
npm install
3️⃣ Configure environment variables
Create a .env.local file at the root of the project:

env
Copier le code
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_SECURE=false
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
FROM_EMAIL="your-email@gmail.com"
TO_EMAIL="receiver@example.com"
⚠️ For Gmail, you must create an App Password instead of using your normal password.
Guide: Gmail App Passwords

4️⃣ Run the development server
bash
Copier le code
npm run dev
Then open http://localhost:3000 🚀

📧 Reservation Emails
When a user submits the reservation form, an email is sent to the configured TO_EMAIL.

Emails are sent using Nodemailer with Gmail SMTP.

📸 Screenshots
Add here a screenshot of your landing page (hero section, menu, reservation form, etc.)

📜 License
This project is licensed under the MIT License.
See the LICENSE file for more details.

👨‍💻 Author
MEHINTO Charbel (@MHTech229)
Web Developer | Fullstack (React, Vue, NestJS) | Based in Benin
