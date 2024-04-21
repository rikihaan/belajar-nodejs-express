import express from 'express';
import request from 'supertest';

// middleware 1
const logger = (req,res,next)=>{
    console.info(`Receive request : ${req.method} ${req.originalUrl}`);
    next();
}

// middleware 2
const addPoweredHeader = (req,res,next)=>{
    res.set("X-Powered","Titip Informatika");
    next();
}

//middleware 3
const apiKeyMiddleware = (req,res,next)=>{
    if(req.query.apiKey){
        next()
    }else{
        res.status(401).send("UnAuthorized").end();
    }
}

const app = express();
app.use(logger);
app.use(addPoweredHeader);
app.use(apiKeyMiddleware);



app.get("/header",(req,res)=>{
    res.send("Hello Response add logger and header");
})

app.get("/apiKey",(req,res)=>{
    res.send(`Hello apiKey: ${req.query.apiKey}`);
})

test('test middleware add logger and header', async () => {
    const response = await request(app).get("/header").query({apiKey:"rahasiah"});
    expect(response.get("X-Powered")).toBe("Titip Informatika");
    expect(response.text).toBe("Hello Response add logger and header");
});

test('test apiKey Middleware',  async() => {
    const response = await request(app).get("/apiKey").query({apiKey:"rahasiah"});

    expect(response.text).toBe(`Hello apiKey: rahasiah`);
    
});

test('text block middleware unauthorizatin',async () => {
    const response = await request(app).get("/apiKey");
    expect(response.text).toBe("UnAuthorized");
    expect(response.status).toBe(401)
});

