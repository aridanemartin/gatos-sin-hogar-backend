import db from '../db/db_connection.js';

export class LocationModel {
    static async getAll() {
        try {
            const locations = await db.query('SELECT * FROM location');
            return locations[0];
        } catch (error) {
            console.error('Error fetching locations:', error);
            throw error;
        }
    }

    static async getById(id) {
        try {
            const location = await db.query(
                'SELECT * FROM location WHERE id = ?',
                [id]
            );
            return location[0][0];
        } catch (error) {
            console.error('Error fetching location:', error);
            throw error;
        }
    }

    static async create(input) {
        const { name, description, x_coord: xCoord, y_coord: yCoord } = input;

        try {
            const query = `INSERT INTO location (name, description, x_coord, y_coord) VALUES (?, ?, ?, ?)`;

            const values = [name, description, xCoord, yCoord];

            const location = await db.query(query, values);
            return location[0];
        } catch (error) {
            console.error('Error creating location:', error);
            throw error;
        }
    }

    static async update(id, input) {
        const { name, description, x_coord: xCoord, y_coord: yCoord } = input;

        try {
            const query = `UPDATE location SET name = ?, description = ?, x_coord = ?, y_coord = ? WHERE id = ?`;

            const values = [name, description, xCoord, yCoord, id];

            const response = await db.query(query, values);

            if (response[0].affectedRows == 0) return null;
            return LocationModel.getById(id);
        } catch (error) {
            console.error('Error updating location:', error);
            throw error;
        }
    }

    static async delete(id) {
        try {
            const response = await db.query(
                'DELETE FROM location WHERE id = ?',
                [id]
            );
            return response[0].affectedRows > 0;
        } catch (error) {
            console.error('Error deleting location:', error);
            throw error;
        }
    }
}
