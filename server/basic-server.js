const express = require("express");
const http = require("http");
const cors = require("cors");
const app = express();
const port = 5000;

console.log('server is listen on',port);

app.use(cors());

app.get("/", (req, res) => {    
    res.status(200).send("HelloWorld!, This is a TypeToKorean"); 
  });
  
  
  app.get('/test', async (req, res) => {
    res.json({ message: 'pass!' });
  });
  
  app.set("port", port);
  app.listen(app.get("port"));
  
  module.exports = app;


