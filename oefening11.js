// 1. Toewijzingsoperatoren
// Declareren of aanpassen van waardes.

let uitkomst = "Uitkomst";
document.getElementById("operator1").innerText = uitkomst;

uitkomst = "Nieuwe uitkomst";
document.getElementById("operator2").innerText = uitkomst;

// 2. Wiskundige Operatoren
//   Samenvoegen van numerieke waarden.

let getal1 = 3;
let getal2 = 5;
let som;

som = getal1 + getal2;
document.getElementById("som").innerText = som;

verschil = getal1 - getal2;
document.getElementById("verschil").innerText = verschil;

product = getal1 * getal2;
document.getElementById("product").innerText = product;

quotient = getal1 / getal2;
document.getElementById("quotient").innerText = quotient;

rest = getal1 % getal2;
document.getElementById("restwaarde").innerText = rest;

getal1++;
document.getElementById("plus1").innerText = getal1;
getal1--; //Ongedaan maken van 1e som.

getal1--;
document.getElementById("min1").innerText = getal1;

// 3. Stringoperatoren - Concatenatie (samenvoegen van strings
// Het plusteken (+) is een concatenatieoperator.
// Met deze operator kunnen we twee of meer strings samenvoegen tot één string.

let string1 = "samen";
let string2 = "een zin";
let zin = string1 + " " + string2;
document.getElementById("zin").innerText = zin;

// 4. Logische operatoren
// Met logische operatoren kunnen we nagaan of een expressie, bestaande uit logische waarden, waar of onwaar is.

getal1 = 3;
getal2 = 5;
let vergelijking;

vergelijking = getal1 == 3  && getal2 == 5;
document.getElementById("en").innerText = vergelijking;

vergelijking = getal1 == 5  && getal2 == 9;
document.getElementById("en2").innerText = vergelijking;