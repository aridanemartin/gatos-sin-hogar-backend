export class GenderModel {
    static async getAll() {
        try {
            const genders = [
                {
                    id: 1,
                    name: 'UNKNOWN'
                },
                {
                    id: 2,
                    name: 'MALE'
                },
                {
                    id: 3,
                    name: 'FEMALE'
                }
            ];
            return genders;
        } catch (error) {
            console.error('Error fetching genders:', error);
            throw error;
        }
    }
}
