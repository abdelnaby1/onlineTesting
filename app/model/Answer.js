var con = require('../../config/connection');

module.exports = {
    GetAllAnswers: function (callback) {
        con.query("select *  from answer",callback);
    },
    UpdateAnswer:function(Answerid,AnswerBody,correct,callback){
        var query = "UPDATE online_test.answer SET AnswerBody= '" + AnswerBody +"' , correct= '"+correct+"' WHERE aid= '"+Answerid+"'";
        con.query(query,callback);
    },
    DeleteAnswer:function(id,callback){
        var query = "DELETE FROM online_test.answer WHERE aid = "+id;
        con.query(query,callback);
    },
    insertAnswerBasedOnQuestionID:function(QuestionBody,AnswerBody,correct,callback){
        var query= "insert into online_test.answer (AnswerBody,correct,qid) select '"+AnswerBody + "' , '"+correct+"' , qid from online_test.question where questionBody= '"+QuestionBody+"'";
        con.query(query,callback);
    },
    insertAnswer:function(QuestionBody,AnswerBody,correct,callback){
        var query =  "insert into online_test.answer (AnswerBody,correct,qid) values ('"+AnswerBody+"','"+correct+"','"+QuestionBody+"')";
        con.query(query,callback);
    },
    selectWrongAnswer:function(questionID,callback){
       
        var query = "SELECT * FROM online_test.answer where qid ='" + questionID + "'and correct = '0' ORDER By RAND() LIMIT 3";
        con.query(query,callback);
    },    
    selectCorrectAnswer:async function (questionID,callback){
        var query = "SELECT * FROM online_test.answer where qid ='" + questionID + "'and correct = '1' ORDER By RAND() LIMIT 1";
        con.query(query,callback)
    }
};