const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'URL Shortening API',
      version: '1.0.0',
      description: 'API documentation for the URL shortening service',
    },
    servers: [
        {
 url:"https://newsbytes-assignment.onrender.com"
        },
      {
        url: `http://localhost:${process.env.PORT||4000}`,
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
