import express from "express";
import request from 'supertest';

test('Test Request URL', async() => {
    
    const app = express();
    app.get("/hello-world",(req,res)=>{
        res.json({
            path:req.path,
            originalUrl:req.originalUrl,
            hostname: req.hostname,
            protocol:req.protocol,
            ssl:req.secure
        });
    })


    // test
    const response = await request(app).get("/hello-world").query({name:"Riki"});

    expect(response.body).toEqual({
        path:"/hello-world",
        originalUrl:"/hello-world?name=Riki",
        hostname:"127.0.0.1",
        protocol:"http",
        ssl:false
    })
});
