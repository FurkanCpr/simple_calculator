var toplam = 0;
var operator = "";

// Formda submit etmesin diye koyduk bunu
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
});

var arti_butonu = document.getElementById("arti");
var eksi_butonu = document.getElementById("eksi");
var carpi_butonu = document.getElementById("carpi");
var bolu_butonu = document.getElementById("bolu");
var temizle_butonu = document.getElementById("temizle");
var esittir_butonu = document.getElementById("esittir");


arti_butonu.addEventListener("click", sum_input);
eksi_butonu.addEventListener("click", sub_input);
carpi_butonu.addEventListener("click", mul_input);
bolu_butonu.addEventListener("click", div_input);
temizle_butonu.addEventListener("click", temizle);
esittir_butonu.addEventListener("click", esittir);

function sum_input() {
    if (operator == "") {
        var input = Number(document.getElementById("input").value);
        if (toplam == 0) {
            toplam = input;
        }
        else {
            toplam = toplam + input;
        }
        document.getElementById("input").value = toplam;
        operator = "+";
    }
}
function sub_input() {
    if (operator == "") {
        var input = Number(document.getElementById("input").value);
        if (toplam == 0) {
            toplam = input;
        }
        else {
            toplam = toplam - input;
        }
        document.getElementById("input").value = toplam;
        operator = "-";
    }
}
function mul_input() {
    if (operator == "") {
        var input = Number(document.getElementById("input").value);
        if (toplam == 0) {
            toplam = input;
        }
        else {
            toplam = toplam * input;
        }
        document.getElementById("input").value = toplam;
        operator = "*";
    }
}
function div_input() {
    if (operator == "") {
        var input = Number(document.getElementById("input").value);
        if (toplam == 0) {
            toplam = input;
        }
        else {
            toplam = toplam / input;
        }
        document.getElementById("input").value = toplam;
        operator = "/";
    }
}
function temizle() {
    toplam = 0;
    document.getElementById("input").value = "";
}
function esittir() {
    var input = Number(document.getElementById("input").value);
    if (operator == "+") {
        toplam = toplam + input;
        document.getElementById("input").value = toplam;
        toplam = 0;
    }
    if (operator == "-") {
        toplam = toplam - input;
        document.getElementById("input").value = toplam;
        toplam = 0;
    }
    if (operator == "*") {
        toplam = toplam * input;
        document.getElementById("input").value = toplam;
        toplam = 0;
    }
    if (operator == "/") {
        toplam = toplam / input;
        if (input == 0) {
            alert("0 sayısına bölemezsiniz!")
        }
        document.getElementById("input").value = toplam;
        toplam = 0;
    }
    operator = "";
}