const express = require("express");

const app = express();

app.use(express.json());


app.get("/", (req,res)=>{

    res.json({
        message:"Jenkins Express Backend Running"
    });

});


app.get("/health",(req,res)=>{

    res.json({
        status:"UP"
    });

});


app.get("/users",(req,res)=>{

    res.json([
        {
            id:1,
            name:"Harsha"
        
        {
            id:2,
            name:"DevOps"
        }
    ]);

});


module.exports = app;