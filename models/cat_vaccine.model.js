import db from '../db/db_connection.js';

export class CatVaccineModel {
    static async getAll() {
        try {
            const catVaccines = await db.query('SELECT * FROM cat_vaccine');
            return catVaccines[0];
        } catch (error) {
            console.error('Error fetching Cat_Vaccine:', error);
            throw error;
        }
    }

    static async getById(id) {
        try {
            const catVaccines = await db.query(
                'SELECT * FROM cat_vaccine WHERE cat_id = ?',
                [id]
            );
            return catVaccines[0][0];
        } catch (error) {
            console.error('Error fetching Cat_Vaccine:', error);
            throw error;
        }
    }
}
