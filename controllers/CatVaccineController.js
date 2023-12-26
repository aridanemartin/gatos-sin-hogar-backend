export class CatVaccineController {
    constructor({ CatVaccineModel }) {
        this.catVaccineModel = CatVaccineModel;
    }

    getAll = async (req, res) => {
        try {
            const response = await this.catVaccineModel.getAll();
            res.status(200).json(response);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    getById = async (req, res) => {
        try {
            const { id } = req.params;
            const response = await this.catVaccineModel.getByCatId(id);
            if (response) res.status(200).json(response);
            else
                res.status(404).json({ error: 'Cat_Vaccine record not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };
}
