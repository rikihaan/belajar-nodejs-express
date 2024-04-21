import express from 'express';
import request from 'supertest';

test('test Response body', async() => {
    const app = express();
    app.get("/",(req,res)=>{
        res.set("Containt-Type","application/json")
        res.send("<html><head><title>Hello HTML</title></head></html>")
    })

    const response = await request(app).get("/");
    expect(response.get("Content-Type")).toContain("text/html");
    expect(response.text).toBe("<html><head><title>Hello HTML</title></head></html>")
});