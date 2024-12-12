const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

// Load environment variables
dotenv.config();

// App setup
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const connectDB = require("./config/db");
connectDB();



// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
