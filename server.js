const express = require('express');
const connectDb = require('./config/database');
const dotenv = require('dotenv')
const urlRoutes = require('./routes/urls');
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
const cors = require('cors')
dotenv.config({path:"./config/config.env"});

connectDb();
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/', urlRoutes);

app.listen(process.env.PORT||4000, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT||4000}`);
  });