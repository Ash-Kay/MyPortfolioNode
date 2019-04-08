VANTA.TOPOLOGY({        el: "#bgeffect"        });
        VANTA.TOPOLOGY({
            el: '#bgeffect',
            color: 0x9b1a0a,
            backgroundColor: 0x331A42           
        });
        
var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
    loop: true
});

var name = "Ashish";

typewriter.typeString('Hello World!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('I\'m '+name)
    .pauseFor(2500)
    .deleteChars(7)
    .typeString(' am Web Developer')          
    .pauseFor(2500)
    .deleteAll()
    .start();

//  HERO

$( "#edit-hero-btn" ).click(()=>{    
    console.log("hero edit click");
    $( "#hero-edit" ).toggleClass("hidden");
    $( ".hero" ).toggleClass("hidden");
});

$( "#hero-edit .btn" ).click(()=>{    
    console.log("hero update click");
    $( "#hero-edit" ).toggleClass("hidden");
    $( ".hero" ).toggleClass("hidden");

    $( "#about" ).html( $("#edit-about").val() );
    $( ".hero img" ).attr("src", $("#edit-profile-link").val());

    if($("#edit-typewriter").val() != ""){
        name = $("#edit-typewriter").val();
    }
    
});

// SKILL

$( ".addSkill" ).click(()=>{    
    console.log("addSkillClick");
    $( "form.newbar-container" ).toggleClass("hidden");
});

$( "form.newbar-container" ).submit(function( event ) {
    $(this).toggleClass("hidden");
});

// PORJECT

$( ".addProjects" ).click(()=>{    
    console.log("addProjectClick");
    $( "form.newporject-container" ).toggleClass("hidden");
});

$( "form.newporject-container" ).submit(function( event ) {
    $(this).toggleClass("hidden");
});
