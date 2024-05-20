const express = require('express');
// const mysql = require('mysql');
const mongoDb = require('mongoose');
const hostname = '127.0.0.1';
const port = 3000;
const app = express();
mongoDb.connect("mongodb://localhost:27017/unicraft",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB!');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
})

const db = mongoDb.connection;

db.on('connected', () => {
  console.log('Mongoose connected to db');
});

db.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

db.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('Mongoose connection closed due to app termination');
  process.exit(0);
});
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
