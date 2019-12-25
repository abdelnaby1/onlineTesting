con = require("../../config/connection");

module.exports ={
    saveApplication : function (userName , positionId , CV , callback) {
        var sql = "INSERT INTO online_test.applicants " +
            "(user_name ,  positionId , CV ) VALUES (?,?,?)";
        con.query(sql ,[userName , positionId , CV ],callback)

    },
    getAllPositions : (callback)=>{
        let sql = "select * from online_test.student st inner join online_test.applicants app on st.user_name = app.user_name inner join online_test.position pos on app.positionId = pos.pid";
        con.query(sql , callback)
    }
};