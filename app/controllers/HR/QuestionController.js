var Question = require("../../model/Question");
var Answer = require("../../model/Answer");

var CreateQuestion=(req,res,next)=>{
    var examID=req.body.examID;
    var QuestionBody=req.body.QuestionBody;
    var AnswerBody= req.body.AnswerBody;
    var Correct=req.body.Correct;
    Question.insertQuestion(examID,QuestionBody,(err,result)=>{
        Question.insertAnswerBasedOnQuestionID(QuestionBody,AnswerBody, Correct,null);
        if(err)
            res.send('0');
        else
            res.send('1');
    })
};
var updateQuestion=(req,res,next)=>{
    id=req.body.ID;
    oldQuestionID=req.body.oldQuestionID;
    newQuestion=req.body.newQuestion;
    Question.UpdateQuestion(id,oldQuestionID,newQuestion,(err,result)=>{
        if(err||result.affectedRows==0)
            res.send('0');
        else
            res.send('1');
    })
};
var deleteQuestion=(req,res,next)=>{
    oldQuestionID=req.body.oldQuestionID;
    Question.DeleteQuestion(oldQuestionID,(err,result)=>{
        if(err||result.affectedRows==0)
            res.send('0');
        else
            res.send('1');
    })
};
var createAnswer=(req,res,next)=>{
    var AnswerBody = req.body.AnswerBody ;
    var Correct =req.body.Correct;
    var QuestionID = req.body.questionID;

    Answer.insertAnswer(QuestionID,AnswerBody,Correct,(err,result)=>{
        if(err||result.affectedRows==0)
            res.send('0');
        else
            res.send('1');
    })
};
var deleteAnswer=(req,res,next)=>{
    var id=req.body.ID;
    Answer.DeleteAnswer(id,(err,result)=>{
        if(err||result.affectedRows==0)
            res.send('0');
        else
            res.send('1');
    })
};
var updateAnswer=(req,res,next)=>{
    var Answerid=req.body.ID;
    var AnswerBody=req.body.AnswerBody;
    var correct =req.body.correct;
    Answer.UpdateAnswer(Answerid,AnswerBody,correct,(err,result)=>{
        if(err||result.affectedRows==0)
            res.send('0')
        else
            res.send('1')
    });
};

module.exports = {
    CreateQuestion:CreateQuestion,
    deleteQuestion:deleteQuestion,
    deleteAnswer:deleteAnswer,
    updateQuestion:updateQuestion,
    createAnswer:createAnswer,
    updateAnswer:updateAnswer,
}
