const infoTable = require("../../models").typeInformation;
const usersTable = require("../../models").users;


module.exports = {
    data: {     
        get: async (req, res) => {            //유저의 상세정보     
            let sessionData = req.session;
            let userData = await usersTable.find({
                where:{ email: sessionData.email }
            });
            
            // console.log(userData.dataValues);
            let findUserId = userData.id;
            let findScore = await infoTable.findAll({
                where:{ userId: findUserId }
            })

            let findScoreData = [];
            for(let i=0; i<findScore.length; i++){
                findScoreData.push(findScore[i].dataValues);
            }
            console.log("findScoreData:::",findScoreData[0])
            
            let userProfile ={
                id: userData.dataValues.id,
                email: userData.dataValues.email,
                username: userData.dataValues.username,
                phone: userData.dataValues.phone,
                created_at: userData.dataValues.created_at,
                totalTime: 0,
                totalScore: 0,
                avgTypeSpeed: 0,
                bestTypeSpeed: 0,
                totalTypo: 0,
                avgTypo: 0,
            };
            // console.log("USERPRO:::",userProfile);
            for(let i=0; i<findScoreData.length; i++){
                userProfile.totalTime += findScoreData[i].totaltime;
                userProfile.totalScore += findScoreData[i].score;
                userProfile.avgTypeSpeed += findScoreData[i].typeSpeed;
                userProfile.totalTypo += findScoreData[i].typo;
                if(userProfile.bestTypeSpeed < findScoreData[i].typeSpeed){
                    userProfile.bestTypeSpeed = findScoreData[i].typeSpeed;
                }
            };
            userProfile.avgTypeSpeed = userProfile.avgTypeSpeed/findScoreData.length;
            userProfile.avgTypo = userProfile.totalTypo/findScoreData.length;

            res.status(200).send(userProfile);         

        }
    }
}