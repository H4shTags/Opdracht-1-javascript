let elementTimer = document.getElementById("timer")
let elementKeuzeSpeler1 = document.getElementById("keuzeSpeler1")
let elementKeuzeSpeler2 = document.getElementById("keuzeSpeler2")
let elementWinnaar = document.getElementById("winnaar")

elementTimer.innerHTML = 0;
elementKeuzeSpeler1.innerHTML = "speler 1 -";
elementKeuzeSpeler2.innerHTML = "speler 2 -";
elementWinnaar.innerHTML = "We gaan bijna starten";

let keuzeSpeler1 = "";
let keuzeSpeler2 = "";
let timer = 5;
let keuzekiezen = false;

function winnaar() {
    if ((keuzeSpeler1 == "") && (keuzeSpeler2 == "")) {
        return "draw";
    }
    if (keuzeSpeler1 == "") {
        return "Speler 2 heeft gewonnen";
    }
    if (keuzeSpeler2 == "") {
        return "Speler 1 heeft gewonnen";
    }
    if ((keuzeSpeler1 == "steen") && (keuzeSpeler2 == "steen")) {
        return "draw";
    }
    if ((keuzeSpeler1 == "steen") && (keuzeSpeler2 == "papier")) {
        return "Speler 2 heeft gewonnen";
    }
    if ((keuzeSpeler1 == "steen") && (keuzeSpeler2 == "schaar")) {
        return "Speler 1 heeft gewonnen";
    }
    if ((keuzeSpeler1 == "papier") && (keuzeSpeler2 == "steen")) {
        return "Speler 1 heeft gewonnen";
    }
    if ((keuzeSpeler1 == "papier") && (keuzeSpeler2 == "papier")) {
        return "draw";
    }
    if ((keuzeSpeler1 == "papier") && (keuzeSpeler2 == "schaar")) {
        return "Speler 2 heeft gewonnen";
    }
    if ((keuzeSpeler1 == "schaar") && (keuzeSpeler2 == "steen")) {
        return "Speler 2 heeft gewonnen";
    }
    if ((keuzeSpeler1 == "schaar") && (keuzeSpeler2 == "papier")) {
        return "Speler 1 heeft gewonnen";
    }
    if ((keuzeSpeler1 == "schaar") && (keuzeSpeler2 == "schaar")) {
        return "draw";
    }
    
}

function countDown() {
    keuzekiezen = false;
    if (timer == 0) {
        gameStart();
    }
    else {
        timer = timer - 1;
        elementTimer.innerHTML = timer;
        setTimeout(countDown, 1000);
    }
}

function gameStart() {
    keuzekiezen = true;
    timer = 4;
    elementWinnaar.innerHTML = "Maak een keuze";
    gameCountDown();
}

function gameCountDown() {
    if (timer == 0) {
        keuzekiezen = false;
        elementWinnaar.innerHTML = winnaar();
        elementKeuzeSpeler1.innerHTML = keuzeSpeler1;
        elementKeuzeSpeler2.innerHTML = keuzeSpeler2;
    }
    else {
        timer = timer - 1;
        elementTimer.innerHTML = timer;
        setTimeout(gameCountDown, 1000);
    }
}

document.addEventListener('keydown', function (event) {
    if (event.key === ' ') {
        countDown();
    }

    if (keuzekiezen == true) {
        if (event.key === '1') {
            keuzeSpeler1 = "steen";
        }
        if (event.key === '2') {
            keuzeSpeler1 = "papier";
        }
        if (event.key === '3') {
            keuzeSpeler1 = "schaar";
        }
        if (event.key === '8') {
            keuzeSpeler2 = "steen";
        }
        if (event.key === '9') {
            keuzeSpeler2 = "papier";
        }
        if (event.key === '0') {
            keuzeSpeler2 = "schaar";
        }
    }



});

