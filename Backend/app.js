const express = require("express");
const cors = require("cors");
require("dotenv").config();

const productRoutes = require("./routes/productRoutes");
const db = require("./config/db");


const app = express();

const port = process.env.PORT || 3000;


// Connect MongoDB
db();


// CORS
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);


// Parse JSON
app.use(express.json());


// Test route
app.get("/", (req, res) => {

  res.send("Backend Server Running");

});


// Product routes
app.use("/products", productRoutes);


// Start server
app.listen(port, () => {

  console.log(`Server is running on port ${port}`);

});