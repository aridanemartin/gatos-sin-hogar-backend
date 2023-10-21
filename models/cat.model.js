import db from "../db/db_connection.js"


export class CatModel {
   

    static async getAll() {
        try {
            const cats = await db.query('SELECT * FROM cat');
            return cats[0];
        } catch (error) {
            console.error('Error fetching cats:', error);
            throw error; 
        }
    }

    static async getById(id) {
        try {
            const cat = await db.query('SELECT * FROM cat WHERE id = ?', [id]);
            return cat[0][0];
        } catch (error) {
            console.error('Error fetching cat:', error);
            throw error; 
        }
    }

    static async create(input){
        const { 
            name, 
            gender, 
            birthDate, 
            locationId, 
            breedId, 
            hasChip, 
            picture, 
            description, 
            hasPassedAway, 
            spayedNeutered, 
            medicalConditions, 
            dietaryNeeds, 
            clinicId
        } = input;

        try {
            const query = `INSERT INTO cat (name, gender, birth_date, location_id, breed_id, has_chip, picture, description, has_passed_away, spayed_neutered, medical_conditions, dietary_needs, clinic_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    
            const values = [name, gender, birthDate, locationId, breedId, hasChip, picture, description, hasPassedAway, spayedNeutered, medicalConditions, dietaryNeeds, clinicId];
    
            const cat = await db.query(query, values);
            return cat[0];
        } catch (error) {
            console.error('Error creating cat:', error);
            throw error; 
        }
    }

    static async update(id, input){
        const { 
            name, 
            gender, 
            birthDate, 
            locationId, 
            breedId, 
            hasChip, 
            picture, 
            description, 
            hasPassedAway, 
            spayedNeutered, 
            medicalConditions, 
            dietaryNeeds, 
            clinicId
        } = input;

        try {
            const query = `UPDATE cat SET name = ?, gender = ?, birth_date = ?, location_id = ?, breed_id = ?, has_chip = ?, picture = ?, description = ?, has_passed_away = ?, spayed_neutered = ?, medical_conditions = ?, dietary_needs = ?, clinic_id = ? WHERE id = ?`;
    
            const values = [name, gender, birthDate, locationId, breedId, hasChip, picture, description, hasPassedAway, spayedNeutered, medicalConditions, dietaryNeeds, clinicId, id];
    
            const response = await db.query(query, values);

            if (response[0].affectedRows == 0) return {};
            return CatModel.getById(id)
        } catch (error) {
            console.error('Error updating cat:', error);
            throw error; 
        }
    }

    static async delete(id){
        try {
            const response = await db.query('DELETE FROM cat WHERE id = ?', [id]);
            return response[0].affectedRows > 0;
        } catch (error) {
            console.error('Error deleting cat:', error);
            throw error; 
        }
    }
}