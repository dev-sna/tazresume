var express = require('express');
var path = require('path');
var pdf = require('express-pdf');
var bodyParser = require('body-parser');
var app = express();
var redirect = require('express-redirect');
var ejs= require('ejs');
var cookie = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'tazresume'
});

// Static path tp the public files directory to host static files
app.use('/public-files',express.static('public-files'));
//session and cookie code
app.use(cookie());
app.use(session({secret: "let her go"}));
// Use pdf generator
app.use(pdf);

// Form processing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set View Engine
app.set('view engine','ejs');

// FOR PDF
app.use('/getResume/:id', function(req, res){
    var id = req.params.id;
    if(req.session.user){
    connection.query("SELECT * FROM tazresume WHERE username='" + req.session.user + "'", function (err, rows, fields) {
        if (err)   {console.log(err);}
        var data=rows[0];
        ejs.renderFile('./pages/resume/CV' + id + '.ejs', data , function(err, str){
            res.pdfFromHTML({
                filename: 'TAZResume.pdf',
                htmlContent: str,
                options: {
                base : 'file:///C:/tazresume/',
                format: "A4",
                margin: '0cm',
                }
            }); 
            console.log(err);
        });    
    });
    }
    else{
        res.redirect('/');
    }
});
//sending variables in CVs


//**************
app.post('/login',function(req, res){
    connection.query("select password from tazresume where username = '"+ req.body.lusername + "'", function(error, rows, fields){
      if(req.body.lpassword===rows[0].password){
          req.session.user = req.body.lusername;
          console.log("logged in");
          res.redirect('/back');     
      }
        else res.redirect('/');
    });
});

// Handles signup form
app.post('/signup',function(req, res){
    
    connection.query("insert into tazresume (username, email, password) values('" + req.body.username + "', '"  + req.body.email + "', '" + req.body.password + "')", function (err, rows, fields) {
        if (err)   throw err;
        console.log("Data saved in DB");
        
    });
});

// Gets the default values for 
app.get('/get-form-data', function(req, res){
    connection.query("SELECT * FROM tazresume WHERE username='" + req.session.user + "'", function (err, rows, fields) {
    if (err)   throw err;
        res.send(rows[0]);
    });
});

// Handles backend form
app.post('/post-form',function(req, res){
    var query = "UPDATE tazresume SET " +
        
        // Personal Info
        "firstName='" + req.body.firstName + "', " + "lastName='" + req.body.lastName + "', " +
        "dob='" + req.body.dob + "', " + "address='" + req.body.address + "', " +
        "cellNumOne='" + req.body.cellNumOne + "', " + "cellNumTwo='" + req.body.cellNumTwo + "', " +
        "emailcv='" + req.body.email + "', " + "skypeID='" + req.body.firstName + "', " + 
        "postApplied= '" + req.body.postApplied + "', " + 
        
        // Personal Info
        "instNameOne='" + req.body.instNameOne + "', " + "degreeOne='" + req.body.degreeOne + "', " +
        "qperiodOne='" + req.body.qperiodOne + "', " + "cgpaOne='" + req.body.cgpaOne + "', " +
        
        "instNameTwo='" + req.body.instNameTwo + "', " + "degreeTwo='" + req.body.degreeTwo + "', " +
        "qperiodTwo='" + req.body.qperiodTwo + "', " + "cgpaTwo='" + req.body.cgpaTwo + "', " +
        
        "instNameThree='" + req.body.instNameThree + "', " + "degreeThree='" + req.body.degreeThree + "', " +
        "qperiodThree='" + req.body.qperiodThree + "', " + "cgpaThree='" + req.body.cgpaThree + "', " +
        
        "instNameFour='" + req.body.instNameFour + "', " + "degreeFour='" + req.body.degreeFour + "', " +
        "qperiodFour='" + req.body.qperiodFour + "', " + "cgpaFour='" + req.body.cgpaFour + "', " +
        
        // Organization Info
        "orgyNameOne='" + req.body.orgyNameOne + "', " + "jobTitleOne='" + req.body.jobTitleOne + "', " +
        "eperiodOne='" + req.body.eperiodOne + "', " + 
        
        "orgyNameTwo='" + req.body.orgyNameTwo + "', " + "jobTitleTwo='" + req.body.jobTitleTwo + "', " +
        "eperiodTwo='" + req.body.eperiodTwo + "', " + 
        
        "orgyNameThree='" + req.body.orgyNameThree + "', " + "jobTitleThree='" + req.body.jobTitleThree + "', " +
        "eperiodThree='" + req.body.eperiodThree + "', " + 
        
        "orgyNameFour='" + req.body.orgyNameFour + "', " + "jobTitleFour='" + req.body.jobTitleFour + "', " +
        "eperiodFour='" + req.body.eperiodFour + "', " + 
        
        // Organization Info
        "skOne='" + req.body.skOne + "', " + "lvOne=" + req.body.lvOne + ", " +
        "skTwo='" + req.body.skTwo + "', " + "lvTwo=" + req.body.lvTwo + ", " +
        "skThree='" + req.body.skThree + "', " + "lvThree=" + req.body.lvThree + ", " +
        "skFour='" + req.body.skFour + "', " + "lvFour=" + req.body.lvFour + ", " +
        
        "skFive='" + req.body.skFive + "', " + "lvFive=" + req.body.lvFive + ", " +
        "skSix='" + req.body.skSix + "', " + "lvSix=" + req.body.lvSix + ", " +
        "skSeven='" + req.body.skSeven + "', " + "lvSeven=" + req.body.lvSeven + ", " +
        "skEight='" + req.body.skEight + "', " + "lvEight=" + req.body.lvEight
        
        +" where username = '" + req.session.user + "'";
        
     
        
    
    
    connection.query(query, function (err, rows, fields) {
        if (err)   throw err;
        console.log("Data updated in DB");
    
    });
    
});
app.get('/', function(req, res){
    if(req.session.user){
        res.redirect('/back');
    }
    else {
        res.render(path.join(__dirname+'/pages/front/front.ejs'));    
    }
    });

// Added this line to show backend
app.get('/back', function(req, res){
    if(req.session.user){
        res.render(path.join(__dirname+'/pages/back/backend.ejs'));
    }
    else 
        res.redirect('/');
});

app.get('/logout', function( req, res){
    if(req.session.user){
        req.session.destroy();
        res.redirect('/');
    }
    else 
        res.redirect('/');
});

// Shows resume


//DATABSE STARTED
//***************



//*************
//DATABSE ENDED

app.listen(3000, function(){
    console.log("Server started!");
});