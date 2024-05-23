# NewsBytes_Assignment

## Introduction

This project provides a URL-shortening service with the ability to set a click limit for each shortened URL. The service offers two main endpoints:

1. `/shorten` - To create a shortened URL.
2. `/:hash` - To redirect to the original URL based on the hash.

## Features

- Shortens URLs and returns a unique hash.
- Optionally limits the number of clicks for each shortened URL.
- Redirects to the original URL and tracks the number of clicks.
- Ensures the generated hash is unique.
- Prevents the creation of duplicate shortened URLs for the same original URL.

## Architecture Choice and Reasoning

The URL Shortener Service is built using Node.js, Express, and MongoDB for the following reasons:

1. **Node.js**: Lightweight, efficient platform for handling concurrent connections.
2. **Express.js**: Minimalist web framework simplifying route handling and middleware.
3. **MongoDB**: NoSQL document database providing flexibility and scalability.

This architecture ensures rapid development, scalability, and performance for the service.

## Folder Structure

- `controllers/url.js`: Contains the logic for shortening and decoding URLs.
- `models/url.js`: Defines the Mongoose schema and model for storing URLs.
- `routes/urls.js`: Defines the API endpoints and routes.
- `utils/hash.js`: Utility for generating unique hashes.
- `server.js`: Sets up and starts the Express server.

## Endpoints

### 1. `/shorten`

This endpoint is used to create a shortened URL.

#### Request

- **URL:** `/shorten`
- **Method:** `POST`
- **Headers:** 
  ```json
  {
    "Content-Type": "application/json"
  }
  ```
- **Body:**
  ```json
  {
    "originalUrl": "https://example.com",
    "clickLimit": 5
  }
  ```
#### Example Request
  ```sh
 curl -X POST https://newsbytes-assignment.onrender.com/shorten \
     -H "Content-Type: application/json" \
     -d '{"originalUrl": "https://example.com", "clickLimit": 5}'
 ```
### 2. `/:hash`

This endpoint is used to redirect to the original URL based on the hash.

#### Request

- **URL:** `/:hash`
- **Method:** `GET`
- **Parameters:**
  - `hash` (string): The hash part of the shortened URL.
#### Example Request
  ```sh
curl -X GET https://newsbytes-assignment.onrender.com/abcd1
```
