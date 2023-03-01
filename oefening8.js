let getal1 = parseInt(prompt("Geef een geheel getal in", "1"));
let getal2 = parseInt(prompt("Geef een geheel getal in", "2"));

let product = getal1 * getal2;
let som = getal1 + getal2;
let verschil = getal1 - getal2;
let quotient = getal1 / getal2;

document.getElementById("product").innerText = ("De uitkomst van de vermenigvuldiging is " + product + ".");
document.getElementById("som").innerText = ("De uitkomst van de som is " + som + ".");
document.getElementById("verschil").innerText = ("Het verschil is " + verschil + ".");
document.getElementById("quotient").innerText = ("De quetiënt is" + quotient + ".");