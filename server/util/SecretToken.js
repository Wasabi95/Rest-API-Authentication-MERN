// SecretToken.js
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};

// {
//     "email": "wasaddbi@gmail.com",   
//     "password": "testxx_password",    
//     "username": "Wasapito"    
//   }

// {
//     "email": "yahoote@gmail.com",   
//     "password": "t12345678#",    
//     "username": "yosoyandrey"    
//   }


//I make POST request http://localhost:3000/signup

//     "email": "yahoote@gmail.com",   
//     "password": "t12345678#",    
//     "username": "yosoyandrey"    
//   }

// output

// {
//     "message": "User signed in successfully",
//     "success": true,
//     "user": {
//         "email": "yahoote@gmail.com",
//         "username": "yosoyandrey",
//         "password": "$2a$12$X/hFE3GgefKa0F8QxUrqnOwkPW2Gs7t6lbJ84ROdZr9XaXELMo3C2",
//         "createdAt": "2023-10-17T16:44:34.545Z",
//         "_id": "652eba0e8feddf39a3375242",
//         "__v": 0
//     }
// }


// Now make a POST request http://localhost:3000/login

// {
//     "email": "yahoote@gmail.com",   
//     "password": "t12345678#"   
      
//   }

//   ////OUTPUT
//   {
//     "message": "User logged in successfully",
//     "success": true
// }

//


// I completely understand your frustration, and it's a common issue,
// especially when working with environment variables and configuration files. 
//Small typos or inconsistencies can lead to significant errors in your application.

// This kind of experience is part of the learning process in software development, 
//and it happens to all of us. Don't be too hard on yourself; it's how you learn and
// become better at debugging and catching these kinds of issues. It's always good to 
//have a fresh set of eyes or another developer review your code to catch such mistakes.

// If you have any more questions or run into any other issues, please feel free to ask. We're here to help!



// Absolutely, debugging is a crucial skill in the tech industry. It's the process of identifying 
// and fixing errors or bugs in software code. Here are some reasons why debugging is essential:

// Identifying Issues: It helps you find and understand issues within your code. These issues can range 
// from syntax errors to logical problems that cause unexpected behavior.

// Quality Assurance: Debugging is a fundamental part of quality assurance. By identifying and 
// resolving issues, you ensure that your software works as intended and is free of defects.

// Problem Solving: Debugging teaches you problem-solving skills. You'll learn to break down 
// complex issues into smaller, more manageable problems and work through them systematically.

// Optimizing Code: It's an opportunity to review and optimize your code. You might discover
//  more efficient ways of achieving the same result.

// Learning: Debugging is a great way to learn. You'll learn more about the programming languages 
// you're using, the tools available for debugging, and common patterns in your own mistakes.

// Collaboration: In a team environment, debugging helps team members understand each other's 
// code and fix issues that arise in the development process.

// Preventing Issues: Debugging helps catch issues early in the development process, reducing the 
// chances of bugs making it into the final product.

// Customer Satisfaction: By delivering bug-free software, you ensure customer satisfaction
//  and avoid problems after the software is deployed.

// In summary, debugging is an essential part of software development. The ability to effectively 
// debug code is a valuable skill that every developer should cultivate. It not only helps you create better software 
// but also enhances your problem-solving abilities