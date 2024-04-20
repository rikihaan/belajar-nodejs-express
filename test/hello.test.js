import express from "express";
import supertest from "supertest";

const app = express();
app.get("/",(req,res)=>{
    res.send("Hello World");

});

test('Hello World', async () => {
    const response =await supertest(app).get("/");
    expect(response.text).toBe("Hello World")
});