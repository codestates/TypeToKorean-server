const infoTable = require("../../models").typeInformation;
const usersTable = require("../../models").users;

module.exports = { 
    data: {   // 회원 전체의 typeInfoId, typeSpeed, userId 
        get: async (req, res) => { 
            
            let infoData = await infoTable.findAll({
                attributes: ["id","typeSpeed","userId"]
            });

            console.log("info:::", infoData[0])

            res.status(200).send(infoData);

        }
    }
}