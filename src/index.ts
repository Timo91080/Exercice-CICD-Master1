import "dotenv/config";
import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000;
const appName = process.env.APP_NAME || "mon-api";
const environment = process.env.NODE_ENV || "development";

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: `Bienvenue sur ${appName} !`,
    environment: environment,
    timestamp: new Date().toISOString(),
  });
});
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    status: "OK",
    message: "API is healthy 🚀",
    app: appName,
    environment: environment,
    timestamp: new Date().toISOString(),
  });
});

app.listen(port, () => {
  console.log(
    `[${appName}] Server running on http://localhost:${port} (${environment})`,
  );
});
