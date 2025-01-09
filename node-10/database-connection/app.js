import mysql from 'mysql2'
import 'dotenv/config'
const pass = process.env.db_password || 'default '
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'poilkjmnb123',
    database: 'db-basic'
})
connection.connect(err => {
    if(err) {
        console.error('Error connecting to the db', err.stack)
        return
    } 
    console.log('Connected to the db as id' + connection.threadId);
    
})