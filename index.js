import express from 'express';
import cors from 'cors';
import { db_connection } from './DataBase/DB.js';
import { } from "dotenv/config.js";
const app = express();


db_connection();

app.use(cors({ origin: "*" }));
app.use(express.json());

// app.use('/', RouterPage);
app.get("/", (req, res) => { res.status(200).json({ message: "Working fine..." }) })

app.listen(process.env.PORT, () => console.log("Server connected", process.env.PORT));