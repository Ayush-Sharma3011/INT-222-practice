const express = require('express');
const app = express();
const reqFilter = require("./midleware.cjs")
// application level middleware



// app.use(reqFilter);


app.get('/home', reqFilter,(req, res) => {
    res.send('Welcome to the Home Page');
}   
);

app.get('/about', (req, res) => {
    res.send('This is the About Page');
}
);

app.get("/user", (req, res) => {
    res.send('Welcome to the User Page');
}
);

app.listen(5000);
console.log('Server is listening on port 5000');