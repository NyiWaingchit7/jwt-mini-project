import express from "express";
import cors from "cors";
import { authRouter } from "./route/authRouter";
const app = express();
const port = 3001;
app.use(express.json());
app.use(cors());
app.use("/auth", authRouter);
app.listen(port, () => console.log("server is running at", port));
