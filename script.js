var total = 0;
var operator = "";

//  Preventing submit action of the form
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
});

var plus_button = document.getElementById("plus");
var minus_button = document.getElementById("minus");
var mult_button = document.getElementById("mult");
var div_button = document.getElementById("div");
var clear_butonu = document.getElementById("clear");
var equal_butonu = document.getElementById("equal");


plus_button.addEventListener("click", sum_input);
minus_button.addEventListener("click", sub_input);
mult_button.addEventListener("click", mul_input);
div_button.addEventListener("click", div_input);
clear_butonu.addEventListener("click", clear_input);
equal_butonu.addEventListener("click", equal_input);

function sum_input() {
    if (operator == "") {
        var input = Number(document.getElementById("input").value);
        if (total == 0) {
            total = input;
        }
        else {
            total = total + input;
        }
        document.getElementById("input").value = total;
        operator = "+";
    }
}
function sub_input() {
    if (operator == "") {
        var input = Number(document.getElementById("input").value);
        if (total == 0) {
            total = input;
        }
        else {
            total = total - input;
        }
        document.getElementById("input").value = total;
        operator = "-";
    }
}
function mul_input() {
    if (operator == "") {
        var input = Number(document.getElementById("input").value);
        if (total == 0) {
            total = input;
        }
        else {
            total = total * input;
        }
        document.getElementById("input").value = total;
        operator = "*";
    }
}
function div_input() {
    if (operator == "") {
        var input = Number(document.getElementById("input").value);
        if (total == 0) {
            total = input;
        }
        else {
            total = total / input;
        }
        document.getElementById("input").value = total;
        operator = "/";
    }
}
function clear_input() {
    total = 0;
    document.getElementById("input").value = "";
}
function equal_input() {
    var input = Number(document.getElementById("input").value);
    if (operator == "+") {
        total = total + input;
        document.getElementById("input").value = total;
        total = 0;
    }
    if (operator == "-") {
        total = total - input;
        document.getElementById("input").value = total;
        total = 0;
    }
    if (operator == "*") {
        total = total * input;
        document.getElementById("input").value = total;
        total = 0;
    }
    if (operator == "/") {
        total = total / input;
        if (input == 0) {
            alert("You cannot divide by 0!")
        }
        document.getElementById("input").value = total;
        total = 0;
    }
    operator = "";
}