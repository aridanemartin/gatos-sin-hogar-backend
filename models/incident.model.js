import db from '../db/db_connection.js';

export class IncidentModel {
    static async getAll(req) {
        try {
            const { currentPage, itemsPerPage, offset } = req.pagination;

            const countQuery = 'SELECT COUNT(*) as totalCount FROM incident';
            const countResult = await db.query(countQuery);
            const totalCount = countResult[0][0].totalCount;
            const totalPages = Math.ceil(totalCount / itemsPerPage);

            const dataQuery = `SELECT * FROM incident LIMIT ${itemsPerPage} OFFSET ${offset}`;
            const incidents = await db.query(dataQuery);

            const result = {
                data: incidents[0],
                pagination: {
                    currentPage,
                    itemsPerPage,
                    totalCount,
                    totalPages
                }
            };

            return result;
        } catch (error) {
            console.error('Error fetching incidents:', error);
            throw error;
        }
    }

    static async getById(id) {
        try {
            const incident = await db.query(
                'SELECT * FROM incident WHERE id = ?',
                [id]
            );
            return incident[0][0];
        } catch (error) {
            console.error('Error fetching incident:', error);
            throw error;
        }
    }

    static async create(input) {
        const { title, description, catId, volunteerId } = input;

        try {
            const query = `INSERT INTO incident (title, description, cat_id, volunteer_id) VALUES (?, ?, ?, ?)`;

            const values = [title, description, catId, volunteerId];

            const incident = await db.query(query, values);
            return incident[0];
        } catch (error) {
            console.error('Error creating incident:', error);
            throw error;
        }
    }

    static async update(id, input) {
        const { title, description, catId, volunteerId } = input;

        try {
            const query = `UPDATE incident SET title = ?, description = ?, cat_id = ?, volunteer_id = ? WHERE id = ?`;

            const values = [title, description, catId, volunteerId, id];

            const response = await db.query(query, values);

            if (response[0].affectedRows == 0) return null;
            return IncidentModel.getById(id);
        } catch (error) {
            console.error('Error updating incident:', error);
            throw error;
        }
    }

    static async delete(id) {
        try {
            const response = await db.query(
                'DELETE FROM incident WHERE id = ?',
                [id]
            );
            return response[0].affectedRows > 0;
        } catch (error) {
            console.error('Error deleting incident:', error);
            throw error;
        }
    }
}
