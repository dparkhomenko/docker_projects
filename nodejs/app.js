const express = require("express");
const PORT = 8000;
const HOST = '0.0.0.0';
const app = express();


app.get("/", function(req, res) {
    return res.send("Welcome! The application from docker is running!");
});

app.listen(PORT, HOST, function(){
    console.log(`The application running on http://${HOST}:${PORT}`);
});