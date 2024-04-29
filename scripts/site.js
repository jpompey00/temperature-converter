"use strict";
window.onload = init;
//TODO: Add catch for NaN and not inputting anything

//the numbers
const number = document.getElementById("number1");
const outputElement = document.getElementById("output");

//the buttons
const fahrenheitCelsiusBtn = document.getElementById("FahrenheitCelsiusBtn");
const celsiusFahrenheitBtn = document.getElementById("CelsiusFahrenheitBtn");
const resetBtn = document.getElementById("resetBtn");

function init(){

    if(fahrenheitCelsiusBtn != null){
        fahrenheitCelsiusBtn.onclick = fahrenheitCelsiusBtnClicked;
    } else if (celsiusFahrenheitBtn != null){

        celsiusFahrenheitBtn.onclick = celsiusFahrenheitBtnClicked;
    }

    resetBtn.onclick = resetBtnClicked;

}

//can put these in 1 function and have it differentiate with a true or false
function fahrenheitCelsiusBtnClicked(){
    let fahrenheit = Number(number.value);
    let output = (fahrenheit-32) * (5/9);
    outputElement.innerHTML = output;


}

function celsiusFahrenheitBtnClicked(){
    let celsius = Number(number.value);
    let output = (9/5) * celsius + 32;
    outputElement.innerHTML = output;
}

//clears the input and output when reset
function resetBtnClicked(){
    number.value = "";
    outputElement.innerHTML = ""
}