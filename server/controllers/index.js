var models = require('../models');

controller = {
  users: {
    get: async function(req, res) {
      //회원 전체 정보
      let users = await models.users.get();
      // console.log("서버 쪽에서의 users :", users);
      res.send(users);
      /*서버와 클라이언트 간의 통신 
      서버에서 get 요청에 따라 db의 데이터를 가져온다.(models)를 이용  */
    },
    post: async function(req, res) {
      //회원 가입
      const { username, pw, created_at, email, phone} = req.body;
      let users = await models.users.post(
        username,
        pw,
        created_at,
        email,
        phone
      );
      // console.log("서버쪽에서의 user post", users) ;
      res.send(users);
    }
  },
  userId: {
    //회원 한명(id) 정보
    get: async function(req, res) {
      let user = await models.userId.get();
      // console.log("서버 쪽에서의 userId :", userId);
      res.send(user);
    }
  },
  login: {
    post: async function(req, res) {
      //회원 로그인
      const { email, pw } = req.body;
      let user = await models.login.post(username, pw);
      // console.log("서버쪽에서의 login", login) ;
      res.send(user);
    }
  },
  logout: {
    post: async function(req, res) {
      //회원 로그 아웃
      const { email, pw } = req.body;
      let user = await models.logout.post(username, pw);
      // console.log("서버쪽에서의 login", login) ;
      res.send(user);
    }
  },
};

module.exports = controller;


// router.get('/typeInformation', controller.typeInformation.get);
// //회원의 타자정보
// router.post('/typeInformation', controller.typeInformation.post);
// //회원의 타자정보 추가
// router.get('/profile', controller.profile.get);
// //로그인을 한 회원의 상세 정보
// router.get('/statistics', controller.statistics.get);
// //전체 통계 값