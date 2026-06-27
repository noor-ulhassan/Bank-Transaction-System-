import express from "express";

const app = express();

app.listen(8080, () => {
  console.log("Server is listening");
});

app.get("/", (req, res) => {
  res.send("It's working!!");
});
