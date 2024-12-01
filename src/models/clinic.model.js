import db from '../db/db_connection.js';

export class ClinicModel {
    static async getAll() {
        try {
            const clinics = await db.query('SELECT * FROM clinic');
            return clinics[0];
        } catch (error) {
            console.error('Error fetching clinics:', error);
            throw error;
        }
    }

    static async getById(id) {
        try {
            const clinic = await db.query('SELECT * FROM clinic WHERE id = ?', [
                id
            ]);
            return clinic[0][0];
        } catch (error) {
            console.error('Error fetching clinic:', error);
            throw error;
        }
    }

    static async create(input) {
        const { name, phone, email, address } = input;

        try {
            const query = `INSERT INTO clinic (name, phone, email, address) VALUES (?, ?, ?, ?)`;

            const values = [name, phone, email, address];

            const clinic = await db.query(query, values);
            return clinic[0];
        } catch (error) {
            console.error('Error creating clinic:', error);
            throw error;
        }
    }

    static async update(id, input) {
        const { name, phone, email, address } = input;

        try {
            const query = `UPDATE clinic SET name = ?, phone = ?, email = ?, address = ? WHERE id = ?`;

            const values = [name, phone, email, address, id];

            const response = await db.query(query, values);

            if (response[0].affectedRows == 0) return null;
            return ClinicModel.getById(id);
        } catch (error) {
            console.error('Error updating clinic:', error);
            throw error;
        }
    }

    static async delete(id) {
        try {
            const response = await db.query('DELETE FROM clinic WHERE id = ?', [
                id
            ]);
            return response[0].affectedRows > 0;
        } catch (error) {
            console.error('Error deleting clinic:', error);
            throw error;
        }
    }
}
