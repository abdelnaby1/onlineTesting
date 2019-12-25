
var Exam_Process = require("../../model/Exam_process");
var jsonUtils = require("../../../config/json_utils");
var Exam_Status = require("../../model/Exam_Status");
var Student =  require("../../model/Student");
var Async = require('async');
var Sender = require("../SendingMail");
var question = require('../../model/Question');
var answer = require('../../model/Answer');
var exam = require('../../model/Exam');
var studnetAnswer = require('../../model/SudentAnswer');
var Authentication = async (req) => {

	if (!req.session.userName)
		return false;
	else
		return true;
}


module.exports ={
	ListExams:(req, res)=>{
		var user_name = req.param("user_name");
		var process_id = req.param("process_id");
		Exam_Process.findById(process_id , (err , result)=>{
			console.log(result);
			res.render("exam/examList" , {Process :result})
		});

	},
    approval : function (req , res) {
        var exam_listIds = req.body.exam_listIds.split("|");
        var UserNameAndPositionId = req.body.Ids.split("|");
        var user_name = UserNameAndPositionId[0];
        var position_id = UserNameAndPositionId[1];
        var deadline = req.body.deadline;

        var processId ;
        Exam_Process.save(user_name , deadline ,position_id , ()=>{
            Exam_Process.LastInsertedId(( err , result)=>{
                    Exam_Status.save(exam_listIds ,result[0]["last_insert_id()"],  ()=>{

                    });
            })
        });
        Exam_Process.LastInsertedId(( err , results)=>{
            var x = results [0]["last_insert_id()"];
            console.log(x);
            Student.findStudentByUserName(user_name , (err  , result)=>{
                var  To = result[0].email;
                let Subject = "Congratulation !! you are Accepted";
                let Body = "Hello Mr."+user_name+"\nhere is your exams that you should\n" +
                    " Take Respectly To To Full Acceptance\n ";
                Body+="http://localhost:3000/ListExams/"+user_name+"/"+x;
                Sender.SendMail(To , Subject , Body, res , "/hr/ListApplicants");
            });

        })



    },
    startExam: function (req, res, next) {
		
		var arr = req.url.split('/');
		var CondUserName = arr[2];
		var ProcessID = arr[3];
		var examID = arr[4];
		var deadline ,duration,examTitle;
		Exam_Process.getExams(ProcessID, (err, result) => {
			
			console.log(result)
			var arr = [];
			console.log(result)
			deadline=result[0].deadline;
			Async.waterfall([function a(callback) {
				exam.getExam(examID, (err, result) => {
					console.log(result)
					duration=result[0].Duration;
					examTitle=result[0].examTitle;
					callback(null, result)
				})
			},function A(amr,callback) {
					question.getQuestionRandom(examID, (err, result) => {
						arr.push(result);
						callback(null, result)
					})
				},
				function B(QUE, callback) {
					var arr2=[]
					QUE.forEach((element, index) => {
						answer.selectCorrectAnswer(element.qid, (err, result) => {
							arr2.push(result)
							if (index == QUE.length - 1) {arr.push(arr2);callback(null, QUE);}
						})
					})
				}, function C(QUE, callback) {
					var arr3 = []
					QUE.forEach((element, index) => {
						answer.selectWrongAnswer(element.qid, (err, result) => {
							arr3.push(result)
							if (index == QUE.length - 1) {arr.push(arr3);callback(null, arr);}
						})
					})
				}
			], function (err, result) {
				if(req.session.userName==CondUserName&&Authentication(req))
				     res.render('exam/exam', { "result": jsonUtils.encodeJSON(arr) ,"deadline":deadline,'duration':duration,'examTitle':examTitle,'CondUserName':CondUserName,'ProcessID':ProcessID,'examID':examID})
				 else
				     res.redirect('/login')
				})

		})
	
	
    },
    SaveAnswer:function(req,res,next){
        var QuestionBody=req.query.questioBody;
        var AnswerBody= req.query.answerBody;
        var studnetName=req.query.CondUserName;
        var correct=req.query.correct ;
        var examTitle=req.query.examTitle;
        
        studnetAnswer.insertAnswer(studnetName,QuestionBody,AnswerBody,correct,examTitle,null)
    },
	SaveScore:function(req,res,next){
		var score=req.query.score;
		var ProcessID=req.query.ProcessID ;
		var examID = req.query.examID;
		var finishDate = req.query.finishDate;
		var user_name = req.query.CondUserName;
		Student.findStudentByUserName(user_name , (err  , result)=>{
			var  To = result[0].email;
			let Subject = "On Fire Mr . "+ user_name + "Exam Scores";
			let Body = "Your Score is "+score +" Keep Going on the Next Exams\n\n\nGood Luck";
			Sender.SendMail(To , Subject , Body, res , "/profile");
			Notification.save(Subject , "HR" , Body , user_name,null);
		});
		ExamStatue.UpdateScore(examID,ProcessID,score,finishDate,null);

	},
	checkForAvailability:(req , res)=>{
		var pref = req.param('pref');
		var processId = req.param('pid');
		ExamStatue.checkForAvailabilityToEnterExam(pref ,processId,(err , result)=>{
			res.send(result);
		})

	}
}