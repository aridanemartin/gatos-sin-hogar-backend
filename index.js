import { createRestApiServer } from "./server/index.js" 
import { createCatRouter } from "./routes/cat.router.js";
import { CatModel } from "./models/cat.model.js";
import { createClinicRouter } from "./routes/clinic.router.js"
import { ClinicModel } from "./models/clinic.model.js"
import { createVaccineRouter } from "./routes/vaccine.router.js"
import { VaccineModel } from "./models/vaccine.model.js"

const app = createRestApiServer();

app.use("/cats", createCatRouter({ CatModel }));
app.use("/clinics", createClinicRouter({ ClinicModel}));
app.use("/vaccines", createVaccineRouter({ VaccineModel}));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server listening on port http://localhost:${PORT}`);
});


