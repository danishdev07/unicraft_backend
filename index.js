const express = require('express');
// const mysql = require('mysql');
const hostname = '127.0.0.1';
const port = 3000;
const app = express();
const cors = require("cors");
app.use('/',  require('./routes'));


app.use(cors());
app.use(express.json());
//DB connection
require("./config/initializeMongoConnection");

// app.use("/",require("./routes"));

// const connection = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   password: '',
//   database: 'unicraft'
// });
// Connect to the database
// connection.connect((err) => {
//     if (err) {
//       console.error('Error connecting to MySQL:', err.message);
//       return;
//     }
//     console.log('Connected to MySQL database');
//     console.log('creating ')
//   });

// Start the server
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
