const express = require('express');
const mysql = require('mysql');
const hostname = '127.0.0.1';
const port = 3000;
const app = express();
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'your_username',
//   password: 'your_password',
//   database: 'your_database_name'
// });
// // Connect to the database
// connection.connect((err) => {
//     if (err) {
//       console.error('Error connecting to MySQL:', err.message);
//       return;
//     }
//     console.log('Connected to MySQL database');
//   });

// Start the server
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
