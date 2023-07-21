
var numOfSounds = document.querySelectorAll(".sounds");

for (var i = 0; i < numOfSounds.length; i++){
    document.querySelectorAll(".sounds")[i].addEventListener("click", function(){

        var buttoninnerHTML = this.innerHTML;
        makeSound(buttoninnerHTML);
        buttonAnimation(buttoninnerHTML);
        
    });
}

document.addEventListener("keydown", function(e){       
    makeSound(e.key);
    buttonAnimation(e.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var macaw = new Audio('sounds/macaw.mp3');
            macaw.play();
            break;
        case "a":
            var frog = new Audio('sounds/frog.mp3');
            frog.play();
            break;
        case "s":
            var leopard = new Audio('sounds/leopard.mp3');
            leopard.play();
            break;
        case "d":
            var dolphin = new Audio('sounds/dolphin.mp3');
            dolphin.play();
            break;
        case "j":
            var snake = new Audio('sounds/snake.mp3');
            snake.play();
            break;
        case "k":
            var monkey = new Audio('sounds/monkey.mp3');
            monkey.play();
            break;
        case "l":
            var piranha = new Audio('sounds/piranha.mp3');
            piranha.play();
            break;
    
        default:
            alert("You pressed an invalid key. Try again.")
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")}, 200);
}