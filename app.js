import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { test } from "./backend/controllers/alumnos.controllers.js";

dotenv.config();
mongoose
  .connect(process.env.url_db)
  .then(() => {
    console.log("funciona la base de datos");
  })
  .catch((error) => {
    console.log("No funciona ya salio", error);
  });

const app = express();
app.use(cors());
app.listen(4000, () => {
  console.log("se escucha el servidor");
});
test();
