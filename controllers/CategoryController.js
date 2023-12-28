export class CategoryController {
    constructor({ CategoryModel }) {
        this.categoryModel = CategoryModel;
    }

    getAll = async (req, res) => {
        try {
            const response = await this.categoryModel.getAll();
            res.status(200).json(response);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    getById = async (req, res) => {
        try {
            const { id } = req.params;
            const response = await this.categoryModel.getById(id);
            if (response) res.status(200).json(response);
            else res.status(404).json({ error: 'Category not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    create = async (req, res) => {
        try {
            const input = req.body;
            const response = await this.categoryModel.create(input);
            if (response) res.status(201).json(response);
            else
                res.status(404).json({
                    error: 'Could not create new category'
                });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    update = async (req, res) => {
        try {
            const { id } = req.params;
            const input = req.body;
            const response = await this.categoryModel.update(id, input);

            if (response) res.status(200).json(response);
            else res.status(404).json({ error: 'Category not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    delete = async (req, res) => {
        try {
            const { id } = req.params;
            const response = await this.categoryModel.delete(id);

            if (response)
                res.status(200).json({
                    message: 'Category deleted successfully'
                });
            else res.status(404).json({ error: 'Category not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };
}
