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


app.get("/version",(req,res)=>{

    res.json({
        app:"Jenkins CI/CD Demo",
        version:"2.0",
        deployedBy:"Jenkins + Docker + AWS EC2"
    });

});
app.get("/users",(req,res)=>{

    res.json([
        {
            id:1,
            name:"Harsha"
        },
        {
            id:2,
            name:"DevOps"
        }
    ]);

});


module.exports = app;