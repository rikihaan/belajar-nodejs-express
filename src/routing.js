import express from "express";

const app = express();

app.get("/",(req,res)=>{
    console.info(req);
    res.send('Hello world');
})


app.get("/home",(req,res)=>{
    res.send('Hello Home');
})


app.listen(3000,()=>{
    console.info("Server is running on port 3000")
})