export class VaccineController {

    constructor ({ VaccineModel }) {
        this.vaccineModel = VaccineModel;
    }

    getAll = async (req, res) => {    
        try {
            const response = await this.vaccineModel.getAll();
            res.json(response).status(200);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    getById = async (req, res) => {
        try {
            const { id } = req.params;
            const response = await this.vaccineModel.getById(id);
            if (response) res.json(response).status(200);
            else res.status(404).json({ error: 'Vaccine not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    create = async (req, res) => {
        try {
            const input = req.body;
            const response = await this.vaccineModel.create(input);
            if (response) res.json(response).status(201);
            else res.status(404).json({ error: 'Could not create new vaccine' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    update = async (req, res) => {
        try {
            const { id } = req.params;
            const input = req.body;
            const response = await this.vaccineModel.update(id, input);
            
            if (response.length) res.json(response).status(200);
            else res.status(404).json({ error: 'Vaccine not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    delete = async (req, res) => {
        try {
            const { id } = req.params;
            const response = await this.vaccineModel.delete(id);
            
            if (response) res.json({ message: 'Vaccine deleted successfully' }).status(200);
            else res.status(404).json({ error: 'Vaccine not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}