import express from "express";
import cors from "cors";
import notesRoutes from "./src/routes/notesRoutes.js";
import dotenv from "dotenv";
import { connectDb } from "./src/conifg/db.js";
import ratelimiter from "./src/middleware/ratelimiter.js";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

connectDb();

if(process.env.NODE_ENV !== "production") {
    app.use(cors({
        origin: "http://localhost:5173"
    }));
}

app.use(express.json());
app.use(ratelimiter);
app.use("/api/notes",notesRoutes);

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname,"../client/dist")));

    app.get("*",(req,res) => {
        res.sendFile(path.join(__dirname,"../client","dist","index.html"));
    })
}

app.listen(PORT,() => {
    console.log("Server is Listining on ",PORT);
})