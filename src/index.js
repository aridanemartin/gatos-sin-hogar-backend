import { createRestApiServer } from './server/index.js';
import { createCatRouter } from './routes/cat.router.js';
import { CatModel } from './models/cat.model.js';
import { createClinicRouter } from './routes/clinic.router.js';
import { ClinicModel } from './models/clinic.model.js';
import { createVolunteerRouter } from './routes/volunteer.router.js';
import { VolunteerModel } from './models/volunteer.model.js';
import { createPhoneRouter } from './routes/phone.router.js';
import { PhoneModel } from './models/phone.model.js';
import { createCategoryRouter } from './routes/category.router.js';
import { CategoryModel } from './models/category.model.js';
import { createBreedRouter } from './routes/breed.router.js';
import { BreedModel } from './models/breed.model.js';
import { createTaskRouter } from './routes/task.router.js';
import { TaskModel } from './models/task.model.js';
import { createLocationRouter } from './routes/location.router.js';
import { LocationModel } from './models/location.model.js';
import { AuthModel } from './models/auth.model.js';
import cookieParser from 'cookie-parser';

// import { createIncidentRouter } from './routes/incident.router.js'; //TODO: implement later
// import { IncidentModel } from './models/incident.model.js';
import { createGenderRouter } from './routes/gender.router.js';
import { GenderModel } from './models/gender.model.js';
import { morganMiddleware } from './server/logger.js';
import { createAuthRouter } from './routes/auth.router.js';

const app = createRestApiServer();
app.use(morganMiddleware);
app.use(cookieParser());

app.use('/auth', createAuthRouter({ AuthModel }));
app.use('/cats', createCatRouter({ CatModel }));
app.use('/clinics', createClinicRouter({ ClinicModel }));
app.use('/volunteers', createVolunteerRouter({ VolunteerModel }));
app.use('/phones', createPhoneRouter({ PhoneModel }));
app.use('/categories', createCategoryRouter({ CategoryModel }));
app.use('/breeds', createBreedRouter({ BreedModel }));
app.use('/tasks', createTaskRouter({ TaskModel }));
app.use('/locations', createLocationRouter({ LocationModel }));
// app.use('/incidents', createIncidentRouter({ IncidentModel })); //TODO: implement later
app.use('/genders', createGenderRouter({ GenderModel }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    /* eslint-disable no-console */
    console.log(`✅ Server listening on port http://localhost:${PORT}`);
});
