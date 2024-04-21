import express from 'express';
import request from 'supertest';

test('test respone ststus',async () => {
    const app = express();
    app.get("/",(req,res)=>{

        if(req.query.name){
            res.status(200).send(`Hello ${req.query.name}`)
            res.end()
        }else{
            res.status(400);
            res.end()
        }
    })

    let response = await request(app).get("/").query({name:"Asep"});
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello Asep");

    response = await request(app).get("/");
    expect(response.status).toBe(400)

});