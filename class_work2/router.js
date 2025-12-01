// main router file
const express = require("express");
const app = express();

app.use(express.json());         // Required for POST data

const studentRoutes = require("./studrecord");
app.use("/student", studentRoutes);

app.listen(3000, () => {
    console.log("Server running at port 3000");
});