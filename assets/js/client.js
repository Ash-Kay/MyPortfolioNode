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
var add = document.getElementsByClassName("add")[0];
add.addEventListener('click', ()=>{
    console.log("Clicked");
});
