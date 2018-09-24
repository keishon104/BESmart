const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.listen(3000, function(){
  console.log('The server is officially running.');//print to the console
})
//app.get('/', (req, res) => res.send('We are the champions'))//print to the website

app.get('/', (req, res) => res.sendfile(__dirname+'/client/index.html'));//connects the backend towards the front end. make sure to plus the folder than contain the index.html

//sets view engine
app.use(express.static(__dirname+'/client'));
