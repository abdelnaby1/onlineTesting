var Position = require("../../model/Position");

var create = function(request , response){
    response.render("hr/createFormForNewPosition")
};
var store = function(request , response){
    var title = request.body.title;
    var availability= request.body.availability;
    var description = request.body.description;
    Position.savePosition(title,description,availability,(err, result)=> {
        if (err) throw err;
        response.redirect("/HR/hrDashboard");
    });

};

module.exports = {
    store : store,
    create : create
};