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

typewriter.typeString('Hello World!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('I\'m Ashish')
    .pauseFor(2500)
    .deleteChars(9)
    .typeString(' make Android apps')
    .deleteChars(12)
    .typeString('Games')            
    .pauseFor(2500)
    .deleteAll()
    .start();

//Add skill
// var add = document.getElementsByClassName("add")[0];
// add.addEventListener('click', ()=>{
//     console.log("Clicked");
// });

$( ".addSkill" ).click(()=>{    
    console.log("addSkillClick");
    $( "form.newbar-container" ).toggleClass("hidden");
});

$( ".editSkill" ).click(()=>{
    console.log("editSkill");
});

$( ".removeSkill" ).click(()=>{
    console.log("removeSkill");
    var id = $(this).attr("alt");
    $.ajax({
        type: "POST",
        url: "/?_method=DELETE",
        data: id
      });
});

$( "form.newbar-container" ).submit(function( event ) {
    $(this).toggleClass("hidden");
});

// $(document).on('click', 'input[type="submit"]', function() {    
//     var inputs =$(this).siblings('input[type="text"],input[type="number"]');

    
// });

// $(document).on('submit', 'form', function() {
//     console.log( $( this ).serializeArray() );
// });

// $( "form" ).submit(function( event ) {
//     console.log( $( this ).serializeArray() );
// });

