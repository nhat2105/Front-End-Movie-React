const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const jwt = require('jsonwebtoken') 

const app = express()
const PORT = 3001;

app.use(cors)
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    //database: 'movies',
    port: 3306 //myadmin port

})

db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
    } else {
      console.log('Connected to MySQL');
    }
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});