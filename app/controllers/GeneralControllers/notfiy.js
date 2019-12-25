var notify = require('../../model/Notifications');
module.exports={
    selectAllNotify:function(req,res,next){
        console.log(req.session.userName)
        notify.selectAllNotfications(req.session.userName,(err,result)=>{
            console.log("notify")
            if(err) throw err;
           
            res.send(result);
        })
    },
    selectSpecificNotify:function(req,res,next){
        var Nafigationid = req.query.id ;
        console.log(req.query.id)
        notify.selectNotifcationDetails(req.session.userName,Nafigationid,(err,result)=>{
            if(err) throw err;
            
            res.send(result);
        })
    }
}