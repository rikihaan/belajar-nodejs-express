import express from "express";
import request from "supertest";

test('Request query param', async() => {
    const app = express();

    app.get("/",(req,res)=>{
        // menangkap query param dari object req
        res.send(`Hello ${req.query.firsname} ${req.query.lastname}`);
    })

    //mengirm query param dengan bantuan supertest
    const response = await request(app).get("/").query({
        firsname:"Asep",
        lastname:"Riki"
    });

    expect(response.text).toBe("Hello Asep Riki")
});