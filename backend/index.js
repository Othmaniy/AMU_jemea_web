const mysql =require("mysql");
require ("dotenv").config();
const express = require("express")
const pool = require("./db.config")
const authrouter = require("./api/router/auth.router")
const libraryRouter = require("./api/router/library.router")
const umumaebedrouter =require("./api/router/umumaebed.router")
const acadamiRouter = require("./api/router/academi.router")
const app = express();
const cors= require("cors");
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials",true);
    console.log("hello")

    next();
})
app.use(cors(
    {origin:"http://localhost:5173"}
));

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/api/auth",authrouter)
app.use("/api/library",libraryRouter)
app.use("/api/umumaebed",umumaebedrouter)
app.use("/api/academi",acadamiRouter)
app.listen(process.env.port,()=>{
console.log(`listening to port${process.env.port}`);

})



