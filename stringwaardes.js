let welkom = "Welkom in de les Web Advanced";
let uitkomst;

// 1. hoeveel characters bevat deze string ?

uitkomst = welkom.length;
document.getElementById("antwoord1").innerText = (uitkomst);

// 2. Welk karakter staat op plaats 0 (telling begint vanaf 0!)?

uitkomst = welkom.charAt(0);
document.getElementById("antwoord2").innerText = (uitkomst);

// 3. Wat zijn de eerste 5 karakters?

uitkomst = welkom.substring(0,5);
document.getElementById("antwoord3").innerText = (uitkomst);

// 4. Op welke plaats staat karakter ‘i’?

uitkomst = welkom.indexOf('i');
document.getElementById("antwoord4").innerText = (uitkomst);

// 5. Op welke plaats staat karakter ‘y'-1?

uitkomst = welkom.indexOf('y');
document.getElementById("antwoord5").innerText = (uitkomst - 1);

// 6. Op welke plaats komt karakter ‘e’ het laatste voor?

uitkomst = welkom.lastIndexOf('e');
document.getElementById("antwoord6").innerText = (uitkomst);

// 7. Vervang karakter ‘h’ met karakter ‘H.

uitkomst = welkom.replace('h', 'H');
document.getElementById("antwoord7").innerText = (uitkomst);

// 8. Zet alle karakters in hoofdletters om.

uitkomst = welkom.toUpperCase()
document.getElementById("antwoord8").innerText = (uitkomst);

// 8. Zet alle karakters in hoofdletters om.

uitkomst = welkom.toLowerCase()
document.getElementById("antwoord9").innerText = (uitkomst);
