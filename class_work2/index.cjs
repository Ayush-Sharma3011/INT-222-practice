const express = require('express');
const { validationResult} = require('express-validator');
const {validateLogin} = require('./validateLogin.cjs');

const app = express();
app.use(express.urlencoded({ extended: true}));

app.get('/', (req,res)=>{
        res.send(`
            <form action='/login' method='POST'>
                <input type='text' name='username' placeholder='Username'/><br/>
                <input type='text' name='email' placeholder='Email'/><br/>
                <input type='password' name='password' placeholder='Password'/><br/>
                <button type='submit'>Login</button>
                </form>
            `);
});


app.post('/login', validateLogin, (req,res)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    res.send(`success validation ${req.body.username}`);
})

app.listen(5000, ()=>console.log('Server Running on port 5000')); 