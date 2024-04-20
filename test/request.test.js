import express from "express";
import supertest from "supertest";


test('Request Test', async () => {
    const app = express();

    app.get("/",(req,res)=>{
        res.send(`Hello ${req.query.name}`);

    })

    const response = await supertest(app).get("/").query({name:"Asep Riki"});
    expect(response.text).toBe("Hello Asep Riki");
});