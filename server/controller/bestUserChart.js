const infoTable = require("../../models").typeInformation;
const usersTable = require("../../models").users;

module.exports = {
  data: {
    get: async (req, res) => {  // 차트에서 제일 높은 순위

        let numberOfUsers = await usersTable.findAll({
            attributes: ["id","username"]
        })

        let userProfile = new Array(numberOfUsers.length);

        for(let i=0; i< numberOfUsers.length; i++){
            let findUserId = i+1;
            let findScore = await infoTable.findAll({
                where:{ userId: findUserId }
            })
    
            let findScoreData = [];
            for(let i=0; i<findScore.length; i++){
                findScoreData.push(findScore[i].dataValues);
            }
          
            
            userProfile[i] ={
                id: findUserId,
                username: numberOfUsers[i].dataValues.username,
                totalTime: 0,
                totalScore: 0,
                avgTypeSpeed: 0,
                bestTypeSpeed: 0,
                totalTypo: 0,
                avgTypo: 0,
            };
          
            for(let j=0; j<findScoreData.length; j++){
                userProfile[i].totalTime += findScoreData[j].totaltime;
                userProfile[i].totalScore += findScoreData[j].score;
                userProfile[i].avgTypeSpeed += findScoreData[j].typeSpeed;
                userProfile[i].totalTypo += findScoreData[j].typo;
                if(userProfile[i].bestTypeSpeed < findScoreData[j].typeSpeed){
                    userProfile[i].bestTypeSpeed = findScoreData[j].typeSpeed;
                }
            };
            userProfile[i].avgTypeSpeed = userProfile[i].avgTypeSpeed/findScoreData.length;
            userProfile[i].avgTypo = userProfile[i].totalTypo/findScoreData.length;

        }
        console.log("userProfile::::", userProfile);

        let users = {
            bestTypeSpeed: {
              firstUser: '',
              firstSpeed: 0,
              secondUser: '',
              secondSpeed: 0,
              thirdUser: '',
              thirdSpeed: 0,
            },
            bestTypo: {
              firstUser: '',
              first: 999,
              secondUser: '',
              second: 999,
              thirdUser: '',
              third: 999,
            }          
          };

        for(let i=0; i<userProfile.length; i++){
            if(userProfile[i].avgTypeSpeed > users.bestTypeSpeed.firstSpeed){
                users.bestTypeSpeed.thirdSpeed = users.bestTypeSpeed.secondSpeed;
                users.bestTypeSpeed.thirdUser = users.bestTypeSpeed.secondUser;
                users.bestTypeSpeed.secondSpeed = users.bestTypeSpeed.firstSpeed;
                users.bestTypeSpeed.secondUser = users.bestTypeSpeed.firstUser;
                users.bestTypeSpeed.firstSpeed = userProfile[i].avgTypeSpeed;
                users.bestTypeSpeed.firstUser = userProfile[i].username;                                
            }else if(userProfile[i].avgTypeSpeed > users.bestTypeSpeed.secondSpeed){
                users.bestTypeSpeed.thirdSpeed = users.bestTypeSpeed.secondSpeed;
                users.bestTypeSpeed.thirdUser = users.bestTypeSpeed.secondUser;
                users.bestTypeSpeed.secondSpeed = userProfile[i].avgTypeSpeed;
                users.bestTypeSpeed.secondUser = userProfile[i].username;  
            }else if(userProfile[i].avgTypeSpeed > users.bestTypeSpeed.thirdSpeed){
                users.bestTypeSpeed.thirdSpeed = userProfile[i].avgTypeSpeed;
                users.bestTypeSpeed.thirdUser = userProfile[i].username;
            };

            if(userProfile[i].avgTypo < users.bestTypo.first){
                users.bestTypo.third = users.bestTypo.second;
                users.bestTypo.thirdUser = users.bestTypo.secondUser;
                users.bestTypo.second = users.bestTypo.first;
                users.bestTypo.secondUser = users.bestTypo.firstUser;
                users.bestTypo.first = userProfile[i].avgTypo;
                users.bestTypo.firstUser = userProfile[i].username;                                
            }else if(userProfile[i].avgTypo < users.bestTypo.second){
                users.bestTypo.third = users.bestTypo.second;
                users.bestTypo.thirdUser = users.bestTypo.secondUser;
                users.bestTypo.second = userProfile[i].avgTypo;
                users.bestTypo.secondUser = userProfile[i].username;  
            }else if(userProfile[i].avgTypo < users.bestTypo.third){
                users.bestTypo.third = userProfile[i].avgTypo;
                users.bestTypo.thirdUser = userProfile[i].username;
            };
        }
        console.log("users::::", users)


        res.status(200).send(users)
    }
  }
};