var con = require('../../config/connection');

module.exports={
    selectAllNotfications:function(userName,callback){
        var query ="select * from notifications where userName ='"+userName+"'";
        con.query(query,callback);
    },
    selectNotifcationDetails:function(userName,id,callback){
        var query ="select * from notifications where notfiID = '"+id+"' and userName = '"+userName+"'";
        con.query(query,callback);
    },
    save : function (title , from , body , userName , cb) {
        let sql = "insert into online_test.notification values (?,?,?,?)";
        con.query(sql , [title , from , body , userName] , cb)
    },
    getByUserName:function (userName ,cp) {
        con.query("select * from online_test.notification where userName = ?",[userName] ,cp);
    }
}