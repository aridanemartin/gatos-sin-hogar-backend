import db from "../db/db_connection.js"


export class CatModel {
   

    static async getAll(req, res) {
        try {
            const cats = await db.query('SELECT * FROM cat');
            return cats[0];
        } catch (error) {
            console.error('Error fetching cats:', error);
            throw error; // Re-throw the error to handle it in the controller
        }
    }

    static async getOne() {
        console.log('one');
    }




}