import mongoose from "moongose";
import express from "expres";
import cors from "cors";
import dotenv from "dontenv";
import { test } from "./backend/controllers/Carro.controllers.js";

dotenv.config();
mongoose
  .connect(process.env.url_db)
  .then(() {
    console.log("funciona la base de datos");
  })
  .catch((error) => {
    console.log("No funciona ya salio");
  });

const app = express();
app.use(cors());
app.listen(400, () => {
  console.log("se escucha el servidor");
});
test();
