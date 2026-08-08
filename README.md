# EliteStore – Full MERN Stack Product Management

## 📌 Project Overview

**EliteStore** is a full-stack product management application built using the **MERN Stack**.

The application allows users to:

* View products stored in MongoDB
* View products from FakeStore API
* Add new products
* Search products
* Display product image, price, and rating
* Switch between MongoDB products and FakeStore products
* Manage products using REST APIs

The project uses a modern **black, white, and gray premium UI** inspired by luxury e-commerce websites.

---

## 🛠️ Technologies Used

### Frontend

* React.js
* Tailwind CSS
* Axios
* React Router DOM
* React Icons
* Vite

### Backend

* Node.js
* Express.js
* Mongoose
* MongoDB
* CORS
* dotenv

### External API

* FakeStore API

---

## 📂 Project Structure

```text
EliteStore/
│
├── backend/
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── models/
│   │   └── Product.js
│   │
│   ├── routes/
│   │   └── productRoutes.js
│   │
│   ├── .env
│   ├── .gitignore
│   ├── app.js
│   └── package.json
│
│
└── frontend/
    │
    ├── src/
    │   │
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── Footer.jsx
    │   │   ├── ProductCard.jsx
    │   │   └── AddProduct.jsx
    │   │
    │   ├── Home.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    │
    ├── package.json
    └── vite.config.js
```

---

# 🚀 Features

## 1. MongoDB Products

Products stored in MongoDB are retrieved through the Express REST API.

```text
MongoDB
   ↓
Mongoose
   ↓
Express
   ↓
Axios
   ↓
React
```

The product contains:

* Product title
* Product image
* Product price
* Product rating

---

## 2. FakeStore Products

The application can also retrieve products from the FakeStore API.

```text
FakeStore API
     ↓
   Axios
     ↓
   React
```

Users can switch between:

```text
MongoDB Products
```

and

```text
FakeStore Products
```

---

## 3. Add Product

Users can add a new product using the **Add Product** page.

The form contains:

```text
Product Name
Image URL
Price
Rating
```

The form performs frontend validation before sending the data to the backend.

---

## 4. Product Validation

The backend uses Mongoose validation.

### Product Title

* Required
* Minimum length
* Maximum length

### Price

* Required
* Must be greater than `0`

### Image

* Required
* Must contain a valid URL

### Rating

* Required
* Must be between `0` and `5`

---

# 🔗 REST API Endpoints

The backend provides the following APIs.

### Get All Products

```http
GET /products
```

Returns all products from MongoDB.

---

### Add Product

```http
POST /products
```

Adds a new product to MongoDB.

Example:

```json
{
  "title": "HP Victus Laptop",
  "image": "https://example.com/laptop.jpg",
  "price": 79999,
  "rating": 4.5
}
```

---

### Update Product

```http
PUT /products/:id
```

Updates an existing product.

---

### Delete Product

```http
DELETE /products/:id
```

Deletes a product from MongoDB.

---

# ⚙️ Backend Setup

Go to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

Start the backend:

```bash
node app.js
```

The server will run at:

```text
http://localhost:3000
```

---

# 💻 Frontend Setup

Open another terminal.

Go to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React application:

```bash
npm run dev
```

The frontend will run at:

```text
http://localhost:5173
```

---

# 🔄 Application Flow

### MongoDB Products

```text
React
  ↓
Axios
  ↓
Express API
  ↓
Mongoose
  ↓
MongoDB
```

### FakeStore Products

```text
React
  ↓
Axios
  ↓
FakeStore API
```

### Adding a Product

```text
Add Product Form
       ↓
Frontend Validation
       ↓
Axios POST Request
       ↓
Express
       ↓
Mongoose
       ↓
MongoDB
```

---

# 🎨 UI Design

EliteStore uses a premium **black, white, and gray theme**.

Main design features:

* Dark luxury background
* Glassmorphism effects
* Rounded cards
* Premium navigation bar
* Responsive product grid
* Product image preview
* Search bar
* Product rating badges
* Responsive layout
* Hover animations
* Modern typography

---

# 🔐 Environment Variables

The MongoDB connection string is stored in `.env`.

Example:

```env
PORT=3000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/elitestore
```

**Do not upload `.env` to GitHub.**

Add this to `.gitignore`:

```text
node_modules/
.env
```

---

# ▶️ How to Run the Project

You need **two terminals**.

### Terminal 1 – Backend

```bash
cd backend
npm install
node app.js
```

### Terminal 2 – Frontend

```bash
cd frontend
npm install
npm run dev
```

Then open:

```text
http://localhost:5173
```

---

# 📋 Assignment Requirements Covered

| Requirement        | Status |
| ------------------ | ------ |
| Node.js            | ✅      |
| Express.js         | ✅      |
| MongoDB            | ✅      |
| Mongoose           | ✅      |
| React              | ✅      |
| Axios              | ✅      |
| CORS               | ✅      |
| REST API           | ✅      |
| FakeStore API      | ✅      |
| GET API            | ✅      |
| POST API           | ✅      |
| PUT API            | ✅      |
| DELETE API         | ✅      |
| Product Validation | ✅      |
| Responsive UI      | ✅      |

---

# 👩‍💻 Author

**Swarnalakshmi Perumal**

**Project:** EliteStore – Full MERN Stack Product Management System

**Built with:** React + Tailwind CSS + Node.js + Express + MongoDB + Mongoose
