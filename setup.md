# Setup and Deployment Guide

This document provides the steps to deploy and use the URL Shortener Service application.

## Prerequisites

- Node.js and npm
- MongoDB
- Git

## Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/NewsBytes_Assignment.git
   cd NewsBytes_Assignment
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Set up MongoDB**

   Ensure MongoDB is installed and running on your local machine.

## Deployment

1. **Configure environment variables**

    Create a config.env file in the config directory and specify your MongoDB connection string and PORT:

    ```
    PORT=4000
    DB_URI=mongodb://localhost:27017/urlShortener
    ```

2. **Start the server**

    ```sh
    npm start
    ```

3. **Access the application**

    The application will be running locally at http://localhost:4000.

## Usage ##

1. **Shorten a URL**

    Send a POST request to /shorten endpoint with the original URL and optional click limit:

    ```sh
    curl -X POST http://localhost:4000/shorten \
        -H "Content-Type: application/json" \
        -d '{"originalUrl": "https://example.com", "clickLimit": 5}'
    ```
2. **Access the original URL**

    Navigate to the shortened URL returned by the /shorten endpoint.