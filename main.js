let screen = document.getElementById("calculator-input");
let equal = document.getElementById("equal")
let buttons = document.querySelectorAll(".calculator-btn");
let clear = document.getElementById("del");

clear.addEventListener("click", function(){
    screen.value = ""

})



for (let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        let number = buttons[i].getAttribute("value");
        screen.value += number
    })
}


equal.addEventListener("click", function(){
let value = eval(screen.value);
screen.value=value;
});