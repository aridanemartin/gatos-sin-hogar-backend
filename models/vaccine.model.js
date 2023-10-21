import db from "../db/db_connection.js"


export class VaccineModel {
   

    static async getAll() {
        try {
            const vaccines = await db.query('SELECT * FROM vaccine');
            return vaccines[0];
        } catch (error) {
            console.error('Error fetching vaccines:', error);
            throw error; 
        }
    }

    static async getById(id) {
        try {
            const vaccine = await db.query('SELECT * FROM vaccine WHERE id = ?', [id]);
            return vaccine[0][0];
        } catch (error) {
            console.error('Error fetching vaccine:', error);
            throw error; 
        }
    }

    static async create(input){
        const { name, description } = input

        try {
            const query = `INSERT INTO vaccine (name, description) VALUES (?, ?)`;
    
            const values = [name, description];
    
            const vaccine = await db.query(query, values);
            return vaccine[0];
        } catch (error) {
            console.error('Error creating vaccine:', error);
            throw error; 
        }
    }

    static async update(id, input){
        const { name, description } = input

        try {
            const query = `UPDATE vaccine SET name = ?, description = ? WHERE id = ?`;
    
            const values = [name, description, id];

            const response = await db.query(query, values);

            if (response[0].affectedRows == 0) return {};
            return VaccineModel.getById(id)
        } catch (error) {
            console.error('Error updating vaccine:', error);
            throw error; 
        }
    }

    static async delete(id){
        try {
            const response = await db.query('DELETE FROM vaccine WHERE id = ?', [id]);
            return response[0].affectedRows > 0;
        } catch (error) {
            console.error('Error deleting vaccine:', error);
            throw error; 
        }
    }
}