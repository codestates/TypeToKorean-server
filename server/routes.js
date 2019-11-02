var router = require('express').Router();
const usersTable = require("../models").users;
const typeInformation = require("../models").urls;
const crypto = require("crypto");


router.get('/users', async (req, res) => {     //회원전체 정보 
  let returnMessage = await usersTable.findAll();
  res.status(200).send(returnMessage);
});

router.get('/users/id', async (req, res) => {  //회원 한명(id) 정보
  let sessionData = req.session;
  let userInfo = await usersTable.findAll({
    where: {
      email: sessionData.email
    }
  });
  res.status(200).send(userInfo[0]);
});


router.post('/users', async (req, res) => {   //회원 가입
  // console.log("message post!!!")
  let body = req.body;
  console.log('req.body : ', body);
  await usersTable.create({
    email: body.email,
    username: body.username,
    pw: body.pw,
    phone: body.phone,
    created_at: body.created_at
  });
  let returnMessage = await usersTable.findAll({
    where: {
      email: body.email,
    }
  });
  res.status(200).send(returnMessage[0]);
});


router.post('/login', async (req, res) => {  // 회원 로그인

  let body = req.body;
  let sess = req.session;
  
  let hashPass = body.pw;
  var shasum = crypto.createHash("sha1");
  shasum.update(hashPass);
  hashPass = shasum.digest("hex").slice(0, 5);
  

  let findUser = await usersTable.findAll({
    where: {
      email: body.email
    }
  });
  console.log("findUser :::",findUser)

  if(!findUser[0]){
    res.status(400).send("UserNotFound");
  }


  let findUserAndPassword = await usersTable.findAll({
    where: {
      email: body.email,
      pw: hashPass
    }
  });
  console.log("fuap",findUserAndPassword);
 
  if(!findUserAndPassword[0]) {
    return res.status(400).send("Wrong Access")
  }

  if (findUserAndPassword[0].dataValues.pw === hashPass) {
    sess.email = body.email;
    let userData = {};
    userData["id"] = findUserAndPassword[0].dataValues.id;
    userData["username"] = findUserAndPassword[0].dataValues.username;
    userData["image"] = findUserAndPassword[0].dataValues.image;
    // db에서 id, username, image 제공
    res.status(200).send(userData);
    console.log("sesschange", sess);
  }

 
});

router.post('/logout', async (req, res) => {  //회원 로그아웃
  let sess = req.session;
  if (sess.email) {
    req.session.destroy(function(err) {
      if (err) {
        console.log('Please check whether you logged in or not.', err);
      } else {
        console.log('OK');
        res.redirect('/');
      }
    });
  } else {
    console.log('!sess.email');
    res.redirect('/');
  }
});

// router.get('/typeInformation', controller.typeInformation.get);
// //회원의 타자정보
// router.post('/typeInformation', controller.typeInformation.post);
// //회원의 타자정보 추가
// router.get('/profile', controller.profile.get);
// //로그인을 한 회원의 상세 정보
// router.get('/statistics', controller.statistics.get);
// //전체 통계 값


module.exports = router;