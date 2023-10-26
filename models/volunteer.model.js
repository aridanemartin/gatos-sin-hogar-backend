import db from "../db/db_connection.js"

export class VolunteerModel {
   
    static async getAll() {
        try {
            const volunteers = await db.query('SELECT * FROM volunteer');
            return volunteers[0];
        } catch (error) {
            console.error('Error fetching volunteers:', error);
            throw error; 
        }
    }

    static async getById(id) {
        try {
            const volunteer = await db.query('SELECT * FROM volunteer WHERE id = ?', [id]);
            return volunteer[0][0];
        } catch (error) {
            console.error('Error fetching volunteer:', error);
            throw error; 
        }
    }

    static async create(input){
        const { 
            name,
            email,
            address
        } = input;

        try {
            const query = `INSERT INTO volunteer (name, email, address) VALUES (?, ?, ?)`;
    
            const values = [name, email, address];
    
            const volunteer = await db.query(query, values);
            return volunteer[0];
        } catch (error) {
            console.error('Error creating volunteer:', error);
            throw error; 
        }
    }

    static async update(id, input){
        const { 
            name,
            email,
            address
        } = input;

        try {
            const query = `UPDATE volunteer SET name = ?, email = ?, address = ? WHERE id = ?`;
    
            const values = [name, email, address, id];

            const response = await db.query(query, values);

            if (response[0].affectedRows == 0) return {};
            return VolunteerModel.getById(id)
        } catch (error) {
            console.error('Error updating volunteer:', error);
            throw error; 
        }
    }

    static async delete(id){
        try {
            const response = await db.query('DELETE FROM volunteer WHERE id = ?', [id]);
            return response[0].affectedRows > 0;
        } catch (error) {
            console.error('Error deleting volunteer:', error);
            throw error; 
        }
    }
}