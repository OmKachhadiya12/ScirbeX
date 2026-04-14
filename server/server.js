import express from "express";
import cors from "cors";
import notesRoutes from "./src/routes/notesRoutes.js";
import dotenv from "dotenv";
import { connectDb } from "./src/conifg/db.js";
import ratelimiter from "./src/middleware/ratelimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDb();

app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(express.json());
app.use(ratelimiter);
app.use("/api/notes",notesRoutes);

app.listen(PORT,() => {
    console.log("Server is Listining on ",PORT);
})