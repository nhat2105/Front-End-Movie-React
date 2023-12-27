import express from 'express'
import cors from 'cors'
import mysql from 'mysql'
import jwt from 'jsonwebtoken' 

const app = express()
const PORT = 3001;

app.use(cors)
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test',
    port: 3305 //myadmin port

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