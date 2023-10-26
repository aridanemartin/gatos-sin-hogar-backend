export class PhoneController {

    constructor ({ PhoneModel }) {
        this.phoneModel = PhoneModel;
    }

    getAll = async (req, res) => {    
        try {
            const response = await this.phoneModel.getAll();
            res.json(response).status(200);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    getById = async (req, res) => {
        try {
            const { id } = req.params;
            const response = await this.phoneModel.getById(id);
            if (response) res.json(response).status(200);
            else res.status(404).json({ error: 'Phone not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    create = async (req, res) => {
        try {
            const input = req.body;
            const response = await this.phoneModel.create(input);
            if (response) res.json(response).status(201);
            else res.status(404).json({ error: 'Could not create new phone' });
        } catch (error) {
            //! Error might be caused by a foreign key constraint (volunteer_id not found) [should be handled in the front-end]
            //! code: 'ER_NO_REFERENCED_ROW_2', errno: 1452, sqlState: '23000'
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    update = async (req, res) => {
        try {
            const { id } = req.params;
            const input = req.body;
            const response = await this.phoneModel.update(id, input);
            
            // ! If the response is an empty object, the phone was not found but status 200 is still returned
            if (response) res.json(response).status(200);
            else res.status(404).json({ error: 'Phone not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    delete = async (req, res) => {
        try {
            const { id } = req.params;
            const response = await this.phoneModel.delete(id);
            
            if (response) res.json({ message: 'Phone deleted successfully' }).status(200);
            else res.status(404).json({ error: 'Phone not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}