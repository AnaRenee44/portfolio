const express = require("express");
const path = require("path");
const router = require("./api/outlook.ts");
const cors = require("cors");
// const bp = require("body-parser");
import { Request, Response } from "express";
require("dotenv").config({ path: "./.env" });

const app = express();
const PORT = 3000;
const DIST_DIR = path.resolve(__dirname, "dist");

router(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/", express.static(DIST_DIR));

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.resolve(DIST_DIR, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
