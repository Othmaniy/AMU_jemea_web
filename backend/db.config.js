const mysql = require("mysql");
require("dotenv").config();

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DB,
    password: process.env.PASSWORD,
    connectionLimit: 10
});

pool.getConnection((err) => {
    if (err) {
        console.log("connection error");
        return;
    }
    console.log("connected successfully");
});

let usertable = `CREATE TABLE IF NOT EXISTS usertable (
    id INT AUTO_INCREMENT,
    name VARCHAR(255)  NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    id_number VARCHAR(255)  NOT NULL,
    role VARCHAR(255) DEFAULT 'user' ,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    emergency_phone VARCHAR(255) ,
    createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE KEY (id_number)
)`;

let bookstable = `CREATE TABLE IF NOT EXISTS books(
    id INT AUTO_INCREMENT,
    book_name VARCHAR(255) NOT NULL,
    Author VARCHAR(255) NOT NULL,
    category VARCHAR(255),
    available VARCHAR(255) DEFAULT 'available',
    createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedat TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
)`;

let umumaebedMembers = `CREATE TABLE IF NOT EXISTS umumaebedmembers(
    id INT AUTO_INCREMENT,
    user_id int not null,
    amount int not null,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES usertable(id) ON UPDATE CASCADE,
    FOREIGN KEY (user_id) REFERENCES usertable(id) ON DELETE CASCADE
)`;
// name VARCHAR(256) NOT NULL,
//     lastname VARCHAR(256) NOT NULL,
//     id_number VARCHAR(255) NOT NULL,
//     phone VARCHAR(256) NOT NULL,
//     batch INT,
//     monthlypayment INT NOT NULL,
//     status VARCHAR(256) DEFAULT 'active',
//     PRIMARY KEY(id)
let acadamiFiles = `CREATE TABLE IF NOT EXISTS acadamifiles(
    id INT AUTO_INCREMENT,
    file_url VARCHAR(256) NOT NULL,
    file_description VARCHAR(256) NOT NULL,
    department VARCHAR(256) NOT NULL,
    Teacher_name VARCHAR(256),
    createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
)`;

let courses = `CREATE TABLE IF NOT EXISTS courses (
    course_id INT AUTO_INCREMENT,
    course_name VARCHAR(256) NOT NULL,
    course_description VARCHAR(256) NOT NULL,
    course_writter VARCHAR(256) NOT NULL,
    course_unique_id VARCHAR(256) NOT NULL,
    ustaz VARCHAR(255) NOT NULL,
    open_for_registration varchar(256) DEFAULT false ,
    PRIMARY KEY(course_id)
)`;

let course_enrollment = `CREATE TABLE IF NOT EXISTS course_enrollment(
    id INT AUTO_INCREMENT,
    user_id INT NOT NULL,
    course_id INT NOT NULL,
    currently_enrolling VARCHAR(256) DEFAULT true,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES usertable(id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES courses(course_id) ON UPDATE CASCADE ON DELETE CASCADE

)`;

let daewandIrshadFiles = `CREATE TABLE IF NOT EXISTS daewa_and_irshad_files(
    id INT AUTO_INCREMENT,
    file_url VARCHAR(255) NOT NULL,
    file_description VARCHAR(256) NOT NULL,
    author VARCHAR(256) NOT NULL,
    PRIMARY KEY(id)
)`;

// Execute table creation queries in order
pool.query(usertable, (err, results) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("user table created successfully");
   
});
pool.query(course_enrollment, (err, results) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("enrollment table successfully created");
});
pool.query(bookstable, (err, results) => {
    if (err) {
        console.log(err);
    }
    console.log("books table created successfully");
});

pool.query(umumaebedMembers, (err, results) => {
    if (err) {
        console.log(err);
    }
    console.log("umumaebed table successfully created");
});

pool.query(acadamiFiles, (err, results) => {
    if (err) {
        console.log(err);
    }
    console.log("acadami table created successfully");
});

pool.query(courses, (err, results) => {
    if (err) {
        console.log(err);
    }
    console.log("courses table created successfully");
});

pool.query(daewandIrshadFiles, (err, results) => {
    if (err) {
        console.log(err);
    }
    console.log("daewa and irshad table successfully created");
});

module.exports = pool;
