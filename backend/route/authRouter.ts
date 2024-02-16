import jwt from "jsonwebtoken";
import express, { Request, Response } from "express";
import { checkAuth, jwtMySecret } from "../utils/auth";

export const authRouter = express.Router();
let user: any[] = [];
authRouter.post("/register", async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  console.log(req.body);

  const isValid = name && email && password;
  if (!isValid) return res.send("information insufficient");
  user.push(name);
  try {
    const token = jwt.sign(name, jwtMySecret);
    return res.status(200).json({ name, token });
  } catch (err) {
    return res.status(404).send("fail");
  }
});
authRouter.post("/login", checkAuth, async (req: Request, res: Response) => {
  const { name } = req.body;
  const isValid = user.includes(name);
  if (!isValid) return res.send("user not found");

  try {
    return res.status(200).json({ name, message: "log in success" });
  } catch (err) {
    return res.status(404).send("fail");
  }
});
