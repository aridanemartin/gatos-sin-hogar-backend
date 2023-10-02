import express from "express";
import cors from "cors";
import "dotenv/config";
import userRouter from "./routes/user.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log("Buenos días, soy un middleware");
  next();
});

app.use("/user", userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server listening on port http://localhost:${PORT}`);
});
