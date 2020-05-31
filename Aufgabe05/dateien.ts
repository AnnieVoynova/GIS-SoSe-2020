namespace Aufgabe05 {
interface ArtikelnInking { //deklaration der variable
    name: string;
    beschreibung: string;
    preis: string;
    category: string;
    photo: string;
}
// Artikeln erstelen
let pen: ArtikelnInking = {name: "Faber Castell PITT Artist Pen", photo: "images/markers5.jpg", beschreibung: "Set of 8,black", preis: "15€", category: "inking" };
let artistpen: ArtikelnInking = {name: "Faber Castell PITT Artist Pen", photo: "images/markers6.jfif", beschreibung: "Shades of Grey, Set of 6 soft brush markers", preis: "12.50€", category: "inking" };
let inkpen: ArtikelnInking = {name: "Ink Pen", photo: "images/ink8.jpg", beschreibung: "Set of 4 different sizes", preis: "15€", category: "inking" };
let ink: ArtikelnInking = {name: "Drawing Ink", photo: "images/ink9.jpg", beschreibung: "SDifferent Colours available,78ml", preis: "4€ per Bottle", category: "inking" };


let artikelnInking: ArtikelnInking[] = [pen, artistpen, inkpen, ink]; //Array

interface ArtikelnDrawing { //deklaration der variable
    name: string;
    beschreibung: string;
    preis: string;
    category: string;
    photo: string;
}
// Artikeln erstelen
let watercolors: ArtikelnDrawing = {name: "Koi Watercolour Paints", photo: "images/koiwater14.jpg", beschreibung: "Travel Set-12 Colours", preis: "15€", category: "painting" };
let paints: ArtikelnDrawing = {name: "Watercolour Paints", photo: "images/paints11.jpg", beschreibung: "Box set of 36 Coours x 59ml", preis: "30€", category: "painting" };
let pencils: ArtikelnDrawing = {name: "Derwent Watercolour Pencils", photo: "images/waterpencils.jpg", beschreibung: "12 Colours,extremely good quality", preis: "20€", category: "painting" };
let acryl: ArtikelnDrawing = {name: "Mont Marte Acrylic Paints", photo: "images/paints12.jpg", beschreibung: "Set of 24 Colours x 36ml", preis: "30€", category: "painting" };
let rowney: ArtikelnDrawing = {name: "Daler Rowney Acrylic Paints", photo: "images/paint13.jpg", beschreibung: "Simply Acrylic Paint Bottle x75ml, Different Colours available", preis: "Preis:5€ per Bottle", category: "painting" };

let artikelnDrawing: ArtikelnDrawing[] = [watercolors, paints, pencils, acryl , rowney]; //Array


interface ArtikelnSketchbooks { //deklaration der variable
    name: string;
    beschreibung: string;
    preis: string;
    category: string;
    photo: string;
}
// Artikeln erstelen
let sketch: ArtikelnSketchbooks = {name: "Sketchbook Hardcover,Spiral", photo: "images/sketchbook1.jpg", beschreibung: "8,5x11; 80 Pages", preis: "10€", category: "sketchbooks" };
let sketchrowney: ArtikelnSketchbooks = {name: "Sketchbook D.Rowney", photo: "images/Sketchbook2.jpg", beschreibung: "14x11; 80 pages", preis: "15€", category: "sketchbooks" };
let spocket: ArtikelnSketchbooks = {name: "Pocket Sketchbook R.Downey", photo: "images/Sketchbook3.jpg", beschreibung: "3,5x5,5; 144 Pages", preis: "12€", category: "sketchbooks" };
let mixmedia: ArtikelnSketchbooks = {name: "Sketchbook Mix Media", photo: "images/mixmedia.jpg", beschreibung: "7x10in; 60 Seiten", preis: "20€", category: "sketchbooks" };

let artikelnSketchbooks: ArtikelnSketchbooks[] = [sketch, sketchrowney, spocket, mixmedia]; //Array

//Kategorie Inking
for (let index = 0; index < artikelnInking.length; index++) {

    let containerArtikeln = document.createElement("div"); //div element für jede artikel
    document.getElementById("inking")?.appendChild(containerArtikeln); //main div von html dokument
    containerArtikeln.id = "content" + index;
    containerArtikeln.className = "boxArtikeln";

    let titelArtikeln = document.createElement("h3"); //titel des artikels
    titelArtikeln.innerHTML = artikelnInking[index].name;
    document.getElementById("content" + index)?.appendChild(titelArtikeln);

    let beschreibungArtikeln = document.createElement("h4"); //beschreibung des artikels
    beschreibungArtikeln.innerHTML = artikelnInking[index].beschreibung;
    document.getElementById("content" + index)?.appendChild(beschreibungArtikeln);

    let preisArtikeln = document.createElement("p"); //preis hinzufugen
    preisArtikeln.innerHTML = artikelnInking[index].preis;
    document.getElementById("content" + index)?.appendChild(preisArtikeln);

    let photoArtikeln = document.createElement("img"); //photo des produktes
    photoArtikeln.src = artikelnInking[index].photo; //auf dem array zugreifen und photo nehmen
    document.getElementById("content" + index)?.appendChild(photoArtikeln);
    photoArtikeln.className = "pictures";
   
    let buttonEinkaufen = document.createElement ("button"); //kaufen button erstellen
    buttonEinkaufen.innerHTML = "In den Einkaufswagen";
    document.getElementById("content" + index)?.appendChild(buttonEinkaufen);
}
for (let index = 0; index < artikelnDrawing.length; index++) {
    let containerArtikeln = document.createElement("div"); //div element für jede artikel
    document.getElementById("painting")?.appendChild(containerArtikeln); //main div von html dokument
    containerArtikeln.id = "paintsContent" + index;
    containerArtikeln.className = "boxArtikeln";

    let titelArtikeln = document.createElement("h3"); //titel des artikels
    titelArtikeln.innerHTML = artikelnDrawing[index].name;
    document.getElementById("paintsContent" + index)?.appendChild(titelArtikeln);

    let beschreibungArtikeln = document.createElement("h4"); //beschreibung des artikels
    beschreibungArtikeln.innerHTML = artikelnDrawing[index].beschreibung;
    document.getElementById("paintsContent" + index)?.appendChild(beschreibungArtikeln);

    let preisArtikeln = document.createElement("p"); //preis hinzufugen
    preisArtikeln.innerHTML = artikelnDrawing[index].preis;
    document.getElementById("paintsContent" + index)?.appendChild(preisArtikeln);

    let photoArtikeln = document.createElement("img"); //photo des produktes
    photoArtikeln.src = artikelnDrawing[index].photo; //auf dem array zugreifen und photo nehmen
    document.getElementById("paintsContent" + index)?.appendChild(photoArtikeln);
    photoArtikeln.className = "pictures";
   
    let buttonEinkaufen = document.createElement ("button"); //kaufen button erstellen
    buttonEinkaufen.innerHTML = "In den Einkaufswagen";
    document.getElementById("paintsContent" + index)?.appendChild(buttonEinkaufen);

    }
for (let index = 0; index < artikelnSketchbooks.length; index++) {

    let containerArtikeln = document.createElement("div"); //div element für jede artikel
    document.getElementById("sketchbooks")?.appendChild(containerArtikeln); //main div von html dokument
    containerArtikeln.id = "sketchContent" + index;
    containerArtikeln.className = "boxArtikeln";

    let titelArtikeln = document.createElement("h3"); //titel des artikels
    titelArtikeln.innerHTML = artikelnSketchbooks[index].name;
    document.getElementById("sketchContent" + index)?.appendChild(titelArtikeln);

    let beschreibungArtikeln = document.createElement("h4"); //beschreibung des artikels
    beschreibungArtikeln.innerHTML = artikelnSketchbooks[index].beschreibung;
    document.getElementById("sketchContent" + index)?.appendChild(beschreibungArtikeln);

    let preisArtikeln = document.createElement("p"); //preis hinzufugen
    preisArtikeln.innerHTML = artikelnSketchbooks[index].preis;
    document.getElementById("sketchContent" + index)?.appendChild(preisArtikeln);

    let photoArtikeln = document.createElement("img"); //photo des produktes
    photoArtikeln.src = artikelnSketchbooks[index].photo; //auf dem array zugreifen und photo nehmen
    document.getElementById("sketchContent" + index)?.appendChild(photoArtikeln);
    photoArtikeln.className = "pictures";
   
    let buttonEinkaufen = document.createElement ("button"); //kaufen button erstellen
    buttonEinkaufen.innerHTML = "In den Einkaufswagen";
    document.getElementById("sketchContent" + index)?.appendChild(buttonEinkaufen);
    }
}