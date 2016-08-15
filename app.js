var express = require('express');
var app = express();
var port = process.env.port || 3000;

//* Set static URL For Node_Module
app.use(express.static(__dirname + '/node_modules'));
//* Set static URL For Views
app.use(express.static(__dirname + '/views'));
//* Set static URL For Controler
app.use(express.static(__dirname + '/controlers'));
//* Set static URL For Css,js,...Folder
app.use(express.static(__dirname + '/public'));
//* Load mainlayout
app.get('*',function(req,res){
    res.sendFile(__dirname + '/views/layout/index.html');
});
//* Load app
app.listen(port,function(){
    console.log("App is running at port :" + port);
});
