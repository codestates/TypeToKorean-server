const usersTable = require("../../models").users;

module.exports = {
  users: {
    get: async (req, res) => {
      //회원전체 정보
      let returnMessage = await usersTable.findAll();
      res.status(200).send(returnMessage);
    }
  },
  id: {
    get: async (req, res) => {  //회원 한명(id) 정보
        let sessionData = req.session;
        let userInfo = await usersTable.findAll({
          where: {
            email: sessionData.email
          }
        });
        res.status(200).send(userInfo[0]);
    }
  }
};