export class LocationController {

    constructor ({ LocationModel }) {
        this.locationModel = LocationModel;
    }

    getAll = async (req, res) => {    
        try {
            const response = await this.locationModel.getAll();
            res.json(response).status(200);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    getById = async (req, res) => {
        try {
            const { id } = req.params;
            const response = await this.locationModel.getById(id);
            if (response) res.json(response).status(200);
            else res.status(404).json({ error: 'Location not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    create = async (req, res) => {
        try {
            const input = req.body;
            const response = await this.locationModel.create(input);
            if (response) res.json(response).status(201);
            else res.status(404).json({ error: 'Could not create new location' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    update = async (req, res) => {
        try {
            const { id } = req.params;
            const input = req.body;
            const response = await this.locationModel.update(id, input);
            
            if (response.length) res.json(response).status(200);
            else res.status(404).json({ error: 'Location not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    delete = async (req, res) => {
        try {
            const { id } = req.params;
            const response = await this.locationModel.delete(id);
            
            if (response) res.json({ message: 'Location deleted successfully' }).status(200);
            else res.status(404).json({ error: 'Location not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}