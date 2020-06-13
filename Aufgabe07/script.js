"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    let countArtikeln = 0;
    let gesamtPreis = 0;
    //Aufgabe 07 Teil 1
    function artikelnErstellen() {
        for (let index = 0; index < Aufgabe07.artikel.length; index++) {
            let containerArtikeln = document.createElement("div"); //div element für jede artikel
            containerArtikeln.className = "boxArtikeln";
            if (Aufgabe07.artikel[index].category == "inking") {
                document.getElementById("inking")?.appendChild(containerArtikeln);
            }
            else if (Aufgabe07.artikel[index].category == "painting") {
                document.getElementById("painting")?.appendChild(containerArtikeln);
            }
            else {
                document.getElementById("sketchbooks")?.appendChild(containerArtikeln);
            }
            let titelArtikeln = document.createElement("h3");
            titelArtikeln.innerHTML = Aufgabe07.artikel[index].name;
            containerArtikeln.appendChild(titelArtikeln);
            let beschreibungArtikeln = document.createElement("h4");
            beschreibungArtikeln.innerHTML = Aufgabe07.artikel[index].beschreibung;
            containerArtikeln.appendChild(beschreibungArtikeln);
            let preisArtikeln = document.createElement("p");
            preisArtikeln.innerHTML = Aufgabe07.artikel[index].preis + "€";
            containerArtikeln.appendChild(preisArtikeln);
            let photoArtikeln = document.createElement("img");
            photoArtikeln.src = Aufgabe07.artikel[index].photo;
            containerArtikeln.appendChild(photoArtikeln);
            photoArtikeln.className = "pictures";
            let buttonEinkaufen = document.createElement("button"); //kaufen button erstellen
            buttonEinkaufen.innerHTML = "In den Einkaufswagen";
            containerArtikeln.appendChild(buttonEinkaufen);
            buttonEinkaufen.setAttribute("index", index.toString());
            buttonEinkaufen.addEventListener("click", handleZahl);
        }
    }
    Aufgabe07.artikelnErstellen = artikelnErstellen;
    //Aufgabe 06 Teil 1 
    let zahl = document.getElementById("zahl");
    let ind = 0; //anzahl artikeln gecklickt
    function handleZahl(_event) {
        countArtikeln++; //Zahl der Artikeln
        zahl.setAttribute("style", "visibility: visible");
        zahl.innerHTML = " " + countArtikeln;
        let target = _event.target; //Gesamtpreis
        let wclick = " " + target.getAttribute("index"); //klärt auf welchem button man gecklickt hat
        let arvar = +wclick; //string im number umwandeln
        gesamtPreis = gesamtPreis + Aufgabe07.artikel[arvar].preis;
        console.log("Gesamtpreis:" + gesamtPreis);
        ind++;
        localStorage.setItem("namen" + ind, Aufgabe07.artikel[arvar].name); //im local storage Dateien speichern
        localStorage.setItem("price" + ind, (Aufgabe07.artikel[arvar].preis).toString());
        localStorage.setItem("picture" + ind, Aufgabe07.artikel[arvar].photo);
    }
    Aufgabe07.handleZahl = handleZahl;
    let inks = document.getElementById("ink");
    let paint = document.getElementById("paint");
    let sketchs = document.getElementById("sketch");
    let all = document.getElementById("alles");
    inks.addEventListener("click", handleKatInk);
    paint.addEventListener("click", handleKatPaint);
    sketchs.addEventListener("click", handleKatSketch);
    all.addEventListener("click", handleKatAll);
    function handleKatInk(_event) {
        document.getElementById("inking")?.setAttribute("style", "display: normal");
        document.getElementById("painting")?.setAttribute("style", "display: none");
        document.getElementById("sketchbooks")?.setAttribute("style", "display: none");
        document.getElementById("uber1")?.setAttribute("style", "display: normal");
        document.getElementById("uber2")?.setAttribute("style", "display: none");
        document.getElementById("uber3")?.setAttribute("style", "display: none");
    }
    function handleKatPaint(_event) {
        document.getElementById("inking")?.setAttribute("style", "display: none");
        document.getElementById("painting")?.setAttribute("style", "display: normal");
        document.getElementById("sketchbooks")?.setAttribute("style", "display: none");
        document.getElementById("uber2")?.setAttribute("style", "display: normal");
        document.getElementById("uber1")?.setAttribute("style", "display: none");
        document.getElementById("uber3")?.setAttribute("style", "display: none");
    }
    function handleKatSketch(_event) {
        document.getElementById("inking")?.setAttribute("style", "display: none");
        document.getElementById("painting")?.setAttribute("style", "display: none");
        document.getElementById("sketchbooks")?.setAttribute("style", "display: normal");
        document.getElementById("uber1")?.setAttribute("style", "display: none");
        document.getElementById("uber2")?.setAttribute("style", "display: none");
        document.getElementById("uber3")?.setAttribute("style", "display: normal");
    }
    function handleKatAll(_event) {
        document.getElementById("inking")?.setAttribute("style", "display: normal");
        document.getElementById("painting")?.setAttribute("style", "display: normal");
        document.getElementById("sketchbooks")?.setAttribute("style", "display: normal");
        document.getElementById("uber1")?.setAttribute("style", "display: normal");
        document.getElementById("uber2")?.setAttribute("style", "display: normal");
        document.getElementById("uber3")?.setAttribute("style", "display: normal");
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script.js.map