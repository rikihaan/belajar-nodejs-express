import express from 'express';
import request from 'supertest';

test('test response redirect', async () => {
    const app = express();
    app.get("/",(req,res)=>{
        res.redirect("/to-next-page"); //dengan default status code 302

        // atau status code nya bisa di ubah juga
        // res.redirect(301,"/to-next-page");
    })

    const response = await request(app).get("/");
    expect(response.status).toBe(302);
    expect(response.get("Location")).toBe("/to-next-page");
});