
var express = require("express");
var app = express();


var bodyParser = require('body-parser')
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get("/", function(req, res) {
    res.send("Hello World!");
});

app.post('/boss',function(req, res){
  var cookie_data = req.body.cookie_data;
  console.log(cookie_data);
  console.log("new cookie");

});



var server = app.listen(5000, function () {
    console.log("Listening on port %s...", server.address().port);
});
