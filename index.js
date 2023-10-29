import { createRestApiServer } from "./server/index.js" 
import { createCatRouter } from "./routes/cat.router.js";
import { CatModel } from "./models/cat.model.js";
import { createClinicRouter } from "./routes/clinic.router.js"
import { ClinicModel } from "./models/clinic.model.js"
import { createVaccineRouter } from "./routes/vaccine.router.js"
import { VaccineModel } from "./models/vaccine.model.js"
import { createVolunteerRouter } from "./routes/volunteer.router.js"
import { VolunteerModel } from "./models/volunteer.model.js"
import { createPhoneRouter } from "./routes/phone.router.js"
import { PhoneModel } from "./models/phone.model.js"
import { createCategoryRouter } from "./routes/category.router.js"
import { CategoryModel } from "./models/category.model.js"
import { createBreedRouter } from "./routes/breed.router.js"
import { BreedModel } from "./models/breed.model.js"
import { createTaskRouter } from "./routes/task.router.js"
import { TaskModel } from "./models/task.model.js"
import { createLocationRouter } from "./routes/location.router.js"
import { LocationModel } from "./models/location.model.js"

const app = createRestApiServer();

app.use("/cats", createCatRouter({ CatModel }));
app.use("/clinics", createClinicRouter({ ClinicModel }));
app.use("/vaccines", createVaccineRouter({ VaccineModel }));
app.use("/volunteers", createVolunteerRouter({ VolunteerModel }));
app.use("/phones", createPhoneRouter({ PhoneModel }));
app.use("/categories", createCategoryRouter({ CategoryModel }));
app.use("/breeds", createBreedRouter({ BreedModel }));
app.use("/tasks", createTaskRouter({ TaskModel }));
app.use("/locations", createLocationRouter({ LocationModel }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`✅ Server listening on port http://localhost:${PORT}`);
});


