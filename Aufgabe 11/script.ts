let button: HTMLButtonElement; //= document.getElementById("button");
button = <HTMLButtonElement> document.getElementById("buttonData");
button.addEventListener("click", handleSend);
let buttonJs: HTMLButtonElement;
buttonJs = <HTMLButtonElement> document.getElementById("button");
buttonJs.addEventListener("click", handlePull);

async function handleSend(): Promise <void> { 
    //console.log("test1");
    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "https://testgissomse2020.herokuapp.com";
    // tslint:disable-next-line: no-any
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url = url + "/datenbank" + "?" + query.toString();
    await fetch(url, {mode: "cors"});
}

async function handlePull(): Promise<void> {
    let url: string = "https://testgissomse2020.herokuapp.com";
    let response: Response = await fetch(url, {mode: "cors"});
    let ausgabeString: string = await response.text();
    let console: HTMLElement = <HTMLElement>document.getElementById("serverAntwort");  
    console.innerHTML = ausgabeString;

}