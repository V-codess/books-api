# Books Catalog API with AWS S3 Image Upload

A RESTful backend API built with Node.js, TypeScript, Express, and MongoDB that manages a books catalog and securely handles book cover image uploads using AWS S3.

---

## 🧩 Problem Statement

This API provides a scalable backend for a books catalog with support for:
- CRUD operations on books
- Secure image uploads for book covers using AWS S3
- Query filtering and pagination

This solves the common backend needs of a content-heavy application where media must be stored durably and separately from application servers.

---

## 🧰 Tech Stack

**Backend:** Node.js, TypeScript  
**Framework:** Express  
**Database:** MongoDB (Mongoose ORM)  
**Cloud Storage:** AWS S3  
**Auth:** JWT (if implemented)  
**Environment:** Docker-ready, environment-based configs

---

## 🚀 Features & Endpoints

### 📚 Books Endpoints
- `POST /books`  
  Add a new book with cover image upload

- `GET /books`  
  List books with optional query filters

- `GET /books/:id`  
  Retrieve book details

- `PATCH /books/:id`  
  Update book details (including image update)

- `DELETE /books/:id`  
  Delete book and associated media

---

## ☁️ AWS S3 Integration

- Uploaded book cover images are stored in **AWS S3** instead of local disk.
- The API returns S3 image URLs, enabling secure and scalable media access.
- S3 credentials are stored securely using environment variables.

---

## 🗂 Database Design

The `Book` model stores:
- Title
- Author
- Genre
- Cover image S3 URL
- Created and updated timestamps

(Schema defined in `src/model/Book.ts`)

---

## 💡 How to Run Locally

1. Clone the repo  
   `git clone https://github.com/V-codess/books-api.git`

2. Install dependencies  
   `yarn install`

3. Set environment variables:

4. Start the server  
   `yarn start`

---

## 📌 What I Learned

- AWS S3 integration for scalable media storage
- TypeScript-powered backend APIs
- Clean routing and separation of concerns
- CRUD + file uploads in a production-ready API

---

## 🧾 Future Improvements

- Add authentication & authorization
- Add input validation with express-validator
- Add tests (Jest / Supertest)
