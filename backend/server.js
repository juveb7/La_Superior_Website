require('dotenv').config()

const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Routes
const authRoutes = require("./routes/auth");
const homeRoutes = require("./routes/home");

// Use routes
app.use('/auth', authRoutes);
app.use('/', homeRoutes);

// Connect to database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Connected to the database');
      //listen for requests
      app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`)
      })
    })
    .catch((error) => {
        console.log('Error connecting to the database', error)
    })