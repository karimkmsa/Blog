import express from "express";
import { connection } from "./database/connection.js";

const app = express();
const port = 3000;

app.use(express.json());

connection();

app.listen(port, () => {
  console.log("server running");
});
