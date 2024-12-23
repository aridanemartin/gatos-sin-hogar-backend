export class CatController {
    constructor({ CatModel }) {
        this.catModel = CatModel;
    }

    getAll = async (req, res) => {
        try {
            const response = await this.catModel.getAll(req);

            res.status(200).json(response);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    getById = async (req, res) => {
        try {
            const { id } = req.params;
            const response = await this.catModel.getById(id);   
            if (response) res.status(200).json(response);


            else res.status(404).json({ error: 'Cat not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    create = async (req, res) => {
        try {
            const input = req.body;
            const response = await this.catModel.create(input);
            if (response) res.status(201).json(response);
            else res.status(404).json({ error: 'Could not create new cat' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    update = async (req, res) => {
        try {
            const { id } = req.params;
            const input = req.body;
            const response = await this.catModel.update(id, input);
            if (response) res.status(200).json(response);
            else res.status(404).json({ error: 'Cat not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    delete = async (req, res) => {
        try {
            const { id } = req.params;
            const response = await this.catModel.delete(id);

            if (response)
                res.status(200).json({ message: 'Cat deleted successfully' });
            else res.status(404).json({ error: 'Cat not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    getImageById = async (req, res) => {
        try {
            const { id } = req.params;
            const data = await this.catModel.getImage(id);

            res.status(200).json(data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    uploadImage = async (req, res) => {
        try {
            if (!req.file) {
                return res.status(400).json({ error: 'No file uploaded' });
            }

            const { id } = req.params;
            const response = await this.catModel.uploadImage(req, id);
            if (response) res.status(200).json(response);
            else res.status(404).json({ error: 'Cat not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    deleteImage = async (req, res) => {
        try {
            const { id } = req.params;
            const response = await this.catModel.deleteImage(id);
            if (response) res.status(200).json(response);
            else res.status(404).json({ error: 'Cat Image not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };
}
