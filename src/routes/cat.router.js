import { Router } from 'express';
import multer from 'multer';
import { CatController } from '../controllers/CatController.js';
import { paginationMiddleware } from '../middlewares/pagination.middleware.js';

const storage = multer.memoryStorage();
const upload = multer({ storage });

export const createCatRouter = ({ CatModel }) => {
    const catRouter = Router();

    const catController = new CatController({ CatModel });

    catRouter.get('/', paginationMiddleware, catController.getAll);
    catRouter.get('/:id', catController.getById);
    catRouter.post('/', catController.create);
    catRouter.post(
        '/upload-image/:id',
        upload.single('picture'),
        (err, _, res, next) => {
            if (err) {
                console.error('Multer error:', err.message);
                return res
                    .status(500)
                    .send('Error during file upload: ' + err.message);
            }
            next();
        },
        catController.uploadImage
    );
    catRouter.get('/image/:id', catController.getImageById);
    catRouter.put('/:id', catController.update);
    catRouter.delete('/:id', catController.delete);
    catRouter.delete('/delete-image/:id', catController.deleteImage);

    return catRouter;
};
