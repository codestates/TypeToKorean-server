const infoTable = require("../../models").typeInformation;
const usersTable = require("../../models").users;


module.exports = {
  data: {
    get: async (req, res) => {
      //전체의 타자정보
      let usersInfo = await infoTable.findAll();
      res.status(200).send(usersInfo);
    }
  },
  user: {
    get: async (req, res) => {
      //회원의 타자 정보 받기
      let sessionData = req.session;
      let userdata = await usersTable.find({
        where: { email: sessionData.email }
      });
      console.log('user :::', userdata.dataValues);
      let userInfo = await infoTable.findAll({
        where: { userId: userdata.dataValues.id }
      });
      return res.status(200).send(userInfo);
    },
    post: async (req, res) => {
      // 회원의 타자 정보 입력
      let body = req.body;
      let sessionData = req.session;
      console.log("session :::", sessionData);
      let user = await usersTable.find({
        where: { email: sessionData.email }
      });
      console.log('user :::', user);

      if (user) {
        let createInfo = await infoTable.create({
          typeSpeed: body.typeSpeed,
          score: body.score,
          typo: body.typo,
          totaltime: body.totaltime,
          userId: user.dataValues.id
        });
        let returnInfo = await infoTable.findAll({
          where: { userId: user.dataValues.id }
        });
        return res.status(200).send(returnInfo[returnInfo.length - 1]);
      }

      let customer = await usersTable.find({
        where: { email: "customer99" }
      });

      if (customer) {
        let createInfo = await infoTable.create({
          typeSpeed: body.typeSpeed,
          score: body.score,
          typo: body.typo,
          totaltime: body.totaltime,
          userId: customer.dataValues.id
        });
        let returnInfo = await infoTable.findAll({
          where: { userId: customer.dataValues.id }
        });
        return res.status(200).send(returnInfo[returnInfo.length - 1]);
      }

      let makingCustomer = await usersTable.create({
        email: "customer99",
        username: "손님",
        pw: "1111"
      });

      let createInfo = await infoTable.create({
        typeSpeed: body.typeSpeed,
        score: body.score,
        typo: body.typo,
        totaltime: body.totaltime,
        userId: customer.dataValues.id
      });
      let returnInfo = await infoTable.findAll({
        where: { userId: customer.dataValues.id }
      });
      return res.status(200).send(returnInfo[returnInfo.length - 1]);
    }
  }
};