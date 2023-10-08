export class CatController {

    constructor ({ catModel }) {
        this.catModel = catModel;
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
            if (response && response.length) res.json(response).status(200);
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
            if (response && response.length) res.json(response).status(201);
            else res.status(404).json({ error: 'Cat not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    update = async (req, res) => {
        try {
            const { id } = req.params;
            const input = req.body;
            const [ response, affectedRows ] = await this.catModel.update(id, input);
            if (affectedRows) res.json(response).status(200);
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
            console.log('=====>', response);
            if (response) res.json({ message: 'Cat deleted successfully' }).status(200);
            else res.status(404).json({ error: 'Cat not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}