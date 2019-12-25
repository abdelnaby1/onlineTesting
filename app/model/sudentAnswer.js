var con = require("../../config/connection");

module.exports={
    insertAnswer:function(studnetName,QuestionBody,AnswerBody,correct,examTitle,callback){
        var sql = 'insert into online_test.student_answer (studentName,questionBody,answerBody,correct,examTitle) values("'+studnetName+'","'+QuestionBody+'","'+AnswerBody+'","'+correct+'","'+examTitle+'")'
        console.log(sql);
        con.query(sql);
    },
    getByUserName:function (userName , cb) {
        con.query("select * from online_test.student_answer where studentName = ? " , [userName] ,cb);

    }
};