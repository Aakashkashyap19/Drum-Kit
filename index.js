// simple alert on every btn clicked

// var numberofDrums = document.querySelectorAll(".drum").length;

// for (var i = 0; i < numberofDrums; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//         alert("i got Clicked!");
//     });
// }

// detecting button press on Display
var numberofDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        //this.style.color="white";
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        
    });
}

// detecting keyboard press
document.addEventListener('keypress',function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');    
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');    
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');    
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');    
            tom4.play();
        break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');    
            snare.play();
        break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');    
            crash.play();
        break;
        case "l":
            var kick_bass = new Audio('sounds/kick-bass.mp3');    
            kick_bass.play();
        break;
        default:
            console.log("only hit the menstioned keys");
    }
}
/* 13/8/21 172 video add ani,=mation to a website */


function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
}


// var audio = new Audio('sounds/tom-1.mp3');    
//         audio.play();
/* 10-8-21 how to create object and access in js */
/* 
var houseKeeper1 = {
    name:"manoj",
    age:20,
    homeworkpermit:true,
    languages:['hindi','english','punjabi'],
    tasktodo:['dusting','cooking']
    
} */
/* function HouseKeeper(name,age,homeworkpermit,languages,tasktodo){
    this.name = name,
    this.age = age,
    this.homeworkpermit = homeworkpermit,
    this.languages = languages,
    this.tasktodo = tasktodo,
    this.moveSuitcase = function(){
        alert("May I take your suitcase?");
        pickUpSuitcase();
        move();
    }
    
}

 var houseBoy1 = new HouseKeeper("manoj",20,true,["hindi","english"],["cleaning","cooking"]);
// var houseBoy2 = new HouseKeeper("namit",21,true,["hindi","english","punjabi"],["cleaning","cooking","teaching"]);

function pickUpSuitcase(){
    alert("OK Sure!");
}
function move(){    
    alert("Lets go to Room Bro...");
} */

// add Event listner and callback function 12-08-21 171

function anotheraddeventListner(typeOfEvent,callback){
    var eventThatHappend = {
        eventType:"keypress",
        key:"p",
        durationOfKeypress:2
    }


    if(eventThatHappend.eventType === typeOfEvent){
        callback(eventThatHappend);
    }
}

anotheraddeventListner("keypress",function(e){
    console.log(e);
});
