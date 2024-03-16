const express =require("express");
const pool = require("../../db.config");
const { createaccountservice,getuserbyid } = require("../service/auth.service");
const createaccount =(req,res)=>{
     const sql ="SELECT * FROM usertable WHERE id_number=?";
     const idnumber=req.body.id_number;
   pool.query(sql,[idnumber],(err,results)=>{
    if(err){
        console.log(err);
        return res.status(500).json({message:"database connection error"});
       
    }
    if(results.length>0){
        return res.status(409).json({message:"user already exists"})
    }
    createaccountservice(req.body,(err,results)=>{
        if(err){
            console.log(err);
            return res.status(500).json({message:"database connecton error"})
        }
        const response={
            status:"success",
            message:"user created successfully"
        }
        return res.status(200).json(response)
    })
   })
}
const login =(req,res)=>{
    getuserbyid(req.body.id_number,(err,results)=>{
        if(err){
            return res.status(500).json({message:"db connection error"})
        }
        if(results.length==0){
            return res.status(404).json({message:"no user found with this id"})
        }
        console.log(results);    
    })

}
module.exports={createaccount}