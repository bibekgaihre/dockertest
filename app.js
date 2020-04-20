const express=require("express");
const app=express();
const env=require("dotenv").config();

app.get("/",(req,res,next)=>{
    res.send("Hello World for docker volume");
});

app.listen(process.env.PORT,()=>console.log(`${process.env.NODE_ENV} server is running on port ${process.env.PORT}`));