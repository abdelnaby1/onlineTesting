var con = require('../../config/connection');

module.exports ={
    save : (exam_listIds , processId , callback)=>{
        var sql  = "insert into online_test.exam_status (examId , process_id ,preference ) values";
        for (var x = 0; x < exam_listIds.length;x++)
        {
            if (x!=exam_listIds.length-1)
                sql+= "("+exam_listIds[x]+","+ processId+","+(x+1)+"),";
            else
                sql+= "("+exam_listIds[x]+","+ processId+","+(x+1)+")";
        }
        con.query(sql ,callback)
    },
    getExamStatusByProcessId : function (processId , callback) {
        con.query("select * from exam_status where process_id = ?" , [processId] , callback);
    },
    UpdateScore:function(examID,ProcessID,score,finishDate,callback){
        var query = "UPDATE online_test.exam_status SET score= '" + score +"' , isFinished='1' ,finishing_date ='"+finishDate+"' WHERE process_id= '"+ProcessID+"' and examId= '"+examID+"'";
        console.log(query);
        con.query(query,callback);
    },
    checkForAvailabilityToEnterExam:(pref , processId ,cp)=>{
        var sql = "select preference , isFinished from online_test.exam_status where process_id =? and preference < ?  and isFinished = 0";
        con.query(sql,[processId ,pref] , cp)
    }

};

