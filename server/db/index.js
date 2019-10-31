var mysql = require('mysql');

// node js 와 mysql 연동 ==> create connection 메소드
// db와 연결

let dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'typeToKorean'
});

dbConnection.connect();

module.exports = dbConnection;