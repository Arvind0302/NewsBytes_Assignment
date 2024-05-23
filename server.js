const express = require('express');
const connectDb = require('./config/database');
const dotenv = require('dotenv')
const urlRoutes = require('./routes/urls');
const bodyParser = require('body-parser')
dotenv.config({path:"./config/config.env"});

connectDb();
const app = express();
app.use(bodyParser.json());
// app.use('/', urlRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
  });