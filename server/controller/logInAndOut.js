const usersTable = require("../../models").users;
const crypto = require("crypto");

module.exports = {
  logIn: {  // 회원 로그인
    post: async (req, res) => {     

      let body = req.body;
      let sess = req.session;
      let timeCheck = new Date().toString();
      console.log("timeCheck :::", timeCheck);

      let hashPass = body.pw;
      var shasum = crypto.createHash('sha1');
      shasum.update(hashPass);
      hashPass = shasum.digest('hex').slice(0, 5);

      let findUser = await usersTable.findAll({
        where: { email: body.email }
      });

      if (!findUser[0]) {     //not user
        res.status(400).send('UserNotFound');
      }

      let findUserAndPassword = await usersTable.findAll({
        where: {
          email: body.email,
          pw: hashPass
        }
      });
      console.log('fuap', findUserAndPassword);

      if (!findUserAndPassword[0]) {         //password error!
        return res.status(400).send('Wrong Access');
      }

      if (findUserAndPassword[0].dataValues.pw === hashPass) {      //right access
        sess.email = body.email;
        let userData = {};
        userData['id'] = findUserAndPassword[0].dataValues.id;
        userData['username'] = findUserAndPassword[0].dataValues.username;
        userData['image'] = findUserAndPassword[0].dataValues.image;
        // db에서 id, username, image 제공
        res.status(200).send(userData);
      }
    }
  },

  logOut: {     //회원 로그아웃
    post: async (req, res) => {
      let sess = req.session;
      let logOutLately = new Date();
      
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
    }
  }
};