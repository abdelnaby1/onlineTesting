var Student = require("../../Model/Student");
var Position = require("../../model/Position");
var Applicant = require("../../model/Applicants");
var formidable = require('formidable');
//http://localhost:3000/startExam/admin/9/1
const fs = require('fs-extra');

var Authentication = async (req, res) => {

	if (!req.session.userName && req.session.type==null)
		return false;
	else
		return true;
}

module.exports = {
	signupGet: (req, res, next) => {
		req.session.destroy();
		res.render('user/userSignUp', { title: 'Sign Up' });
	},
	signupPost: (req, res, next) => {
		var password = Student.hashfun(req.body.password);
		var name = (req.body.first_name).split("@")[0];
		var email=req.body.first_name;
		var phone=req.body.phone_number;
		Student.createStudent(name,email,password,phone, function (err) {
			if (err) throw err;
			req.session.userName = req.body.name;
			res.redirect("/profile");
		});
	},
	loginPost: (req, res, next) => {
		var username = req.body.userName;
		var x = Student.findStudentByUserName(username, (err, result) => {
			console.log(result)
			if (result.length == 1 && Student.compare(req.body.password, result[0].password)) {
				console.log("amr")
				req.session.userName = username;
				req.session.studentId = result[0].id;
				if(result[0].type != 1){
					res.redirect('/profile');
				}
				else {
					req.session.type = result[0].type;
					res.redirect('/hr/hrDashboard');
				}
			}
			else
				res.redirect('/login')
		});
	},
	loginGet: (req, res, next) => {
		req.session.destroy();
		res.render('user/login', { title: 'Login' })
	},
	showProfile: async (req, res, next) => {

		if (await Authentication(req, res)) {
			Position.getAllPositions(function (err, results) {
				res.render("user/profile", {
					username: req.session.userName,
					positions: results

				});
			});
		}
		else
			res.redirect('/login')
		//Authentication(req,res).then(res.send('Welcome back, ' + req.session.userName + '!'));
	},

	uploadCV:async function (req, res, next) {
		console.log(req.body);
		if (await Authentication(req, res)) {
			var form = new formidable.IncomingForm();
			form.parse(req, function (err, fields, files) {
				var posId = fields.posId;
				var title = fields.title;
				var oldpath = files.filetoupload.path;
				var newpath = 'C:/Users/Alaa Salem/Desktop/New folder/OnlineTest-Final-Version/public/CVS/' + req.session.userName +"_"+title+".pdf";
				var absPath = req.session.userName +"_"+title.trim()+".pdf";
				fs.removeSync(newpath, null);
				console.log(fields.posId)
				fs.move(oldpath, newpath, function (err) {
					if (err) throw err;
					 	Applicant.saveApplication(req.session.userName , posId , absPath ,null);
				});
				res.redirect("/profile");
			})
		}
	},

	checkUserName:function(req,res,next){
		var userName = req.query.userName ;
		console.log(userName[0])
		Student.searchCandUserName(userName[0], (err, result) => {
			if (err) throw err;
			console.log(result)
			if (result.length == 0)
				res.send('1');
			else
				res.send('0');
		})
	},
};