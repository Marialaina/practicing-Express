//loading express
const express = require('express');

//Creating the express app
const app = express();

//require the todo "database"
const todoDb = require(`./data/todo-db`);

console.log(todoDb)
app.set("view engine", "ejs");
//Define a "root" route directly on app
//app.get is a method (function)
app.get('/', function(req, res){
    res.redirect('/home');
});

app.get(`/home`, function(req, res){
    res.render('home');
})

//adding a new route for to-do

app.get('/todos', (req, res) => {
    res.render(`todos/index`, {
        todos: todoDb.getAll()
    })
})

console.log(todoDb)
//Tell the app to listen on port 3000
//for HTTP requests from clients
app.listen(3000, () => {
    console.log('Listening on port 3000');
});
