export class LocationController {
    constructor({ LocationModel }) {
        this.locationModel = LocationModel;
    }

    getAll = async (req, res) => {
        try {
            const response = await this.locationModel.getAll();
            res.status(200).json(response);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    getById = async (req, res) => {
        try {
            const { id } = req.params;
            const response = await this.locationModel.getById(id);
            if (response) res.status(200).json(response);
            else res.status(404).json({ error: 'Location not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    create = async (req, res) => {
        try {
            const input = req.body;
            const response = await this.locationModel.create(input);
            if (response) res.status(201).json(response);
            else
                res.status(404).json({
                    error: 'Could not create new location'
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
            const response = await this.locationModel.update(id, input);

            if (response.length) res.status(200).json(response);
            else res.status(404).json({ error: 'Location not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    delete = async (req, res) => {
        try {
            const { id } = req.params;
            const response = await this.locationModel.delete(id);

            if (response)
                res.status(200).json({
                    message: 'Location deleted successfully'
                });
            else res.status(404).json({ error: 'Location not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };
}
