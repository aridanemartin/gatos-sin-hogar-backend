export class VolunteerController {
    constructor({ VolunteerModel }) {
        this.volunteerModel = VolunteerModel;
    }

    getAll = async (req, res) => {
        try {
            const response = await this.volunteerModel.getAll(req);
            res.status(200).json(response);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    getById = async (req, res) => {
        try {
            const { id } = req.params;
            const response = await this.volunteerModel.getById(id);
            if (response) res.status(200).json(response);
            else res.status(404).json({ error: 'Volunteer not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    create = async (req, res) => {
        try {
            const input = req.body;
            const response = await this.volunteerModel.create(input);
            if (response) res.json(response).status(201);
            else
                res.status(404).json({
                    error: 'Could not create new volunteer'
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
            const response = await this.volunteerModel.update(id, input);

            if (response) res.json(response).status(200);
            else res.status(404).json({ error: 'Volunteer not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    delete = async (req, res) => {
        try {
            const { id } = req.params;
            const response = await this.volunteerModel.delete(id);

            if (response)
                res.json({ message: 'Volunteer deleted successfully' }).status(
                    200
                );
            else res.status(404).json({ error: 'Volunteer not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };
}
