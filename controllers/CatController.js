export class CatController {

    constructor ({ CatModel }) {
        this.catModel = CatModel;
    }

    getAll = async (req, res) => {    
        try {
            const response = await this.catModel.getAll();
            res.json(response).status(200);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    getById = async (req, res) => {
        try {
            const { id } = req.params;
            const response = await this.catModel.getById(id);
            if (response) res.json(response).status(200);
            else res.status(404).json({ error: 'Cat not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    create = async (req, res) => {
        try {
            const input = req.body;
            const response = await this.catModel.create(input);
            if (response) res.json(response).status(201);
            else res.status(404).json({ error: 'Could not create new cat' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    update = async (req, res) => {
        try {
            const { id } = req.params;
            const input = req.body;
            const response = await this.catModel.update(id, input);
            
            if (response) res.json(response).status(200);
            else res.status(404).json({ error: 'Cat not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    delete = async (req, res) => {
        try {
            const { id } = req.params;
            const response = await this.catModel.delete(id);
            
            if (response) res.json({ message: 'Cat deleted successfully' }).status(200);
            else res.status(404).json({ error: 'Cat not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}