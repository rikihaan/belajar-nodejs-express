import express from 'express';
import request from 'supertest';

test('Request Header', async() => {
    const app = express();
    app.get("/hello",(req,res)=>{
        const type = req.get("Accept");
        res.send(`Hello ${type}`);
    })

    const response = await request(app).get("/hello").set("Accept","text/plain");
    expect(response.text).toBe("Hello text/plain");
});