var express = require("express");
var bodyParser = require("body-parser");
//var data = require(__dirname+"/assets/js/client.js");
var app = express();

app.use(express.static(__dirname+"/assets"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs"); 

var data = {
    skills : [
    { skillName: "C++", percent: 90 },
    { skillName: "Java", percent: 70 },
    { skillName: "C#", percent: 50 },
    { skillName: "JavaScript", percent: 20 }
    ]
}

app.get("/", (req, res)=>{       
    res.render("index", {data:data});
})

app.listen(3000, ()=>{
    console.log("===== Server Running =====");
});



