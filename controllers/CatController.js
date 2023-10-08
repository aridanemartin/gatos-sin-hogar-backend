export class CatController {

    constructor ({ catModel }) {
        this.catModel = catModel;
    }

    getAll = async (req, res) => {    
        try {
            const cats = await this.catModel.getAll();
            res.json(cats).status(200);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    getById = async (req, res) => {
        try {
            const { id } = req.params;
            const cat = await this.catModel.getById(id);
            if (cat) res.json(cat).status(200);
            else res.status(404).json({ error: 'Cat not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    create = async (req, res) => {
        try {
            const input = req.body;
            const cat = await this.catModel.create(input);
            if (cat) res.json(cat).status(201);
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
            const cat = await this.catModel.update(id, input);
            if (cat) res.json(cat).status(200);
            else res.status(404).json({ error: 'Cat not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}