import db from '../db/db_connection.js';
import AWS from 'aws-sdk';

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});
export class CatModel {
    static async getAll(req) {
        try {
            const { currentPage, itemsPerPage, offset } = req.pagination;

            const countQuery = 'SELECT COUNT(*) as totalCount FROM cat';
            const countResult = await db.query(countQuery);
            const totalCount = countResult[0][0].totalCount;
            const totalPages = Math.ceil(totalCount / itemsPerPage);

            const dataQuery = `SELECT * FROM cat LIMIT ${itemsPerPage} OFFSET ${offset}`;
            const cats = await db.query(dataQuery);

            const result = {
                data: cats[0],
                pagination: {
                    currentPage,
                    itemsPerPage,
                    totalCount,
                    totalPages
                }
            };

            return result;
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

    static async create(input) {
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
            hasLeukemia,
            medicalConditions,
            dietaryNeeds,
            clinicId
        } = input;

        try {
            const query = `INSERT INTO cat (name, gender, birth_date, location_id, breed_id, has_chip, picture, description, has_passed_away, spayed_neutered, has_leukemia, medical_conditions, dietary_needs, clinic_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

            const values = [
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
                hasLeukemia,
                medicalConditions,
                dietaryNeeds,
                clinicId
            ];

            const cat = await db.query(query, values);
            return cat[0];
        } catch (error) {
            console.error('Error creating cat:', error);
            throw error;
        }
    }

    static async update(id, input) {
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
            hasLeukemia,
            medicalConditions,
            dietaryNeeds,
            clinicId
        } = input;

        try {
            const query = `UPDATE cat SET name = ?, gender = ?, birth_date = ?, location_id = ?, breed_id = ?, has_chip = ?, picture = ?, description = ?, has_passed_away = ?, spayed_neutered = ?, has_leukemia = ?, medical_conditions = ?, dietary_needs = ?, clinic_id = ? WHERE id = ?`;

            const values = [
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
                hasLeukemia,
                medicalConditions,
                dietaryNeeds,
                clinicId,
                id
            ];

            const response = await db.query(query, values);

            if (response[0].affectedRows == 0) return null;
            return CatModel.getById(id);
        } catch (error) {
            console.error('Error updating cat:', error);
            throw error;
        }
    }

    static async delete(id) {
        try {
            const response = await db.query('DELETE FROM cat WHERE id = ?', [
                id
            ]);
            return response[0].affectedRows > 0;
        } catch (error) {
            console.error('Error deleting cat:', error);
            throw error;
        }
    }

    static async uploadImage(req, id) {
        try {
            const params = {
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: `images/${id}`,
                Body: req.file.buffer,
                ContentType: req.file.mimetype
            };
            const data = await s3.upload(params).promise();
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    static async deleteImage(id) {
        try {
            const params = {
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: `images/${id}`
            };
            const data = await s3.deleteObject(params).promise();
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}
