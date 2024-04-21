import express from 'express';
import request from 'supertest';

test('test Respone Headers', async () => {
    const app = express();

    app.get('/',(req,res)=>{
        res.set({
            'X-Powered':'Titip Informatika',
            'X-Author':"Asep Riki"
        }).end();
    });

    const response = await request(app).get("/");

    expect(response.get('X-Powered')).toBe("Titip Informatika");
    expect(response.get('X-Author')).toBe('Asep Riki')
});