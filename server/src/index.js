import express from "express";
import dotenv from "dotenv";
import dbConnect from "./database/db.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
dbConnect();

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
