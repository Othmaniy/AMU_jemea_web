const mysql =require("mysql");
const express = require("express")
const pool = require("./db.config")


// const authrouter = require("./api/router/auth.router")
const app = express();
const cors= require("cors");
app.use(cors(
    {origin:"http://localhost:5173"}
));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.listen(process.env.port,()=>{
    console.log(`listening to port${process.env.port}`);
})
