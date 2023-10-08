import { createRestApiServer } from "./server/index.js" 
import { createCatRouter } from "./routes/cat.js";
import { CatModel } from "./models/Cat.js";

const app = createRestApiServer();

app.use("/cats", createCatRouter({ catModel: CatModel }));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server listening on port http://localhost:${PORT}`);
});


