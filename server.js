
require('dotenv').config();
const express = require("express")
const app = express()
const connectDB = require('./db/connect')

const PORT = process.env.PORT || 5000;

const product_routes = require("./routes/product")

// middleare servevr 

app.use("/api/product/", product_routes)

app.get("/",(req,res)=>{
    res.send("Hello I am Live") 
})


const start = async () =>{
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
            console.log(`${PORT} Yes i am connected...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start();    