import { modelo1 } from "../models/Carros.models.js";

modelo1.create.({
  name: "Honda",
});

export const test = () => (
  console.log("si funciona el controlador");
};
