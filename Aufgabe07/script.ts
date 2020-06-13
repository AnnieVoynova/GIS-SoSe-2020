namespace Aufgabe07 {
    let countArtikeln: number = 0;
    let gesamtPreis: number = 0;
   
     //Aufgabe 07 Teil 1
    export function artikelnErstellen(): void {

      for (let index: number = 0; index < artikel.length; index++) {
        let containerArtikeln: HTMLDivElement = document.createElement("div"); //div element für jede artikel
        containerArtikeln.className = "boxArtikeln";
    
        if ( artikel[index].category == "inking") {
        document.getElementById("inking")?.appendChild(containerArtikeln);
        }
        else if (artikel[index].category == "painting") {
        document.getElementById("painting")?.appendChild(containerArtikeln);
        }
        else {
            document.getElementById("sketchbooks")?.appendChild(containerArtikeln);
        } 
    
        let titelArtikeln: HTMLHeadingElement = document.createElement("h3"); 
        titelArtikeln.innerHTML = artikel[index].name;
        containerArtikeln.appendChild(titelArtikeln);
    
        let beschreibungArtikeln: HTMLHeadingElement = document.createElement("h4"); 
        beschreibungArtikeln.innerHTML = artikel[index].beschreibung;
        containerArtikeln.appendChild(beschreibungArtikeln);
    
        let preisArtikeln: HTMLParagraphElement = document.createElement("p"); 
        preisArtikeln.innerHTML = artikel[index].preis + "€";
        containerArtikeln.appendChild(preisArtikeln);
    
        let photoArtikeln: HTMLImageElement = document.createElement("img"); 
        photoArtikeln.src = artikel[index].photo;
        containerArtikeln.appendChild(photoArtikeln);
        photoArtikeln.className = "pictures";
       
        let buttonEinkaufen:  HTMLButtonElement = document.createElement ("button"); //kaufen button erstellen
        buttonEinkaufen.innerHTML = "In den Einkaufswagen";
        containerArtikeln.appendChild(buttonEinkaufen);
        buttonEinkaufen.setAttribute("index", index.toString());
        buttonEinkaufen.addEventListener("click", handleZahl);
      }
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
        gesamtPreis = gesamtPreis + artikel[arvar].preis;
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
    //Aufgabe07 Teil 2
    
    }