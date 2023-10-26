export class BreedController {

    constructor ({ BreedModel }) {
        this.breedModel = BreedModel;
    }

    getAll = async (req, res) => {    
        try {
            const response = await this.breedModel.getAll();
            res.json(response).status(200);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    getById = async (req, res) => {
        try {
            const { id } = req.params;
            const response = await this.breedModel.getById(id);
            if (response) res.json(response).status(200);
            else res.status(404).json({ error: 'Breed not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    create = async (req, res) => {
        try {
            const input = req.body;
            const response = await this.breedModel.create(input);
            if (response) res.json(response).status(201);
            else res.status(404).json({ error: 'Could not create new breed' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    update = async (req, res) => {
        try {
            const { id } = req.params;
            const input = req.body;
            const response = await this.breedModel.update(id, input);
            
            if (response) res.json(response).status(200);
            else res.status(404).json({ error: 'Breed not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    delete = async (req, res) => {
        try {
            const { id } = req.params;
            const response = await this.breedModel.delete(id);
            
            if (response) res.json({ message: 'Breed deleted successfully' }).status(200);
            else res.status(404).json({ error: 'Breed not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}