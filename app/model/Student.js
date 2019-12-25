con = require("../../config/connection");

const bcrypt = require('bcryptjs');

module.exports = {
    getAllStudents: function(callback) {
        con.query("SELECT * FROM student", callback)
    },
    getStudentById: function( id, callback) {
        console.log(id);
        con.query('SELECT * FROM online_test.student WHERE id = ?',[id], callback)
    },
    createStudent: function(name,email,password,phone, callback) {
        con.query(
            "INSERT INTO online_test.student" +
            " (user_name, email,password,phone_number)" +
            " VALUES ('"+name+"','"+email+"','"+password+"','"+phone+"')" , callback )
    },
    removeStudent: function(id, callback) {
        con.query('DELETE FROM  online_test.student WHERE id = ?',[id], callback)
    },
    findStudentByUserNameAndPassword : function(user_name , password , callback){
        con.query('SELECT * FROM  online_test.student WHERE user_name = ? AND password = ?',
            [user_name, password], callback)
    },

    findStudentByUserName : function(user_name  , callback){
        con.query('SELECT * FROM  online_test.student WHERE user_name = ?',
            [user_name], callback)
    },
    hashfun : (password)=>{
        return bcrypt.hashSync(password,10);
    },
    compare :(userPassword,hashPassword)=>{
        return bcrypt.compareSync(userPassword, hashPassword);
    },
    addCV:(cvPath,studentName,callback)=>{
        var query="UPDATE online_test.student SET CV= '" + cvPath +"' WHERE user_name= '"+studentName+"'"
        con.query(query,callback);
    },
    searchCandEmail:function(email,callback){
        var query = "select * from online_test.student where email = '"+email+"'" ;
        con.query(query,callback);
    },
    searchCandUserName:function(userName,callback){
        var query = "select * from online_test.student where user_name = '"+userName+"'" ;
        con.query(query,callback);
    },

};
