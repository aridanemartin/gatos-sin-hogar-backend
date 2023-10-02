import { Router } from "express";
import bbdd from "../BBDD.js";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  //   const { id } = req.params;
  //   const user = bbdd.find((user) => user.id === id);

  res.send(bbdd);
});

userRouter.post("/:id", (req, res) => {
  //   const { id } = req.params;
  const { name, age } = req.body;
  const user = {
    name,
    age,
  };

  if (!user) {
    res.status(404).send("User not found");
  } else {
    bbdd.push(user);
    console.log(bbdd);
    res.send(user);
  }
});

export default userRouter;
