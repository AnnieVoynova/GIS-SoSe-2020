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
}