import express from "express";
import notesRoutes from "./src/routes/notesRoutes.js";
import dotenv from "dotenv";
import { connectDb } from "./src/conifg/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDb();

app.use(express.json());
app.use("/api/notes",notesRoutes);

app.listen(PORT,() => {
    console.log("Server is Listining on ",PORT);
})