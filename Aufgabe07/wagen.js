"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    for (let i = 1; i <= localStorage.length / 3; i++) { //Artikeln erstellen
        let containerArtikeln = document.createElement("div");
        containerArtikeln.className = "boxArtikeln";
        document.getElementById("grid")?.appendChild(containerArtikeln);
        let titelArtikeln = document.createElement("h3");
        titelArtikeln.innerHTML = "" + localStorage.getItem("namen" + i); //auf local storage zugreifen
        containerArtikeln.appendChild(titelArtikeln);
        let preisArtikeln = document.createElement("p");
        preisArtikeln.innerHTML = "" + localStorage.getItem("price" + i) + "€"; //auf local storage zugreifen
        containerArtikeln.appendChild(preisArtikeln);
        let photoArtikeln = document.createElement("img");
        photoArtikeln.src = "" + localStorage.getItem("picture" + i); //auf local storage zugreifen
        containerArtikeln.appendChild(photoArtikeln);
        photoArtikeln.className = "pictures";
        let buttonWeg = document.createElement("button"); //löschen button(einzelne Elemente)
        buttonWeg.innerHTML = "Löschen";
        containerArtikeln.appendChild(buttonWeg);
        buttonWeg.setAttribute("index", i.toString());
        buttonWeg.addEventListener("click", elementLoschen);
        function elementLoschen(_event) {
            window.localStorage.removeItem("namen" + i);
            window.localStorage.removeItem("price" + i);
            window.localStorage.removeItem("picture" + i);
            containerArtikeln.remove();
        }
    }
    let buttonLoschen = document.createElement("button"); //alles loschen Button erstellen
    buttonLoschen.innerHTML = "Alles löschen";
    document.getElementById("artikelnCont")?.appendChild(buttonLoschen);
    buttonLoschen.addEventListener("click", allesLoschen);
    let preis = document.createElement("p"); //platz fur price erstellen
    document.getElementById("artikelnCont")?.appendChild(preis);
    //gesamtPreis = "" + localStorage.getItem("price" + i);
    // let target: HTMLElement = (<HTMLElement>_event.target); //Gesamtpreis
    //let wclick: string = " " + target.getAttribute("index"); //klärt auf welchem button man gecklickt hat
    //let arvar: number = + wclick; //string im number umwandeln
    //gesamtPreis = gesamtPreis +  + localStorage.getItem("price" + i);
    //console.log("Gesamtpreis:" + gesamtPreis); 
    function allesLoschen(_event) {
        localStorage.clear();
        location.reload();
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=wagen.js.map