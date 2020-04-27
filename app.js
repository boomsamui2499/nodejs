var express=require('express');
var body=require('body-parser');
var cookie=require('cookie-parser');
var app=express();
app.use(body());
app.use(cookie());
app.set('view engine','ejs');

app.get('/createcookie',function(req,res){
    // res.sendfile(__dirname+"/"+"show.html");
    res.cookie('boom','samui');
    res.end("create cookie")
});
app.get('/delcookie',function(req,res){
    // res.sendfile(__dirname+"/"+"show.html");
    res.clearcookie('boom');
    res.end("del cookie")
});






// app.post('/showdata',function(req,res){
// data={
//     fname:req.body.fname,
//     lname:req.body.lname
// };
// // console.log(data);
// // res.end(JSON.stringify(data));
// res.end("<h1>"+data.fname+"</h1>"+" "+"<h1>"+data.lname+"</h1>");
// // res.end("<h1>"+data.lname+"</h1>");


// });
app.listen(8081);