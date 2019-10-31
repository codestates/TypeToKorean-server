var db = require('../db');
//테이블 접근, 데이터 조작
//서버와 데이터베이스 관계

module.exports = {
  users: {
    get: function() {
      return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users', (err, result) => {
          // console.log("message get!!!")
          if (err) {
            reject(err);
          } else {
            resolve(result);
            // console.log("db안에서의 get 요청! ::", result);
          }
        });
      });
    },
    post: function(username, pw, created_at, email, phone) {
      // console.log("message post!!!")
      return new Promise((resolve, reject) => {
        db.query(
          `INSERT INTO users (username, pw, created_at, email, phone) 
          VALUES ("${username}", "${pw}", "${created_at}","${email}","${phone}")`,
          (err, result) => {
            if (err) {
              reject(err);
            } else {
              db.query(
                `SELECT * FROM users WHERE email="${email}"`,
                (err, result) => {
                  // console.log("message get!!!")
                  if (err) {
                    reject(err);
                  } else {
                    resolve(result);
                  }
                }
              );
            }
          }
        );
      });
    }
  },
  userId: {
    get: function(id) {
      return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM users WHERE id="${id}"`, (err, result) => {
          // console.log("message get!!!")
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    }
  },
  login: {
    post: function() {},
  },
  logout: {
    post: function() {},
  },
};


// //회원전체 정보 
//    let users = await models.users.get();
// //회원 한명(id) 정보
//    let user = await models.userId.get();
// //회원 가입
//    let users = await models.users.post(username, createdat, email, phone, image);
// //회원 로그인
//    let user = await models.login.post(username, pw);
// //회원 로그아웃
//    let user = await models.logout.post(username, pw);