var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var app = express();
var methodOverride = require("method-override");

mongoose.connect("mongodb://localhost/myportfolio");
app.use(methodOverride("_method"));
app.use(express.static(__dirname+"/assets"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs"); 

var skillsSchema = new mongoose.Schema({
    skillName : String,
    percent : Number
});

var SkillsModel = mongoose.model("skill", skillsSchema);

// SkillsModel.create({
//     skillName: "C++", percent: 90
// },(err, skill)=>{
//     if (err)
//         console.log(err);
//     else
//         console.log(skill);
// });


// var data = {
//     skills : [
//     { skillName: "C++", percent: 90 },
//     { skillName: "Java", percent: 70 },
//     { skillName: "C#", percent: 50 },
//     { skillName: "JavaScript", percent: 20 },
//     { skillName: "JavaScript", percent: 80 }
//     ]
// }

app.get("/", (req, res)=>{  
    SkillsModel.find({},(err, allSkills)=>{
        if(err)
            console.log(err);
        else
            res.render("index", {allSkills:allSkills});
    }); 
});

app.post("/", (req, res)=>{  
    var newSkill = {
        skillName:req.body.skillName,
         percent:req.body.skillPercent
        }
    SkillsModel.create(newSkill, (err, addedSkill)=>{
        if(err)
            console.log(err);
        else
            console.log("added new Skill");
    });
    
    res.redirect("/");
});

app.delete("/", (req, res)=>{  
    console.log(req.body.id);
});

app.listen(3000, ()=>{
    console.log("===== Server Running =====");
});



