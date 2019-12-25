var exams = require("../../model/exam");

var listExams=(req,res,next)=>{
    exams.GetAllExams((err,result)=>{
        res.render("hr/ExamManager" ,{results:result})

    })
};
var listExamsV2=(req,res,next)=>{
    exams.GetAllExams((err,result)=>{
        res.send(result);
    })
};

var examDetails= (req,res,next)=>{
    exams.ExamWithQ_A(req.param("id"),(err,result)=>{
        res.send(result)
    })
}
var CreateExam=(req,res,next)=>{
    exams.insertExam(req.body.ExamTitle,req.body.ExamDuration,(err,result)=>{
        if(err)
            res.send(err)
        else
            res.redirect("/hr/hrDashboard/listExams");
    })

};
var deleteExam=(req,res,next)=>{
    var id=req.param("id");
    exams.DeleteExam(id,(err,result)=>{
        res.redirect("/hr/hrDashboard/listExams");
    })
}
var updateExam = (req,res,next)=>{
    var id=req.body.ID;
    var Examtitle=req.body.Examtitle;
    var ExamDuration=req.body.ExamDuration;

    exams.UpdateExam(id,Examtitle,ExamDuration,(err,result)=>{
        if(err||result.affectedRows==0)
            res.send(err)
        else
            res.redirect("/hr/hrDashboard/listExams");

    })
}

module.exports ={
    listExams:listExams,
    examDetails:examDetails,
    CreateExam:CreateExam,
    deleteExam:deleteExam,
    updateExam:updateExam,
    listExamsV2:listExamsV2
}