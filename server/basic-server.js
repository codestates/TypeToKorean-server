const express = require("express");
const http = require("http");

//Middleware
const cors = require("cors");
const morgan = require("morgan");
const parser = require("body-parser");

//Router
const router = require("./routes.js");

const app = express();
const port = 5000;

app.set("port", port); // Set app, 5000 port;
console.log('server is listen on',port);

app.use(morgan('dev'));
app.use(parser.json());
app.use(cors());

app.use('/', router);

app.get('/', (req, res) => {
  res.status(200).send('HelloWorld!, This is a TypeToKorean!');
});
  
  
  app.get('/test', async (req, res) => {
    res.json({ message: 'pass!' });
  });
  
  
  app.listen(app.get("port"));
  
  module.exports = app;


