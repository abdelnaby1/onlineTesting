var con = require('../../config/connection');

module.exports ={
   save : function (user_name , deadline , positionId , callback) {
       var sql = "insert into online_test.exams_process (user_name , deadline , positionId) VALUES (?,?,?)";
       con.query(sql , [user_name , deadline , positionId] , callback)
   },
    LastInsertedId : function (callback) {
       con.query("select last_insert_id()" , callback)
    },

    findById:(id , callback)=>{
       con.query("select * from online_test.exams_process ep inner join online_test.exam_status es on ep.epid = es.process_id and ep.epid= ?" , [id] , callback)
    }, getExams:function(processID,callback){
      var query= "select * from online_test.exams_process where epid ='"+processID+"'";
      con.query(query,callback);
  },
  getAllProcesses:(callback)=>{
      con.query("select * from online_test.exams_process" , callback)
}


}
