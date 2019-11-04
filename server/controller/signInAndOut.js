const usersTable = require("../../models").users;
const crypto = require("crypto");

module.exports = {
  signin: {    //회원 가입
    post: async (req, res) => {
      // console.log("message post!!!")
      let body = req.body;
      console.log('req.body : ', body);

      let userExistMessage = await usersTable.findAll({
        where: { email: body.email }
      });

      if (userExistMessage[0]) {
        return res.status(400).send('Same E-MAIL EXIST');
      }

      await usersTable.create({
        email: body.email,
        username: body.username,
        pw: body.pw,
        phone: body.phone,
        created_at: body.created_at
      });
      let returnMessage = await usersTable.findAll({
        where: { email: body.email }
      });
      res.status(200).send(returnMessage[0]);
    }
  },
  signout: {    //회원 탈퇴
    post: async (req, res) => {
      let body = req.body;

      let hashPass = body.pw;
      var shasum = crypto.createHash('sha1');
      shasum.update(hashPass);
      hashPass = shasum.digest('hex').slice(0, 5);

      let findUser = await usersTable.findAll({
        where: { email: body.email }
      });

      if (!findUser[0]) { //not user
        res.status(400).send('UserNotFound');
      }

      let findUserAndPassword = await usersTable.findAll({
        where: {
          email: body.email,
          pw: hashPass
        }
      });

      if (!findUserAndPassword[0]) { //password error!
        return res.status(400).send('Wrong Access');
      }

      if (findUserAndPassword[0].dataValues.pw === hashPass) { //right access
        let removeUser = await usersTable.destroy({
          where: {
            email: body.email,
            pw: hashPass
          }
        });
        res.status(200).send("This user's data removed");
      }
    }
  }
};