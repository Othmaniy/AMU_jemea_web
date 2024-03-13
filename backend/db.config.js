const mysql = require("mysql");
require("dotenv").config();

const pool = mysql.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    database:process.env.DB,
    password:process.env.PASSWORD,
    connectionLimit:10
})

pool.getConnection((err)=>{
    if(err){
        console.log("connection error");
        return;
    }
    console.log("connected successfully");
})

let usertable = `CREATE TABLE IF NOT EXISTS usertable(
    id int auto_increment,
    name varchar(255) not null,
    lastname varchar(255) not null,
    id_number int ,
    phone int not null,
    emergency_phone int ,
    PRIMARY KEY (id)

)`



pool.query(usertable,(err,results)=>{
    if(err){
        console.log(err);
    }
    console.log("user table created sucessfully");
})