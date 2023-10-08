export class CatController {

    constructor ({ catModel }) {
        this.catModel = catModel;
    }

    getAll = async (req, res) => {    
        try {
            const cats = await this.catModel.getAll();
            res.json(cats);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}