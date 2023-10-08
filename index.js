import express from "express";
import cors from "cors";
import "dotenv/config";
import db from "./db/db_connection.js";
import { createCatRouter } from "./routes/cat.js";
import { CatModel } from "./models/Cat.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/cats", createCatRouter({ catModel: CatModel }));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server listening on port http://localhost:${PORT}`);
});


