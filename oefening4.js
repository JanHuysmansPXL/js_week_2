let zin = "IK WIL EEN LASAGNE VAN PXL-CATERING";
let uitkomst;

document.getElementById("titel").innerText = (zin);

uitkomst = zin.charAt(0);
console.log(uitkomst);
document.getElementById("antwoord1").innerText = (uitkomst);

uitkomst = zin.charAt(3);
console.log(uitkomst);
document.getElementById("antwoord2").innerText = (uitkomst);

uitkomst = zin.lastIndexOf('k');
console.log(uitkomst);
document.getElementById("antwoord3").innerText = (uitkomst);

uitkomst = zin.lastIndexOf('e');
console.log(uitkomst);
document.getElementById("antwoord4").innerText = (uitkomst);

uitkomst = zin.length;
console.log(uitkomst);
document.getElementById("antwoord5").innerText = (uitkomst);