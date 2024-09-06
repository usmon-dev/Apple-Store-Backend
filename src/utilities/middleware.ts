import { NextFunction, Request, Response } from "express";
import "dotenv/config";

export const apiKeyMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const apiKey = req.header("X-API-Key");

  if (!apiKey || apiKey !== process.env.API_SECRET_KEY) {
    return res.status(401).send("Forbidden");
  }

  next();
};