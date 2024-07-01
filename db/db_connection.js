import mysql from 'mysql2/promise';
import { logEnvironment } from '../utils/logger.js';

const env = process.env.NODE_ENV || 'development';
const dbConfig = await import(`./config.${env}.js`);

logEnvironment();

const pool = mysql.createPool(dbConfig.config);

const db = await pool.getConnection();
export default db;
