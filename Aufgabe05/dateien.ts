namespace Aufgabe05 {
interface Artikeln { //deklaration der variable
    name: string;
    beschreibung: string;
    preis: string;
    category: string;
    photo: string;
}
// Artikeln erstelen
let pen: Artikeln = {name: "Faber Castell PITT Artist Pen", photo: "images/markers5.jpg", beschreibung: "Set of 8,black", preis: "15", category: "inking" };
let artistpen: Artikeln = {name: "Faber Castell PITT Artist Pen", photo: "images/markers6.jfif", beschreibung: "Shades of Grey, Set of 6 soft brush markers", preis: "12.50", category: "inking" };
let inkpen: Artikeln = {name: "Ink Pen", photo: "images/ink8.jpg", beschreibung: "Set of 4 different sizes", preis: "15", category: "inking" };
let ink: Artikeln = {name: "Drawing Ink", photo: "images/ink9.jpg", beschreibung: "SDifferent Colours available,78ml", preis: "4", category: "inking" };


let artikelnInking: Artikeln[] = [pen, artistpen, inkpen, ink]; //Array


let watercolors: Artikeln = {name: "Koi Watercolour Paints", photo: "images/koiwater14.jpg", beschreibung: "Travel Set-12 Colours", preis: "15", category: "painting" };
let paints: Artikeln = {name: "Watercolour Paints", photo: "images/paints11.jpg", beschreibung: "Box set of 36 Coours x 59ml", preis: "30", category: "painting" };
let pencils: Artikeln = {name: "Derwent Watercolour Pencils", photo: "images/waterpencils.jpg", beschreibung: "12 Colours,extremely good quality", preis: "20", category: "painting" };
let acryl: Artikeln = {name: "Mont Marte Acrylic Paints", photo: "images/paints12.jpg", beschreibung: "Set of 24 Colours x 36ml", preis: "30", category: "painting" };
let rowney: Artikeln = {name: "Daler Rowney Acrylic Paints", photo: "images/paint13.jpg", beschreibung: "Simply Acrylic Paint Bottle x75ml, Different Colours available", preis: "5", category: "painting" };

let artikelnDrawing: Artikeln[] = [watercolors, paints, pencils, acryl , rowney]; //Array


let sketch: Artikeln = {name: "Sketchbook Hardcover,Spiral", photo: "images/sketchbook1.jpg", beschreibung: "8,5x11; 80 Pages", preis: "10", category: "sketchbooks" };
let sketchrowney: Artikeln = {name: "Sketchbook D.Rowney", photo: "images/Sketchbook2.jpg", beschreibung: "14x11; 80 pages", preis: "15", category: "sketchbooks" };
let spocket: Artikeln = {name: "Pocket Sketchbook R.Downey", photo: "images/Sketchbook3.jpg", beschreibung: "3,5x5,5; 144 Pages", preis: "12", category: "sketchbooks" };
let mixmedia: Artikeln = {name: "Sketchbook Mix Media", photo: "images/mixmedia.jpg", beschreibung: "7x10in; 60 Seiten", preis: "20", category: "sketchbooks" };

let artikelnSketchbooks: Artikeln[] = [sketch, sketchrowney, spocket, mixmedia]; //Array


for (let index = 0; index < artikelnInking.length; index++) {

    let containerArtikeln = document.createElement("div"); //div element für jede artikel
    document.getElementById("inking")?.appendChild(containerArtikeln); //main div von html dokument
    containerArtikeln.id = "content" + index;
    containerArtikeln.className = "boxArtikeln";

    let titelArtikeln = document.createElement("h3"); 
    titelArtikeln.innerHTML = artikelnInking[index].name;
    document.getElementById("content" + index)?.appendChild(titelArtikeln);

    let beschreibungArtikeln = document.createElement("h4"); 
    beschreibungArtikeln.innerHTML = artikelnInking[index].beschreibung;
    document.getElementById("content" + index)?.appendChild(beschreibungArtikeln);

    let preisArtikeln = document.createElement("p"); 
    preisArtikeln.innerHTML = artikelnInking[index].preis + "€";
    document.getElementById("content" + index)?.appendChild(preisArtikeln);

    let photoArtikeln = document.createElement("img"); 
    photoArtikeln.src = artikelnInking[index].photo;
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

    let titelArtikeln = document.createElement("h3"); 
    titelArtikeln.innerHTML = artikelnDrawing[index].name;
    document.getElementById("paintsContent" + index)?.appendChild(titelArtikeln);

    let beschreibungArtikeln = document.createElement("h4"); 
    beschreibungArtikeln.innerHTML = artikelnDrawing[index].beschreibung;
    document.getElementById("paintsContent" + index)?.appendChild(beschreibungArtikeln);

    let preisArtikeln = document.createElement("p"); 
    preisArtikeln.innerHTML = artikelnDrawing[index].preis + "€";
    document.getElementById("paintsContent" + index)?.appendChild(preisArtikeln);

    let photoArtikeln = document.createElement("img"); 
    photoArtikeln.src = artikelnDrawing[index].photo;
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

    let titelArtikeln = document.createElement("h3"); 
    titelArtikeln.innerHTML = artikelnSketchbooks[index].name;
    document.getElementById("sketchContent" + index)?.appendChild(titelArtikeln);

    let beschreibungArtikeln = document.createElement("h4"); 
    beschreibungArtikeln.innerHTML = artikelnSketchbooks[index].beschreibung;
    document.getElementById("sketchContent" + index)?.appendChild(beschreibungArtikeln);

    let preisArtikeln = document.createElement("p"); 
    preisArtikeln.innerHTML = artikelnSketchbooks[index].preis + "€";
    document.getElementById("sketchContent" + index)?.appendChild(preisArtikeln);

    let photoArtikeln = document.createElement("img"); 
    photoArtikeln.src = artikelnSketchbooks[index].photo; 
    document.getElementById("sketchContent" + index)?.appendChild(photoArtikeln);
    photoArtikeln.className = "pictures";
   
    let buttonEinkaufen = document.createElement ("button"); //kaufen button erstellen
    buttonEinkaufen.innerHTML = "In den Einkaufswagen";
    document.getElementById("sketchContent" + index)?.appendChild(buttonEinkaufen);
    }
}