import db from "../db/db_connection.js"

export class BreedModel {
   
    static async getAll() {
        try {
            const breeds = await db.query('SELECT * FROM breed');
            return breeds[0];
        } catch (error) {
            console.error('Error fetching breeds:', error);
            throw error; 
        }
    }

    static async getById(id) {
        try {
            const breed = await db.query('SELECT * FROM breed WHERE id = ?', [id]);
            return breed[0][0];
        } catch (error) {
            console.error('Error fetching breed:', error);
            throw error; 
        }
    }

    static async create(input){
        const { name } = input
        
        try {
            const query = `INSERT INTO breed (name) VALUES (?)`;
    
            const values = [name];
    
            const breed = await db.query(query, values);
            return breed[0];
        } catch (error) {
            console.error('Error creating breed:', error);
            throw error; 
        }
    }

    static async update(id, input){
        const { name } = input

        try {
            const query = `UPDATE breed SET name = ? WHERE id = ?`;
    
            const values = [name, id];

            const response = await db.query(query, values);

            if (response[0].affectedRows == 0) return {};
            return BreedModel.getById(id)
        } catch (error) {
            console.error('Error updating breed:', error);
            throw error; 
        }
    }

    static async delete(id){
        try {
            const response = await db.query('DELETE FROM breed WHERE id = ?', [id]);
            return response[0].affectedRows > 0;
        } catch (error) {
            console.error('Error deleting breed:', error);
            throw error; 
        }
    }
}