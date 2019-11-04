var router = require('express').Router();
const controllerUsers = require("./controller/users");
const controllerSign = require("./controller/signInAndOut");
const controllerLog = require("./controller/logInAndOut");
const controllerTypeInfo = require("./controller/typeInfo");


router.get('/users', controllerUsers.users.get);
router.get('/users/id', controllerUsers.id.get);
router.post('/signin', controllerSign.signin.post);
router.post('/signout', controllerSign.signout.post);
router.post('/login', controllerLog.logIn.post);
router.post('/logout', controllerLog.logOut.post);
router.get('/typeInformation', controllerTypeInfo.data.get);
router.get('/typeInformation/id', controllerTypeInfo.user.get);
router.post('/typeInformation/id', controllerTypeInfo.user.post);


// router.get('/profile', controller.profile.get);
// //로그인을 한 회원의 상세 정보
// router.get('/statistics', controller.statistics.get);
// //전체 통계 값


module.exports = router;