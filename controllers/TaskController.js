export class TaskController {

    constructor ({ TaskModel }) {
        this.taskModel = TaskModel;
    }

    getAll = async (req, res) => {    
        try {
            const response = await this.taskModel.getAll();
            res.json(response).status(200);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    getById = async (req, res) => {
        try {
            const { id } = req.params;
            const response = await this.taskModel.getById(id);
            if (response) res.json(response).status(200);
            else res.status(404).json({ error: 'Task not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    create = async (req, res) => {
        try {
            const input = req.body;
            const response = await this.taskModel.create(input);
            if (response) res.json(response).status(201);
            else res.status(404).json({ error: 'Could not create new task' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    update = async (req, res) => {
        try {
            const { id } = req.params;
            const input = req.body;
            const response = await this.taskModel.update(id, input);
            
            if (response.length) res.json(response).status(200);
            else res.status(404).json({ error: 'Task not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    delete = async (req, res) => {
        try {
            const { id } = req.params;
            const response = await this.taskModel.delete(id);
            
            if (response) res.json({ message: 'Task deleted successfully' }).status(200);
            else res.status(404).json({ error: 'Task not found' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}