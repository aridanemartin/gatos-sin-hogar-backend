import { OAuth2Client } from 'google-auth-library';
import db from '../db/db_connection.js';
import jwt from 'jsonwebtoken';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export class AuthModel {
    loginWithGoogle = async (token) => {
        try {
            const ticket = await client.verifyIdToken({
                idToken: token,
                audience: process.env.GOOGLE_CLIENT_ID
            });

            const { sub: googleId, email, name } = ticket.getPayload();

            let [rows] = await db.query(
                'SELECT * FROM users WHERE google_id = ?',
                [googleId]
            );

            if (rows.length === 0) {
                await db.query(
                    'INSERT INTO users (google_id, email, name) VALUES (?, ?, ?)',
                    [googleId, email, name]
                );
                [rows] = await db.query(
                    'SELECT * FROM users WHERE google_id = ?',
                    [googleId]
                );
            }

            const user = rows[0];

            const accessToken = jwt.sign(
                { id: user.id, isAdmin: user.is_admin },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );

            return accessToken;
        } catch (error) {
            console.error(error);
            throw new Error('Authentication failed');
        }
    };
}
