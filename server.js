const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.listen(3000, function(){
  console.log('The server is officially running.');
})
