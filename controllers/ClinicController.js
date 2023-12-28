export class ClinicController {
    constructor({ ClinicModel }) {
        this.clinicModel = ClinicModel;
    }

    getAll = async (req, res) => {
        try {
            const response = await this.clinicModel.getAll();
            res.status(200).json(response);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    getById = async (req, res) => {
        try {
            const { id } = req.params;
            const response = await this.clinicModel.getById(id);
            if (response) res.status(200).json(response);
            else res.status(404).json({ error: 'Clinic not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    create = async (req, res) => {
        try {
            const input = req.body;
            const response = await this.clinicModel.create(input);
            if (response) res.status(201).json(response);
            else res.status(404).json({ error: 'Could not create new clinic' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    update = async (req, res) => {
        try {
            const { id } = req.params;
            const input = req.body;
            const response = await this.clinicModel.update(id, input);

            if (response) res.status(200).json(response);
            else res.status(404).json({ error: 'Clinic not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    delete = async (req, res) => {
        try {
            const { id } = req.params;
            const response = await this.clinicModel.delete(id);

            if (response)
                res.status(200).json({
                    message: 'Clinic deleted successfully'
                });
            else res.status(404).json({ error: 'Clinic not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };
}
