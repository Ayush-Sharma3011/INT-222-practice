const fs = require("fs");
const path = require("path");
const filename = "async.txt";
const filepath = path.join(__dirname,filename);
fs.writeFile(filepath,"this is async file","utf-8",(err)=>{
    if(err) console.error(err);
    else console.log("file has been created");
});

const readfile = fs.readFile(filepath,"utf-8",(err,data)=>{
    if(err) console.error(err);
    else {
        console.log("file has been read\n"+data);
        // second method to read file without encoding using toString function , no need to give encoding "utf-8"
        // console.log(data.toString());

    };
});

// UTF full form Unicode transform function
// append update file
fs.appendFile(filepath,"\nthis is appended data","utf-8",(err)=>{
     if(err) console.error(err);
        else console.log("file has been appended");
 });

//  // delete file 
//  fs.unlink(filepath,(err)=>{
//      if(err) console.error(err);
//      else console.log("file has been deleted");
//  });


