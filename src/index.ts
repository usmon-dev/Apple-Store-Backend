import express from "express";
import cors from "cors";
import { Response, Request } from "express";
import { apiKeyMiddleware } from "./utilities/middleware";
import "dotenv/config";

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.get("/", apiKeyMiddleware, (req: Request, res: Response) => {
  res.json({ message: "Welcome to Apple Store API" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
