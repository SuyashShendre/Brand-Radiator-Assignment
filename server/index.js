import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import routes from "./src/routes/route.js";

const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Mongo db Connected"))
    .catch((err) => {
      throw err;
    });
};

app.use(cors());
app.use(express.json());

app.use("/", routes);

app.listen(process.env.PORT, () => {
  connect();
  console.log("listening on port " + process.env.PORT);
});
