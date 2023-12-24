const express = require("express");
const app = express();

app.send("/express",(req,res)=> {
     res.send("This is Express");
});