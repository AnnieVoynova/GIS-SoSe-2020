namespace Aufgabe08 {

    let button: HTMLButtonElement; //= document.getElementById("button");
    button = <HTMLButtonElement> document.getElementById("button");
    button.addEventListener("click", handleSend);

    
    async function handleSend(): Promise <void> { //function,die aufgeruft wird wenn man auf den button klickt
        //console.log("test1");
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://testgissomse2020.herokuapp.com/";
        // tslint:disable-next-line: no-any //quickfix "any" error
       // console.log(formData.get("name"));
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        let ausgabe: string = await response.text();
        console.log(ausgabe);
        //let ausgabe = response;
        //console.log(ausgabe); 
    }
}
    
      
    