// creates an object for the express module
 const express = require('express');

//helps set up your path system
const path = require('path');
//creating Routes
const  routes = require('/Users/steve/code/WEB1100/basic-node-js/routes/index');

//runs the express module
const app = express();

//setting my view engin, where you tell the server which version of your control they are you going to use 
app.set('view engine', 'ejs');

//this creates a static file server that allows clients to download individual files needes to run the application
app.use(express.static(path.join(__dirname, 'public')))

//home route 
app.get('/', routes.home);

//about route 
app.get('/about', routes.about);

//set up port for computer to listen too
app.listen(3000, () => console.log('app listening on port 3000'));