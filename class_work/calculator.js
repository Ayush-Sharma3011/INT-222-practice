import express from 'express';

const app = express();


app.get('/add',(req,res)=>{
    req.query;
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);
    let sum = a + b;
    res.send(`The sum of ${a} and ${b} is ${sum}`);
    res.end();
})
app.get('/subtract',(req,res)=>{
    req.query;
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);
    let sub = a-b;
    res.send(`The subtraction of ${a} and ${b} is ${sub}`);
    res.end();
})    



app.listen(3000,"127.0.0.1",()=>{
    console.log("Server is running on port 3000");
})