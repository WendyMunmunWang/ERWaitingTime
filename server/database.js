//mysql -u root -h 127.0.0.1 -p
//use that to log in
var mysql  = require('mysql');
var express  = require('express');
var app = express();
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '639288',
  database : 'ERWaitingTime'})
connection.connect(function(err){
if(!err) {
    console.log("Database is connected ...");
} else {
    console.log(err);
}
});

app.get('/patient',getAllFromPatient);
app.get('/staff', getAllFromStaff);
app.get('/visit', getAllFromVisit);

function getAllFromPatient(req,res){
	connection.query('SELECT * from patient', function(err, rows, fields) {
  	if (!err){
		res.send(rows);
		console.log(rows);
	}
  	else
    	console.log('Error while performing Query.');
});}

function getAllFromStaff(req,res){
	connection.query('SELECT * from staff', function(err, rows, fields) {
  	if (!err)
    	res.send(rows);
  	else
    	console.log('Error while performing Query.');
});}

function getAllFromVisit(req,res){
	connection.query('SELECT * from visit', function(err, rows, fields) {
  	if (!err){
    	res.send(rows);
        console.log("visit data sent");
      }else
    	console.log('Error while performing Query.');
});}

app.listen(3002);
