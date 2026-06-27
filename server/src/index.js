import express from "express";
import dotenv from "dotenv";
import dbConnect from "./database/db.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
dbConnect();

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("It's working!!");
});
