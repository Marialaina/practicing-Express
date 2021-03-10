//loading express
const express = require('express');

//Creating the express app
const app = express();

//Define a "root" route directly on app
//app.get is a method (function)
app.get('/', function(req, res){
    res.send('<h1> Hello Marialaina! </h1>');
});

app.get(`/home`, function(req, res){
    res.send(`<h1> Home Page </h1>`);
})

//Tell the app to listen on port 3000
//for HTTP requests from clients
app.listen(3000, () => {
    console.log('Listening on port 3000');
});
