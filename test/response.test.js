import express from 'express';
import request from 'supertest';

test('Test Response', async() => {
    const app = express();
    app.get("/",(req,res)=>{
        res.send("Hello response");
    })

    const resultResponse = await request(app).get("/");
    expect(resultResponse.text).toBe("Hello response");
});