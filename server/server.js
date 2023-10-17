// // server.js
// const express = require('express');
// const jwt = require('jsonwebtoken');
// const cors = require('cors'); // Import the CORS library

// const app = express();
// app.use(express.json());
// app.use(cors());

// const secretKey = 'your-secret-key'; // Replace with a strong, unique key in a real application

// // Middleware for protecting routes
// function authenticateToken(req, res, next) {
//   const token = req.header('Authorization');
//   if (!token) return res.status(401).json({ message: 'Unauthorized' });

//   jwt.verify(token, secretKey, (err, user) => {
//     if (err) return res.status(403).json({ message: 'Forbidden' });
//     req.user = user;
//     next();
//   });
// }

// // Sample login route to issue a JWT token
// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   // In a real application, check credentials against a database
//   if (username === 'user' && password === 'password') {
//     const user = { username }; // User information to include in the token
//     const token = jwt.sign(user, secretKey);
//     res.json({ token });
//   } else {
//     res.status(401).json({ message: 'Authentication failed' });
//   }
// });

// app.post('/logout', (req, res) => {
//     // You can implement token revocation logic here, if necessary
//     // In this simple example, we won't revoke tokens; we'll just respond with success.
//     res.json({ message: 'Logged out successfully' });
//   });
  

// // Protected route
// app.get('/protected', authenticateToken, (req, res) => {
//   res.json({ message: 'You have access to this resource', user: req.user });
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

//Invoke-WebRequest -Uri 'http://localhost:3000/login' -Method 'POST' -Headers @{'Content-Type'='application/json'} -Body '{"username": "user", "password": "password"}'

// The output you provided indicates that the POST request to the /login route of your server was successful, and you received a response with a status code of 200 OK. 
//The response contains a JSON object with a token field.

// This suggests that the server is working as expected, and you've successfully obtained a
//JWT token by sending a valid username and password in the request. The token is essential for 
//authenticating and accessing protected routes on your server.

// You can now use this token for making authenticated requests to protected routes, 
//such as the /protected route as described in previous responses. To do so, include the token
// in the Authorization header of your requests.

// Yes, your server needs to be running and accessible when making HTTP requests using 
// Invoke-WebRequest or any other tool. In the case of your provided command:

// Test the /login Route:

// You can use Postman or a similar tool to send a POST request to the /login route to obtain a token. 
// In a real-world scenario, you would use a client application to perform this step. Here's how you can do it using

// Now lets test this auth in POSTMAN
// // {
//   "username": "user",
//   "password": "password"
// }

//     output
// {
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJpYXQiOjE2OTcyMzIxNDR9.tshuzspkUM71cniwPPcSX5bhG6xeswyhutwHmQKEai4"
// }


// go to headers / body /raw and add this  in POST
// {
//   "username": "user",
//   "password": "password"
// }
// NOW HIT send YOU WILL RECIEVE SOMETHINNK LIKE THIS
// {
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJpYXQiOjE2OTc1NDg1ODh9.XQ-vV1x-V2Fw8oWcRUGroghrBqrT3XcIWUNIMfWPx20"
// }

// 2. Testing the Protected Route:
// Create another request in Postman.

// Set the request type to GET.

// Enter the URL: http://localhost:3000/protected.

// In the request headers, add an Authorization header with the value
//<token>, where <token> is the token you received from the login request.

// Click the "Send" button.

// The require("dotenv").config(); line is typically placed near 
// the top of your Node.js application code for several reasons:
//  It loads environment variables from a .env file into the 
//process.env object. Loading these variables at the top ensures 
//they are available for the entire application, including before 
//other modules are imported or executed. This is important because
// you might need these variables in various parts of your code.

//server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const { MONGODB_URI, PORT } = process.env;



mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use(
  cors({
    origin: ["http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute);

