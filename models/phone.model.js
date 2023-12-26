import db from '../db/db_connection.js';

export class PhoneModel {
    static async getAll() {
        try {
            const phones = await db.query('SELECT * FROM phone');
            return phones[0];
        } catch (error) {
            console.error('Error fetching phones:', error);
            throw error;
        }
    }

    static async getById(id) {
        try {
            const phone = await db.query('SELECT * FROM phone WHERE id = ?', [
                id
            ]);
            return phone[0][0];
        } catch (error) {
            console.error('Error fetching phone:', error);
            throw error;
        }
    }

    static async create(input) {
        const { phoneNumber, type, volunteerId } = input;
        try {
            const query = `INSERT INTO phone (phone_number, type, volunteer_id) VALUES (?, ?, ?)`;

            const values = [phoneNumber, type, volunteerId];

            const phone = await db.query(query, values);
            return phone[0];
        } catch (error) {
            console.error('Error creating phone:', error);
            throw error;
        }
    }

    static async update(id, input) {
        const { phoneNumber, type, volunteerId } = input;

        try {
            const query = `UPDATE phone SET phone_number = ?, type = ?, volunteer_id = ? WHERE id = ?`;

            const values = [phoneNumber, type, volunteerId, id];

            const response = await db.query(query, values);

            if (response[0].affectedRows == 0) {
                const notFoundError = new Error('Phone not found');
                notFoundError.status = 404;
                throw notFoundError;
            }
            return PhoneModel.getById(id);
        } catch (error) {
            console.error('Error updating phone:', error);
            throw error;
        }
    }

    static async delete(id) {
        try {
            const response = await db.query('DELETE FROM phone WHERE id = ?', [
                id
            ]);
            return response[0].affectedRows > 0;
        } catch (error) {
            console.error('Error deleting phone:', error);
            throw error;
        }
    }
}
