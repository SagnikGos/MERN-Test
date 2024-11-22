import express from "express";
import dotenv, { configDotenv } from "dotenv";
import { connectDB } from "./conifg/db.js"; 
import productRoutes from "./routes/product.route.js"


configDotenv();

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use("/api/products", productRoutes)

app.listen(PORT, () =>{
    connectDB();
    console.log("server started at http://localhost:"+PORT)
});

