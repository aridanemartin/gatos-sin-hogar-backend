import mysql from 'mysql2/promise';
import { logEnvironment } from '../utils/logger.js';

const env = process.env.NODE_ENV || 'development';

let db;

try {
    const dbConfig = await import(`./config.${env}.js`);

    logEnvironment();

    const pool = mysql.createPool(dbConfig.config);
    db = await pool.getConnection();
} catch (error) {
    console.error('Error connecting to the database:', error);
}

export default db;
