import db from "../db/db_connection.js"

export class CategoryModel {
   
    static async getAll() {
        try {
            const categories = await db.query('SELECT * FROM category');
            return categories[0];
        } catch (error) {
            console.error('Error fetching categories:', error);
            throw error; 
        }
    }

    static async getById(id) {
        try {
            const category = await db.query('SELECT * FROM category WHERE id = ?', [id]);
            return category[0][0];
        } catch (error) {
            console.error('Error fetching category:', error);
            throw error; 
        }
    }

    static async create(input){
        const { name, color } = input
        
        try {
            const query = `INSERT INTO category (name, color) VALUES (?, ?)`;
    
            const values = [name, color];
    
            const category = await db.query(query, values);
            return category[0];
        } catch (error) {
            console.error('Error creating category:', error);
            throw error; 
        }
    }

    static async update(id, input){
        const { name, color } = input

        try {
            const query = `UPDATE category SET name = ?, color = ? WHERE id = ?`;
    
            const values = [name, color, id];

            const response = await db.query(query, values);

            if (response[0].affectedRows == 0) return {};
            return CategoryModel.getById(id)
        } catch (error) {
            console.error('Error updating category:', error);
            throw error; 
        }
    }

    static async delete(id){
        try {
            const response = await db.query('DELETE FROM category WHERE id = ?', [id]);
            return response[0].affectedRows > 0;
        } catch (error) {
            console.error('Error deleting category:', error);
            throw error; 
        }
    }
}