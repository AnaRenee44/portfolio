const express = require("express");
const path = require("path");
import { Request, Response } from "express";

const app = express();
const PORT = 3000;

const DIST_DIR = path.resolve(__dirname, "dist");
app.use("/", express.static(DIST_DIR));

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.resolve(DIST_DIR, "index.html"));
});

// __dirname + "/index.html";

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
