const express = require("express");

const app = express();

app.use(express.static('public'));

app.get("/about", (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
});

app.get("/work", (request, response, next) => {
    response.sendFile(__dirname + '/views/work.html')
});

app.get("/home",(request, response, next) => {
    response.sendFile(__dirname + '/views/home.html')
});




app.listen(3017, () => console.log("yey its working!"))