const express=require("express");
const app=express()
const port=8000;

app.use(express.urlencoded({
    extended:true
}))

app.use('/',require('./routes'))

app.listen(port,function(err){
    if(err){
        console.log(`Error in connecting server:${port}`)
    };
    console.log("Connected to server:8000");
})
