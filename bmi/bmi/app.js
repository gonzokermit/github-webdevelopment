"use strict";

const enterButton = document.getElementById("enter");
const clearButton = document.getElementById("clear-input");

function calculateBmi() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let result = weight/(height/100*height/100);
    let resultToFixed = (result.toFixed(2))

    if (result < 18.4) {
        document.getElementById("result").innerHTML=`Your BMI is ${resultToFixed}`;
        document.getElementById("result-weight").innerHTML=`Underweight!`;
    } else if (result >= 18.4  &&  result <= 25.9) {
        document.getElementById("result").innerHTML=`Your BMI is ${resultToFixed}`;  
        document.getElementById("result-weight").innerHTML=`Normalweight!`;
    } else if (result >= 25  &&  result <= 29.9) {
        document.getElementById("result").innerHTML=`Your BMI is ${resultToFixed}`;
        document.getElementById("result-weight").innerHTML=`Overweight!`;
    } else if (result > 30) {
        document.getElementById("result").innerHTML=`Your BMI is ${resultToFixed}`;  
        document.getElementById("result-weight").innerHTML=`Obesity!`;
    };
};

function clearInput() {
    let height = document.getElementById("height").value = "";
    let weight = document.getElementById("weight").value = "";
    document.getElementById("result").innerHTML = "Here comes the result";
    document.getElementById("result-weight").innerHTML = "";
};

enterButton.addEventListener("click", calculateBmi);
clearButton.addEventListener("click", clearInput);
