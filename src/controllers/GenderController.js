export class GenderController {
    constructor({ GenderModel }) {
        this.genderModel = GenderModel;
    }

    getAll = async (req, res) => {
        try {
            const response = await this.genderModel.getAll();
            res.status(200).json(response);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };
}
