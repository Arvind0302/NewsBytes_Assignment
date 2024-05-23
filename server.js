const express = require('express');
const connectDb = require('./config/database');
const dotenv = require('dotenv')
dotenv.config({path:"./config/config.env"});
const app = express();
connectDb();
app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
  });