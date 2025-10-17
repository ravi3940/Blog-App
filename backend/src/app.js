import express from "express"
import dotenv from "dotenv"
import  cookieParser  from  "cookie-parser"
import cors  from   "cors"
import dbConnection from "./config/dbconnection.js"
import authRoutes from './routes/auth.route.js';

dotenv.config({})
const app = express()
const PORT = process.env.PORT || 4000 ;
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "*", 
    credentials: true, 
  })
);

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    dbConnection()
    console.log(`srerver  is  run  at  this port  ${PORT}`)
})