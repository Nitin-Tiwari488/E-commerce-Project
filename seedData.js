require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");

const products = [
  {
    name: "iPhone 15 Pro",
    price: 99999,
    description: "Latest iPhone with advanced features and excellent camera quality.",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
    category: "Electronics",
    stock: 25
  },
  {
    name: "Samsung Galaxy S24",
    price: 79999,
    description: "Premium Android smartphone with cutting-edge technology.",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400",
    category: "Electronics",
    stock: 30
  },
  {
    name: "MacBook Pro M3",
    price: 199999,
    description: "Powerful laptop for professionals with M3 chip.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
    category: "Electronics",
    stock: 15
  },
  {
    name: "Nike Air Jordan",
    price: 12999,
    description: "Iconic basketball shoes with premium comfort and style.",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400",
    category: "Fashion",
    stock: 50
  },
  {
    name: "Sony WH-1000XM5",
    price: 29999,
    description: "Noise-canceling wireless headphones with premium sound.",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
    category: "Electronics",
    stock: 40
  },
  {
    name: "Levi's 501 Jeans",
    price: 4999,
    description: "Classic straight-fit jeans made with premium denim.",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
    category: "Fashion",
    stock: 60
  },
  {
    name: "Apple Watch Series 9",
    price: 39999,
    description: "Advanced smartwatch with health monitoring features.",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400",
    category: "Electronics",
    stock: 35
  },
  {
    name: "Adidas Ultraboost 22",
    price: 15999,
    description: "Premium running shoes with boost technology.",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400",
    category: "Fashion",
    stock: 45
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
    
    // Clear existing products
    await Product.deleteMany({});
    console.log("Cleared existing products");
    
    // Insert new products
    await Product.insertMany(products);
    console.log("Sample products added successfully!");
    
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
