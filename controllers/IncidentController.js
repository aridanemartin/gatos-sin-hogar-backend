export class IncidentController {
    constructor({ IncidentModel }) {
        this.incidentModel = IncidentModel;
    }

    getAll = async (req, res) => {
        try {
            const response = await this.incidentModel.getAll(req);
            res.status(200).json(response);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    getById = async (req, res) => {
        try {
            const { id } = req.params;
            const response = await this.incidentModel.getById(id);
            if (response) res.status(200).json(response);
            else res.status(404).json({ error: 'Incident not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    getByVolunteerId = async (req, res) => {
        try {
            const { id } = req.params;
            const response = await this.incidentModel.getByVolunteerId(id);
            if (response) res.status(200).json(response);
            else res.status(404).json({ error: 'Incident not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    create = async (req, res) => {
        try {
            const input = req.body;
            const response = await this.incidentModel.create(input);
            if (response) res.json(response).status(201);
            else
                res.status(404).json({
                    error: 'Could not create new incident'
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
            const response = await this.incidentModel.update(id, input);

            if (response.length) res.json(response).status(200);
            else res.status(404).json({ error: 'Incident not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    delete = async (req, res) => {
        try {
            const { id } = req.params;
            const response = await this.incidentModel.delete(id);

            if (response)
                res.json({ message: 'Incident deleted successfully' }).status(
                    200
                );
            else res.status(404).json({ error: 'Incident not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };
}
