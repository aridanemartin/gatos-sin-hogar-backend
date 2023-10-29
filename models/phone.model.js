import db from "../db/db_connection.js"

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
            const phone = await db.query('SELECT * FROM phone WHERE id = ?', [id]);
            return phone[0][0];
        } catch (error) {
            console.error('Error fetching phone:', error);
            throw error; 
        }
    }

    static async create(input){
        const { 
            phone_number,
            type,
            volunteer_id
        } = input;
        //? Clinics only have 1 phone therefore they do not need connection to phone table?
        try {
            const query = `INSERT INTO phone (phone_number, type, volunteer_id) VALUES (?, ?, ?)`;
    
            const values = [phone_number, type, volunteer_id];
    
            const phone = await db.query(query, values);
            return phone[0];
        } catch (error) {
            console.error('Error creating phone:', error);
            throw error; 
        }
    }

    static async update(id, input){
        const { 
            phone_number,
            type,
            volunteer_id
        } = input;

        try {
            const query = `UPDATE phone SET phone_number = ?, type = ?, volunteer_id = ? WHERE id = ?`;
    
            const values = [phone_number, type, volunteer_id, id];

            const response = await db.query(query, values);

            if (response[0].affectedRows == 0) return {};
            return PhoneModel.getById(id)
        } catch (error) {
            console.error('Error updating phone:', error);
            throw error; 
        }
    }

    static async delete(id){
        try {
            const response = await db.query('DELETE FROM phone WHERE id = ?', [id]);
            return response[0].affectedRows > 0;
        } catch (error) {
            console.error('Error deleting phone:', error);
            throw error; 
        }
    }
}