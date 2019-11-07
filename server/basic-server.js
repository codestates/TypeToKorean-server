const http = require('http');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const parser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = require('./routes.js');
const app = express();
const port = 5000;
const session = require('express-session');
//db access => use sequelize
// const db = require('./db');

app.set('port', port); // Set app, 5000 port;
console.log('server is listen on', port);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
app.use(
  cors({
    credentials: true,
  }),
);

app.use(
  session({
    key: 'b6',
    secret: '@typeToKorean',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60,
    },
  }),
);

app.use('/', router);

app.get('/', (req, res) => {
  res.status(200).send('HelloWorld!, This is a TypeToKorean!');
});

app.get('/test', async (req, res) => {
  res.json({ message: 'pass!' });
});

app.listen(app.get('port'));

module.exports = app;
