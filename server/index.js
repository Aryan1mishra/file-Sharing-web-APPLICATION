import express from "express";
import router from "./routes/router.js";
import cors from 'cors';
import DBconnection from "./dabase/db.js";

const app=express();
app.use(cors());
app.use('/',router)
const PORT=8000;
DBconnection();
app.listen(PORT,()=>console.log(`Server is running ${PORT}`));