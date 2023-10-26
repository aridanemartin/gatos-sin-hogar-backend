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

const app = createRestApiServer();

app.use("/cats", createCatRouter({ CatModel }));
app.use("/clinics", createClinicRouter({ ClinicModel}));
app.use("/vaccines", createVaccineRouter({ VaccineModel}));
app.use("/volunteers", createVolunteerRouter({ VolunteerModel}));
app.use("/phones", createPhoneRouter({ PhoneModel}));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server listening on port http://localhost:${PORT}`);
});


