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

var projectsSchema = new mongoose.Schema({
    projectName : String,
    projectImage : String,
    projectSub : String
});
var ProjectsModel = mongoose.model("project", projectsSchema);

app.get("/", (req, res)=>{
    var dataList = [];

    SkillsModel.find({},(err, allSkills)=>{
        if(err)
            console.log(err);
        else
            dataList.skills = allSkills;
            ProjectsModel.find({},(err, allProjects)=>{
                if(err)
                    console.log(err);
                else
                    dataList.projects = allProjects;
                    res.render("index", {dataList:dataList});
            });
    });
});

app.post("/newskill", (req, res)=>{  
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

app.delete("/skill/:id", (req, res)=>{  
    SkillsModel.findByIdAndRemove(req.params.id, (err)=>{
        res.redirect("/");
    })
});

app.delete("/project/:id", (req, res)=>{  
    ProjectsModel.findByIdAndRemove(req.params.id, (err)=>{
        res.redirect("/");
    })
});

app.post("/newproject", (req, res)=>{  
    var newProject = {
        projectName:req.body.projectName,
        projectImage:req.body.projectImage,
        projectSub:req.body.projectSub
        }
    ProjectsModel.create(newProject, (err, addedProject)=>{
        if(err)
            console.log(err);
        else
            console.log("added new Project");
    });
    
    res.redirect("/");
});

app.listen(3000, ()=>{
    console.log("===== Server Running =====");
});
