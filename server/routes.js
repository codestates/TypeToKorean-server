var router = require('express').Router();
const usersTable = require("../models").users;
const typeInformation = require("../models").urls;
const crypto = require("crypto");


router.get('/users', async (req, res) => {     //회원전체 정보 
    let returnMessage = await usersTable.findAll();
    res.status(200).send(returnMessage);
});

// router.get('/users/id', controller.userId.get);
//회원 한명(id) 정보

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
  console.log("body :",body);
  console.log("sess", sess);
  let hashPass = body.pw;
  var shasum = crypto.createHash("sha1");
  shasum.update(hashPass);
  hashPass = shasum.digest("hex").slice(0, 5);
  console.log("크립토암호화:",hashPass)

  let findUserAndPassword = await usersTable.findAll({
    where: {
      email: body.email,
      pw: hashPass
    }
  });
  console.log("fuap",findUserAndPassword);
  let findUser = await usersTable.findAll({
    where: {
      email: body.email
    }
  });

  if (!findUser) {
    // USERNAME NOT FOUND
    res.status(200).send("USERNAME NOT FOUND");
  }

  if (findUserAndPassword[0].dataValues.pw === hashPass) {
    sess.email = body.email;
    let userId = { id: findUserAndPassword[0].dataValues.id };
    res.status(200).send(userId);
    console.log("sesschange", sess);
  } else {
    // req.id 랑 pw가 다른 경우
    res.status(200).send("Wrong Access");
  }
});
//회원 로그인
// router.post('/logout', controller.logout.post);
//회원 로그아웃
// router.get('/typeInformation', controller.typeInformation.get);
// //회원의 타자정보
// router.post('/typeInformation', controller.typeInformation.post);
// //회원의 타자정보 추가
// router.get('/profile', controller.profile.get);
// //로그인을 한 회원의 상세 정보
// router.get('/statistics', controller.statistics.get);
// //전체 통계 값


module.exports = router;