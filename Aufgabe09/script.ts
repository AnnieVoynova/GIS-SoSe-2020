namespace Aufgabe09 {

    let button: HTMLButtonElement; //= document.getElementById("button");
    button = <HTMLButtonElement> document.getElementById("html");
    button.addEventListener("click", handleSend);
    let buttonJs: HTMLButtonElement;
    buttonJs = <HTMLButtonElement> document.getElementById("json");
    buttonJs.addEventListener("click", handleJson);
    
    //HTML button
    async function handleSend(): Promise <void> { 
        //console.log("test1");
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://testgissomse2020.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/html" + "?" + query.toString();
        let response: Response = await fetch(url);
        let ausgabe: string = await response.text();
        let console: HTMLElement = <HTMLElement>document.getElementById("consoleAusgabe");  
        console.innerHTML = ausgabe;
        //console.log(ausgabe);
        
    }
    //json button
    async function handleJson(): Promise <void> {
         //console.log("test1");
         let formData: FormData = new FormData(document.forms[0]);
         let url: string = "https://testgissomse2020.herokuapp.com/";
         // tslint:disable-next-line: no-any
         let query: URLSearchParams = new URLSearchParams(<any>formData);
         url = url + "/json" + "?" + query.toString();
         let response: Response = await fetch(url);
         let ausgabe: string = await response.json(); //gibt ein error
         //let final = JSON.parse(ausgabe); //hab diese in internet gefunden
         console.log(ausgabe);
    }
} 
