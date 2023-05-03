import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Contact from "./src/contactModel.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const data = await Contact.find();
  res.send({ status: true, data: data });
});

app.post("/", async (req, res) => {
  console.log(req.body);
  await Contact.create(req.body);
  res.send({ status: true, message: "Data uploaded Sucessfully" });
});

mongoose
  .connect("mongodb://localhost:27017/crud", {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo Connected");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(3000, () => {
  console.log("Server Started");
});
