namespace Aufgabe08 {
    let button: HTMLButtonElement; //= document.getElementById("button");
    button = <HTMLButtonElement> document.getElementById("button");
    button.addEventListener("click", handleSend);

    //functions
    async function handleSend(): Promise <void> { //function,die aufgeruft wird wenn man auf den button klickt
        getData(await sendData());
    }
    
    async function sendData(): Promise<string> { //Daten asynchron senden
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
    }
    
}