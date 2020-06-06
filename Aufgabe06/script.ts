namespace Aufgabe06 {
interface Artikeln { //deklaration der variable
    name: string;
    beschreibung: string;
    preis: number;
    category: string;
    photo: string;
}

//variablen für Aufgabe 6
let countArtikeln: number = 0;
let gesamtPreis: number = 0;

// Artikeln erstelen
let pen: Artikeln = {name: "Faber Castell PITT Artist Pen", photo: "images/markers5.jpg", beschreibung: "Set of 8,black", preis: 15, category: "inking" };
let artistpen: Artikeln = {name: "Faber Castell PITT Artist Pen", photo: "images/markers6.jfif", beschreibung: "Shades of Grey, Set of 6 soft brush markers", preis: 12.50, category: "inking" };
let inkpen: Artikeln = {name: "Ink Pen", photo: "images/ink8.jpg", beschreibung: "Set of 4 different sizes", preis: 15, category: "inking" };
let ink: Artikeln = {name: "Drawing Ink", photo: "images/ink9.jpg", beschreibung: "SDifferent Colours available,78ml", preis: 4, category: "inking" };

let watercolors: Artikeln = {name: "Koi Watercolour Paints", photo: "images/koiwater14.jpg", beschreibung: "Travel Set-12 Colours", preis: 15, category: "painting" };
let paints: Artikeln = {name: "Watercolour Paints", photo: "images/paints11.jpg", beschreibung: "Box set of 36 Coours x 59ml", preis: 30, category: "painting" };
let pencils: Artikeln = {name: "Derwent Watercolour Pencils", photo: "images/waterpencils.jpg", beschreibung: "12 Colours,extremely good quality", preis: 20, category: "painting" };
let acryl: Artikeln = {name: "Mont Marte Acrylic Paints", photo: "images/paints12.jpg", beschreibung: "Set of 24 Colours x 36ml", preis: 30, category: "painting" };
let rowney: Artikeln = {name: "Daler Rowney Acrylic Paints", photo: "images/paint13.jpg", beschreibung: "Simply Acrylic Paint Bottle x75ml, Different Colours available", preis: 5, category: "painting" };

let sketch: Artikeln = {name: "Sketchbook Hardcover,Spiral", photo: "images/sketchbook1.jpg", beschreibung: "8,5x11; 80 Pages", preis: 10, category: "sketchbooks" };
let sketchrowney: Artikeln = {name: "Sketchbook D.Rowney", photo: "images/Sketchbook2.jpg", beschreibung: "14x11; 80 pages", preis: 15, category: "sketchbooks" };
let spocket: Artikeln = {name: "Pocket Sketchbook R.Downey", photo: "images/Sketchbook3.jpg", beschreibung: "3,5x5,5; 144 Pages", preis: 12, category: "sketchbooks" };
let mixmedia: Artikeln = {name: "Sketchbook Mix Media", photo: "images/mixmedia.jpg", beschreibung: "7x10in; 60 Seiten", preis: 20, category: "sketchbooks" };

let artikelnAll: Artikeln[] = [pen, artistpen, inkpen, ink, watercolors, paints, pencils, acryl , rowney, sketch, sketchrowney, spocket, mixmedia] ; //Array mit allen Artikeln

for (let index: number = 0; index < artikelnAll.length; index++) {
    let containerArtikeln: HTMLDivElement = document.createElement("div"); //div element für jede artikel
    containerArtikeln.className = "boxArtikeln";

    if ( artikelnAll[index].category == "inking") {
    document.getElementById("inking")?.appendChild(containerArtikeln);
    }
    else if (artikelnAll[index].category == "painting") {
    document.getElementById("painting")?.appendChild(containerArtikeln);
    }
    else {
        document.getElementById("sketchbooks")?.appendChild(containerArtikeln);
    } 

    let titelArtikeln: HTMLHeadingElement = document.createElement("h3"); 
    titelArtikeln.innerHTML = artikelnAll[index].name;
    containerArtikeln.appendChild(titelArtikeln);

    let beschreibungArtikeln: HTMLHeadingElement = document.createElement("h4"); 
    beschreibungArtikeln.innerHTML = artikelnAll[index].beschreibung;
    containerArtikeln.appendChild(beschreibungArtikeln);

    let preisArtikeln: HTMLParagraphElement = document.createElement("p"); 
    preisArtikeln.innerHTML = artikelnAll[index].preis + "€";
    containerArtikeln.appendChild(preisArtikeln);

    let photoArtikeln: HTMLImageElement = document.createElement("img"); 
    photoArtikeln.src = artikelnAll[index].photo;
    containerArtikeln.appendChild(photoArtikeln);
    photoArtikeln.className = "pictures";
   
    let buttonEinkaufen:  HTMLButtonElement = document.createElement ("button"); //kaufen button erstellen
    buttonEinkaufen.innerHTML = "In den Einkaufswagen";
    containerArtikeln.appendChild(buttonEinkaufen);
    buttonEinkaufen.setAttribute("index", index.toString());
    buttonEinkaufen.addEventListener("click", handleZahl);
}

  //Aufgabe 06 Teil 1 
let zahl: HTMLSpanElement = document.getElementById("zahl") as HTMLSpanElement;
function handleZahl(_event: Event): void {  
    countArtikeln++ ; //Zahl der Artikeln
    zahl.setAttribute("style", "visibility: visible" );
    zahl.innerHTML = " " + countArtikeln;

    let target: HTMLElement = (<HTMLElement>_event.target); //Gesamtpreis
    let wclick: string = " " + target.getAttribute("index"); //klärt auf welchem button man gecklickt hat
    let arvar: number = + wclick; //string im number umwandeln
    gesamtPreis = gesamtPreis + artikelnAll[arvar].preis;
    console.log("Gesamtpreis:" + gesamtPreis); 
 }
let inks: HTMLElement = document.getElementById("ink") as HTMLElement;
let paint: HTMLElement = document.getElementById("paint") as HTMLElement;
let sketchs: HTMLElement = document.getElementById("sketch") as HTMLElement;
let all: HTMLElement = document.getElementById("alles") as HTMLElement;

inks.addEventListener("click", handleKatInk);
paint.addEventListener("click", handleKatPaint);
sketchs.addEventListener("click", handleKatSketch);
all.addEventListener("click", handleKatAll);

function handleKatInk(_event: Event): void {
    document.getElementById("inking")?.setAttribute("style", "display: normal" );
    document.getElementById("painting")?.setAttribute("style", "display: none" );
    document.getElementById("sketchbooks")?.setAttribute("style", "display: none" );
    document.getElementById("uber1")?.setAttribute("style", "display: normal" );
    document.getElementById("uber2")?.setAttribute("style", "display: none" );
    document.getElementById("uber3")?.setAttribute("style", "display: none" );
}
function handleKatPaint(_event: Event): void {
    document.getElementById("inking")?.setAttribute("style", "display: none" );
    document.getElementById("painting")?.setAttribute("style", "display: normal" );
    document.getElementById("sketchbooks")?.setAttribute("style", "display: none" );
    document.getElementById("uber2")?.setAttribute("style", "display: normal" );
    document.getElementById("uber1")?.setAttribute("style", "display: none" );
    document.getElementById("uber3")?.setAttribute("style", "display: none" );
}
function handleKatSketch(_event: Event): void {
    document.getElementById("inking")?.setAttribute("style", "display: none" );
    document.getElementById("painting")?.setAttribute("style", "display: none" );
    document.getElementById("sketchbooks")?.setAttribute("style", "display: normal" );
    document.getElementById("uber1")?.setAttribute("style", "display: none" );
    document.getElementById("uber2")?.setAttribute("style", "display: none" );
    document.getElementById("uber3")?.setAttribute("style", "display: normal" );
}
function handleKatAll(_event: Event): void { 
    document.getElementById("inking")?.setAttribute("style", "display: normal" );
    document.getElementById("painting")?.setAttribute("style", "display: normal" );
    document.getElementById("sketchbooks")?.setAttribute("style", "display: normal" );
    document.getElementById("uber1")?.setAttribute("style", "display: normal" );
    document.getElementById("uber2")?.setAttribute("style", "display: normal" );
    document.getElementById("uber3")?.setAttribute("style", "display: normal" );
    
}

}


