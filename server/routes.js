var router = require('express').Router();
var controller = require('./controllers');

router.get('/users', controller.users.get);
//회원전체 정보 
router.get('/users/id', controller.userId.get);
//회원 한명(id) 정보
router.post('/users', controller.users.post);
//회원 가입
router.post('/login', controller.login.post);
//회원 로그인
router.post('/logout', controller.logout.post);
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