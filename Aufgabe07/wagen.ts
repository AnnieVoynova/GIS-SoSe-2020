namespace Aufgabe07 {

//let gesamtPreis: number = 0;
for (let i: number = 1; i <= localStorage.length / 3; i++) { //Artikeln erstellen
    let containerArtikeln: HTMLDivElement = document.createElement("div");
    containerArtikeln.className = "boxArtikeln";
    document.getElementById("grid")?.appendChild(containerArtikeln);

    let titelArtikeln: HTMLHeadingElement = document.createElement("h3"); 
    titelArtikeln.innerHTML = "" + localStorage.getItem("namen" + i); //auf local storage zugreifen
    containerArtikeln.appendChild(titelArtikeln);

    let preisArtikeln: HTMLParagraphElement = document.createElement("p"); 
    preisArtikeln.innerHTML = "" + localStorage.getItem("price" + i) + "€"; //auf local storage zugreifen
    containerArtikeln.appendChild(preisArtikeln);

    let photoArtikeln: HTMLImageElement = document.createElement("img"); 
    photoArtikeln.src =  "" + localStorage.getItem("picture" + i); //auf local storage zugreifen
    containerArtikeln.appendChild(photoArtikeln);
    photoArtikeln.className = "pictures";
   
    let buttonWeg:  HTMLButtonElement = document.createElement ("button"); //löschen button
    buttonWeg.innerHTML = "Löschen";
    containerArtikeln.appendChild(buttonWeg);
    buttonWeg.setAttribute("index", i.toString());
    buttonWeg.addEventListener("click", elementLoschen);

    //gesamtPreis = "" + localStorage.getItem("price" + i);
  }

let buttonLoschen: HTMLButtonElement = document.createElement ("button");
buttonLoschen.innerHTML = "Alles löschen";
document.getElementById("artikelnCont")?.appendChild(buttonLoschen);
buttonLoschen.addEventListener("click", allesLoschen);


//gesamtPreis = gesamtPreis + artikel[ind].preis;
//console.log("Gesamtpreis:" + gesamtPreis); 

function allesLoschen(_event: Event): void { //funktion zum alles loschen
    localStorage.clear();
    location.reload();
}
function elementLoschen(_event: Event): void { //funktion einzelne Artikeln loschen
    localStorage.removeItem("namen");
    localStorage.removeItem("price");
    localStorage.removeItem("picture");
}
}