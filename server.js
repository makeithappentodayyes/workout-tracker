//  setup my dependencies for node express server

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//start the express app

const app = express();
const PORT = process.env.PORT || 5000;

// here we make our express app handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// app.use for static directory

app.use(express.static("public"));

//

// connect to mongo/ create the database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout"
mongoose.connect(MONGODB_URI, {
useNewUrlParser: true,
  useFindAndModify: false
});

