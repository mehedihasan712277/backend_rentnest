# 🏠 RentNest API

> A secure and scalable backend API for a rental property marketplace where landlords can manage properties, tenants can find rental homes, and admins can oversee the entire platform.

<br />

## 🌐 Live Links

- **Backend API:** https://backend-rentnest.vercel.app/
- **API Documentation:** : will be added

<br />

# 📖 Project Overview

RentNest API is a RESTful backend application built with **Express.js**, **TypeScript**, **Prisma ORM**, and **PostgreSQL**. The system provides role-based access for **Tenants**, **Landlords**, and **Admins**, allowing users to manage rental properties, submit rental requests, process payments, and leave reviews.

The project follows a modular architecture, making it easy to maintain, scale, and extend with additional features.

<br />

# 🚀 Tech Stack

### Backend

- Express.js
- TypeScript

### Database

- Prisma Postgres
- Prisma ORM

### Authentication

- JWT (JSON Web Token)
- bcryptjs
- RBAC
- Access & Refresh Token

### Payment

- Stripe

### Others

- Cookie Parser
- CORS
- dotenv

<br />

# ✨ Main Features

## 👤 Authentication & Authorization

- User Registration
- Secure Login
- JWT Authentication
- Role-based Authorization
- Password Hashing

## 🏡 Property Management

- Create Property Listings
- Update Property Information
- Delete Properties
- Property Availability Management
- Property Categories
- Property Amenities
- Search & Filtering

## 🏘 Rental Management

- Submit Rental Requests
- Prevent Duplicate Requests
- Approve / Reject Requests
- Rental History
- Request Status Tracking

## 💳 Payment System

- Stripe Payment Integration
- Payment Verification
- Payment History
- Transaction Records

## ⭐ Review System

- Property Reviews
- Tenant Reviews
- Review Management

## 👨‍💼 Admin Panel

- User Management
- Block / Unblock Users
- Manage Categories
- Manage Properties
- View Rental Requests
- Platform Monitoring

<br />

# 📦 Dependencies

### Main Dependencies

- express
- typescript
- prisma
- @prisma/client
- pg
- jsonwebtoken
- bcryptjs
- stripe
- cookie-parser
- cors
- dotenv
- http-status

### Development Dependencies

- tsx
- @types/node
- @types/express
- @types/jsonwebtoken
- @types/cookie-parser
- @types/cors
- @types/pg

---

# 📁 Project Structure

```
RentNest
│
├── api/
├── src/
│   ├── config/
│   ├── lib/
│   ├── middleware/
│   ├── modules/
│   ├── utils/
│   ├── app.ts
│   └── server.ts
│
├── prisma/
│   ├── migrations/
│   └── schema/
│
├── generated/
├── dist/
│
├── package.json
├── prisma.config.ts
├── tsconfig.json
├── vercel.json
└── README.md
```

<br />

# ⚙️ Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/rentnest-api.git
```

```bash
cd rentnest-api
```

<br />

## 2. Install Dependencies

```bash
npm install
```

<br />

## 3. Configure Environment Variables

Create a `.env` file in the root directory.

Example:

```env
DATABASE_URL=


PORT=5000

APP_URL=https://backend-rentnest.vercel.app/

BCRYPT_SALT_ROUNDS=

JWT_ACCESS_SECRET=
JWT_REFRESH_SECRET=

JWT_ACCESS_EXPIRES_IN=
JWT_REFRESH_EXPIRES_IN=

STRIPE_PRODUCT_ID=
STRIPE_PRICE_ID=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

ADMIN_REGISTRATION_KEY=
```

<br />

## 4. Generate Prisma Client

```bash
npx prisma generate
```

<br />

## 5. Run Database Migrations

```bash
npx prisma migrate deploy
```

For local development you may use:

```bash
npx prisma migrate dev
```

<br />

## 6. Start Development Server

```bash
npm run dev
```

<br />

## 7. Build the Project

```bash
npm run build
```

<br />

## 8. Run Production Server

```bash
npm start
```

<br />

# 🛠 Available Scripts

```bash
npm run dev          # Start development server

npm run build        # Generate Prisma Client & compile TypeScript

npm start            # Run production build

npm run vercel-build # Build for Vercel deployment

npm run stripe:webhook
```

<br />

# 🗄 Database

The application uses **PostgreSQL** with **Prisma ORM**.

Main entities include:

- Users
- Profiles
- Properties
- Categories
- Amenities
- Rental Requests
- Rentals
- Payments
- Reviews
- Subscriptions

<br />

# 🔐 Authentication

The API uses:

- JWT Authentication
- HTTP Only Cookies
- Role-Based Access Control
- Password Hashing using bcrypt

<br />

# 🚀 Deployment

The project is configured for deployment on:

- Vercel
- PostgreSQL

<br />

# 👨‍💻 Author

**Md. Mehedi Hasan**

Full Stack Web Developer
