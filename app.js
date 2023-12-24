const express = require("express");
const app = express();

const ports = 8080;

app.listen(ports,()=>{
     console.log(`App is listing on port : ${ports}`)
})

app.get("/express",(req,res)=> {
     res.send("This is Express");
});

