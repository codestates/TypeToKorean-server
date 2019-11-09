var router = require('express').Router();
const controllerUsers = require("./controller/users");
const controllerSign = require("./controller/signInAndOut");
const controllerLog = require("./controller/logInAndOut");
const controllerTypeInfo = require("./controller/typeInfo");
const controllerSample = require("./controller/sampleData");
const controllerProfile = require("./controller/profile");
const controllerStatistic = require("./controller/statistics");
const controllerBestUser = require("./controller/bestUserChart");


router.get('/users', controllerUsers.users.get);
router.get('/users/id', controllerUsers.id.get);
router.post('/signin', controllerSign.signin.post);
router.post('/signout', controllerSign.signout.post);
router.post('/login', controllerLog.logIn.post);
router.post('/logout', controllerLog.logOut.post);
router.get('/typeInformation', controllerTypeInfo.data.get);
router.get('/typeInformation/id', controllerTypeInfo.user.get);
router.post('/typeInformation/id', controllerTypeInfo.user.post);
router.get('/sample/short', controllerSample.dataSh.get);
router.get('/sample/shortEn', controllerSample.dataSh2.get);
router.get('/sample/long', controllerSample.dataLO.get);
router.get('/profile', controllerProfile.data.get);
router.get('/statistics', controllerStatistic.data.get);
router.get('/getBestUser', controllerBestUser.data.get);





module.exports = router;