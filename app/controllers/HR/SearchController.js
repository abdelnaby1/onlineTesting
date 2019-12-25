var candidate = require("../../model/Student")
var exams = require("../../model/exam");
var Question  = require("../../model/Question");
var searchExamTitle = (req,res,next)=>{
    var title = req.query.searchQuery;
    exams.searchExamTitle(title,(err,result)=>{
        if(err) throw err ;
        res.send(result);
    })
}

var serachExamDuration = (req,res,next)=>{
    var Duration = req.query.searchQuery;
    exams.searchExamDuration(Duration,(err,result)=>{
        if(err) throw err ;
        res.send(result);
    })

}
var searchExamQuestion=(req,res,next)=>{
    var questionBody =req.query.searchQuery;
    console.log(questionBody)
    console.log("///")

    Question.seacrhExamQuestion(questionBody,(err,result)=>{
        console.log(err)
        console.log(result)
        res.send(result)
    })
}




var searchCanEmail=(req,res,next)=>{
    console.log(req.query.searchQuery);
    var email = req.query.searchQuery;
    candidate.searchCandEmail(email,(err,result)=>{
        if(err) throw err ;
        res.send(result);
    })
}
var searchCandUserName=(req,res,next)=>{
    var userName = req.query.searchQuery ;

    candidate.searchCandUserName(userName,(err,result)=>{
        if(err) throw err ;
        res.send(result);
    })
}

module.exports = {
    searchCandUserName : searchCandUserName,
    searchCanEmail : searchCanEmail,
    searchExamQuestion : searchExamQuestion,
    serachExamDuration : serachExamDuration,
    searchExamTitle:searchExamTitle
}