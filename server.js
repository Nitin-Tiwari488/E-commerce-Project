require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.FRONTEND_URL 
    : 'http://localhost:5173',
  credentials: true
}));

// Connect MongoDB
const mongoURI = process.env.MONGO_URI;
console.log('Attempting to connect to MongoDB...');

if (mongoURI) {
  mongoose
    .connect(mongoURI)
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch((err) => {
      console.error("MongoDB connection failed:", err.message);
      console.log("Server will continue with mock data");
    });
} else {
  console.log("No MONGO_URI found, using mock data");
}

// Routes
app.use('/api/products', require('./routes/productRoutes'));

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Ecommerce API is running!' });
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
