namespace Aufgabe08 {

    let button: HTMLButtonElement; //= document.getElementById("button");
    button = <HTMLButtonElement> document.getElementById("button");
    button.addEventListener("click", handleSend);

    let formData: FormData = new FormData(document.forms[0]);

    async function handleSend(): Promise <void> { //function,die aufgeruft wird wenn man auf den button klickt
        //getData(await sendData());
        let url: string = "https://testgissomse2020.herokuapp.com/";
        // tslint:disable-next-line: no-any //quickfix "any" error
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        let ausgabe: string = await response.text();
        //let ausgabe = response;
        console.log(ausgabe); 
    }
    
      
    /*for (let entry of formData) {
    console.log(entry);
    console.log("name: " + entry[0]);
    console.log("value: " + entry[1]);
    }*/
    
    
    /*async function sendData(): Promise<string> { //Daten asynchron senden
          let formData: FormData = new FormData(document.forms[0]);
          let url: string = "https://testgissomse2020.herokuapp.com/";
          let query: URLSearchParams = new URLSearchParams(<any>formData);
          url = url + "?" + query.toString();
          return url;
    }

    async function getData(_url: RequestInfo): Promise<void> { //die response machen
        let response = await fetch(_url);
        let ausgabe = await response.text();
        console.log(ausgabe);
    } */
    
}