// import express from 'express';
const express = require('express');

const app = express();

app.get('/home', (req, res)=>{
    res.write('<h1>Hello this the Home Page. </h1>')
    res.write('<h2>This server is made using expressJs.</h2>')
    res.end();
})
app.get('/json',( res,req)=>{
    res.json({
        id: 1,
        name: "Ayush"
    })
})

app.listen(3000,"127.10.10.1", ()=>{
    console.log("Server is running on port 3000");
})