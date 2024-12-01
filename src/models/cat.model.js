import db from '../db/db_connection.js';
import {
    uploadImage,
    getImage,
    deleteImage
} from '../services/imageService.js';

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

            const catIds = cats[0].map((cat) => cat.id);
            const catPictures = await CatModel.getImages(catIds);

            for (const cat of cats[0]) {
                cat.picture = catPictures[cat.id] || null;
            }

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

            if (cat[0][0].picture) {
                const catPicture = await getImage(id);
                cat[0][0].picture = catPicture;
            }

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
            const imageUrl = await uploadImage(req.file, id);
            return { imageUrl };
        } catch (error) {
            throw error;
        }
    }

    static async getImage(id) {
        try {
            const cat = await db.query('SELECT picture FROM cat WHERE id = ?', [
                id
            ]);
            if (!cat[0][0] || !cat[0][0].picture) {
                return null;
            }

            const r2ImageSignedUrl = await getImage(id);
            return r2ImageSignedUrl;
        } catch (error) {
            throw error;
        }
    }

    static async getImages(ids) {
        const placeholders = ids.map(() => '?').join(',');
        const query = `SELECT id, picture FROM cat WHERE id IN (${placeholders})`;
        const cats = await db.query(query, ids);

        const imageUrls = {};
        for (const cat of cats[0]) {
            if (cat.picture) {
                try {
                    const r2ImageSignedUrl = await getImage(cat.id);
                    imageUrls[cat.id] = r2ImageSignedUrl;
                } catch (error) {
                    console.error(
                        `Error fetching image for cat ${cat.id}:`,
                        error
                    );
                }
            }
        }

        return imageUrls;
    }

    static async deleteImage(id) {
        try {
            const data = await deleteImage(id);
            return data;
        } catch (error) {
            console.error('Error deleting image:', error);
            throw error;
        }
    }
}
