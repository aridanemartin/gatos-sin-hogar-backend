import db from '../db/db_connection.js';

export class TaskModel {
    static async getAll() {
        try {
            const tasks = await db.query('SELECT * FROM task');
            return tasks[0];
        } catch (error) {
            console.error('Error fetching tasks:', error);
            throw error;
        }
    }

    static async getById(id) {
        try {
            const task = await db.query('SELECT * FROM task WHERE id = ?', [
                id
            ]);
            return task[0][0];
        } catch (error) {
            console.error('Error fetching task:', error);
            throw error;
        }
    }

    static async create(input) {
        const { name, description, category_id } = input;

        try {
            const query = `INSERT INTO task (name, description, category_id) VALUES (?, ?, ?)`;

            const values = [name, description, category_id];

            const task = await db.query(query, values);
            return task[0];
        } catch (error) {
            console.error('Error creating task:', error);
            throw error;
        }
    }

    static async update(id, input) {
        const { name, description, category_id } = input;

        try {
            const query = `UPDATE task SET name = ?, description = ?, category_id = ? WHERE id = ?`;

            const values = [name, description, category_id, id];

            const response = await db.query(query, values);

            if (response[0].affectedRows == 0) return null;
            return TaskModel.getById(id);
        } catch (error) {
            console.error('Error updating task:', error);
            throw error;
        }
    }

    static async delete(id) {
        try {
            const response = await db.query('DELETE FROM task WHERE id = ?', [
                id
            ]);
            return response[0].affectedRows > 0;
        } catch (error) {
            console.error('Error deleting task:', error);
            throw error;
        }
    }
}
