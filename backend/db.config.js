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
    id_number varchar(255),
    role varchar(255),
    password varchar(255) not null,
    phone varchar(255) not null,
    emergency_phone varchar(255) ,
    createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)

)`
let bookstable =`CREATE TABLE IF NOT EXISTS books(
    id int auto_increment,
    book_name varchar(255) not null,
    Author varchar(255) not null,
    category varchar(255),
    available VARCHAR(255) DEFAULT 'available',
    createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedat TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
    

)`

let umumaebedMembers =`CREATE TABLE IF NOT EXISTS umumaebed(
 id int auto_increment,
 name varchar(256) not null,
 lastname varchar(256) not null,
 id_number varchar(255) not null,
 phone varchar(256) not null,
 batch int,
 monthlypayment int not null,
 status varchar(256) DEFAULT 'active',
 PRIMARY KEY(id)

)`

let acadamiFiles =`CREATE TABLE IF NOT EXISTS acadamifiles(
id int auto_increment,
file_url varchar(256) not null,
file_description varchar(256) not null, 
department varchar(256) not null,
Teacher_name varchar(256),
createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY(id)
)`


pool.query(acadamiFiles,(err,results)=>{
    if(err){
        console.log(err);
    }
    console.log("acadami table created successfully");
})
pool.query(usertable,(err,results)=>{
    if(err){
       console.log(err);
    }
    console.log("user table created sucessfully");
})
pool.query(umumaebedMembers,(err,results)=>{
    if(err){
        console.log(err);
    }
    console.log("umumaebed table sucessfully created");
})
pool.query(bookstable,(err,results)=>{
    if(err){
        console.log(err);
    }
    console.log("books table created successfully");
})

module.exports =pool;