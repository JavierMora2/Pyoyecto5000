import { modelo1 } from "../models/alumno.models.js";

modelo1.create({
  name: "el choyas",
});

export const test = () => {
  console.log("si funciona el controlador");
};
