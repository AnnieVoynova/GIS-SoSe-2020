"use strict";
var Aufgabe05;
(function (Aufgabe05) {
    // Artikeln erstelen
    let pen = { name: "Faber Castell PITT Artist Pen", photo: "images/markers5.jpg", beschreibung: "Set of 8,black", preis: "15€", category: "inking" };
    let artistpen = { name: "Faber Castell PITT Artist Pen", photo: "images/markers6.jfif", beschreibung: "Shades of Grey, Set of 6 soft brush markers", preis: "12.50€", category: "inking" };
    let inkpen = { name: "Ink Pen", photo: "images/ink8.jpg", beschreibung: "Set of 4 different sizes", preis: "15€", category: "inking" };
    let ink = { name: "Drawing Ink", photo: "images/ink9.jpg", beschreibung: "SDifferent Colours available,78ml", preis: "4€ per Bottle", category: "inking" };
    let artikelnInking = [pen, artistpen, inkpen, ink]; //Array
    // Artikeln erstelen
    let watercolors = { name: "Koi Watercolour Paints", photo: "images/koiwater14.jpg", beschreibung: "Travel Set-12 Colours", preis: "15€", category: "painting" };
    let paints = { name: "Watercolour Paints", photo: "images/paints11.jpg", beschreibung: "Box set of 36 Coours x 59ml", preis: "30€", category: "painting" };
    let pencils = { name: "Derwent Watercolour Pencils", photo: "images/waterpencils.jpg", beschreibung: "12 Colours,extremely good quality", preis: "20€", category: "painting" };
    let acryl = { name: "Mont Marte Acrylic Paints", photo: "images/paints12.jpg", beschreibung: "Set of 24 Colours x 36ml", preis: "30€", category: "painting" };
    let rowney = { name: "Daler Rowney Acrylic Paints", photo: "images/paint13.jpg", beschreibung: "Simply Acrylic Paint Bottle x75ml, Different Colours available", preis: "Preis:5€ per Bottle", category: "painting" };
    let artikelnDrawing = [watercolors, paints, pencils, acryl, rowney]; //Array
    // Artikeln erstelen
    let sketch = { name: "Sketchbook Hardcover,Spiral", photo: "images/sketchbook1.jpg", beschreibung: "8,5x11; 80 Pages", preis: "10€", category: "sketchbooks" };
    let sketchrowney = { name: "Sketchbook D.Rowney", photo: "images/Sketchbook2.jpg", beschreibung: "14x11; 80 pages", preis: "15€", category: "sketchbooks" };
    let spocket = { name: "Pocket Sketchbook R.Downey", photo: "images/Sketchbook3.jpg", beschreibung: "3,5x5,5; 144 Pages", preis: "12€", category: "sketchbooks" };
    let mixmedia = { name: "Sketchbook Mix Media", photo: "images/sketchbook4.jpeg", beschreibung: "7x10in; 60 Seiten", preis: "20€", category: "sketchbooks" };
    let artikelnSketchbooks = [sketch, sketchrowney, spocket, mixmedia]; //Array
    //Kategorie Inking
    for (let index = 0; index < artikelnInking.length; index++) {
        let containerArtikeln = document.createElement("div"); //div element für jede artikel
        document.getElementById("inking")?.appendChild(containerArtikeln); //main div von html dokument
        let titelArtikeln = document.createElement("h3"); //titel des artikels
        titelArtikeln.innerHTML = artikelnInking[index].name;
        let beschreibungArtikeln = document.createElement("h4"); //beschreibung des artikels
        beschreibungArtikeln.innerHTML = artikelnInking[index].beschreibung;
        let preisArtikeln = document.createElement("p"); //preis hinzufugen
        preisArtikeln.innerHTML = artikelnInking[index].preis;
        let photoArtikeln = document.createElement("img"); //photo des produktes
        photoArtikeln.innerHTML = artikelnInking[index].photo; //auf dem array zugreifen und photo nehmen
        let buttonEinkaufen = document.createElement("button"); //kaufen button erstellen
        buttonEinkaufen.innerHTML = "In den Einkaufswagen";
    }
    for (let index = 0; index < artikelnDrawing.length; index++) {
        let containerArtikeln = document.createElement("div"); //div element für jede artikel
        document.getElementById("painting")?.appendChild(containerArtikeln); //main div von html dokument
        let titelArtikeln = document.createElement("h3"); //titel des artikels
        titelArtikeln.innerHTML = artikelnDrawing[index].name;
        let beschreibungArtikeln = document.createElement("h4"); //beschreibung des artikels
        beschreibungArtikeln.innerHTML = artikelnDrawing[index].beschreibung;
        let preisArtikeln = document.createElement("p"); //preis hinzufugen
        preisArtikeln.innerHTML = artikelnDrawing[index].preis;
        let photoArtikeln = document.createElement("img"); //photo des produktes
        photoArtikeln.innerHTML = artikelnDrawing[index].photo; //auf dem array zugreifen und photo nehmen
        let buttonEinkaufen = document.createElement("button"); //kaufen button erstellen
        buttonEinkaufen.innerHTML = "In den Einkaufswagen";
    }
    for (let index = 0; index < artikelnSketchbooks.length; index++) {
        let containerArtikeln = document.createElement("div"); //div element für jede artikel
        document.getElementById("sketchbooks")?.appendChild(containerArtikeln); //main div von html dokument
        let titelArtikeln = document.createElement("h3"); //titel des artikels
        titelArtikeln.innerHTML = artikelnSketchbooks[index].name;
        let beschreibungArtikeln = document.createElement("h4"); //beschreibung des artikels
        beschreibungArtikeln.innerHTML = artikelnSketchbooks[index].beschreibung;
        let preisArtikeln = document.createElement("p"); //preis hinzufugen
        preisArtikeln.innerHTML = artikelnSketchbooks[index].preis;
        let photoArtikeln = document.createElement("img"); //photo des produktes
        photoArtikeln.innerHTML = artikelnSketchbooks[index].photo; //auf dem array zugreifen und photo nehmen
        let buttonEinkaufen = document.createElement("button"); //kaufen button erstellen
        buttonEinkaufen.innerHTML = "In den Einkaufswagen";
    }
})(Aufgabe05 || (Aufgabe05 = {}));
//# sourceMappingURL=dateien.js.map