

module.exports = {
    users: {
        get: async (res, req) => { 
            let totalUserData = await  usersTable.findAll();
            let totalUser = totalUserData.length;
            let totalStatistics = function(){
                for(let i=0; i<totalUser; i++){
                                   
                }
            }


        }
    }
}