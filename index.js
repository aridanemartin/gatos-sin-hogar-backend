import { createRestApiServer } from "./server/index.js" 
import { createCatRouter } from "./routes/cat.js";
import { CatModel } from "./models/cat.js";
import { createClinicRouter } from "./routes/clinic.js"
import { ClinicModel } from "./models/clinic.js"

const app = createRestApiServer();

app.use("/cats", createCatRouter({ CatModel }));
app.use("/clinics", createClinicRouter({ ClinicModel}))


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server listening on port http://localhost:${PORT}`);
});


