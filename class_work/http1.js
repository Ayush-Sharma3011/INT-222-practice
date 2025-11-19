// 1st method to create a server using res.end()
// import Homepage from './homepage.js';

import { createServer } from 'http';
    const server = createServer((req,res) =>{
        console.log(req.url);
        function factorial(a){
            if (a==0 || a==1){
                return 1;
            }
            return a*factorial(a-1);
        }
        res.end(`Factorial of 5 is ${factorial(5)}`);
    });
    server.listen(8000, "127.10.10.1", ()=> {
        console.log("Server is listening on port 8000");
    });

// 2nd method to create a server using res.write() and res.end()
// import { createServer } from 'http';
//     const server = createServer((req,res) =>{
//         console.log(req.url);
//         res.write("<h1>Welcome to the Homepage</h1>");
//         res.write("<p>This is a simple homepage created using Node.js</p>");
//         res.end();
//     });
//     server.listen(8000, "127.10.10.1", ()=> {