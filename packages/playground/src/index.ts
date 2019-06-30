import { join } from "path";
import express from "express";
import Bundler from "parcel-bundler";

import { setupRoutes } from "./routes";

export function run() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  setupRoutes(app);

  if (process.env.NODE_ENV === "production") {
    const staticPath = join(__dirname, "../dist");
    app.use(express.static(staticPath));
  } else {
    const bundler = new Bundler(join(__dirname, "../client/index.html"));
    app.use(bundler.middleware());
  }

  app.listen(PORT, () =>
    console.log(`App is running at http://localhost:${PORT}`),
  );
}
