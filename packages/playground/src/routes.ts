import { Application } from "express";
import { Examples } from "../shared/src/types";

export function setupRoutes(app: Application) {
  app.get("/api/examples", (_, res) => {
    const json: Examples = { result: ["police warning", "dog poop"] };
    res.json(json);
  });
}
