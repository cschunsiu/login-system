//require different module and assign to variables
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
const route = require('./app/route');

//use express middleware
app.use(express.static('public'));
//use body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
//set default directory for views and engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//use route
route(app);

//create server and listen to port
app.listen(port, () => console.log('Example app listening on port 8000!'))
