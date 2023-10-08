import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gatos_sin_hogar',
});

const db = await pool.getConnection();
export default db;
