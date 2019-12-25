var express = require('express');
var router = express.Router();

var user = require("../app/controllers/user/UserController")
var ExamProcessController = require("../app/controllers/GeneralControllers/ExamProcessController");
var notify = require('../app/controllers/GeneralControllers/notfiy');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', user.loginGet);
router.post('/login', user.loginPost);



router.get('/signup',user.signupGet);
router.post('/signup',user.signupPost);

router.get('/profile',user.showProfile);

router.post("/fileupload" , user.uploadCV);

router.get('/checkUserName',user.checkUserName);



router.get("/ListExams/:user_name/:process_id" , ExamProcessController.ListExams);
router.get('/startExam/:canName/:processID/:examid',ExamProcessController.startExam);
router.get('/SaveAnswer',ExamProcessController.SaveAnswer);
router.get('/SaveScore',ExamProcessController.SaveScore);
router.get('/checkForAvailability/:pid/:pref',ExamProcessController.checkForAvailability);


router.get('/notifcation',notify.selectAllNotify)
router.get('/notifcationDetails',notify.selectSpecificNotify)



module.exports = router;
