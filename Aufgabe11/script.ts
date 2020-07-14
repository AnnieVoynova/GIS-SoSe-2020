namespace Aufgabe11 {
let button: HTMLButtonElement; //= document.getElementById("button");
button = <HTMLButtonElement> document.getElementById("buttonData");
button.addEventListener("click", handleSend);
let buttonJs: HTMLButtonElement;
buttonJs = <HTMLButtonElement> document.getElementById("button");
buttonJs.addEventListener("click", handlePull);
let buttonDel: HTMLButtonElement;
buttonDel = <HTMLButtonElement> document.getElementById("button-delete");
buttonDel.addEventListener("click", handleDelete);

async function handleSend(): Promise <void> { 
    //console.log("test1");
    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "https://testgissomse2020.herokuapp.com";
    // tslint:disable-next-line: no-any
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url = url + "/datenbank" + "?" + query.toString();
    await fetch(url);
}

async function handlePull(): Promise<void> {
    let url: string = "https://testgissomse2020.herokuapp.com";
    url = url + "/pull";
    let response: Response = await fetch(url);
    let ausgabeString: string = await response.text();
    let console: HTMLElement = <HTMLElement>document.getElementById("serverAntwort");  
    console.innerHTML = ausgabeString;

}
async function handleDelete(): Promise <void> { 
    //console.log("test1");
    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "https://testgissomse2020.herokuapp.com";
    // tslint:disable-next-line: no-any
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url = url + "/delete" + "?" + query.toString();
    let response: Response = await fetch(url);
    let ausgabeString: string = await response.text();
    let console: HTMLElement = <HTMLElement>document.getElementById("serverAntwort");  
    console.innerHTML = ausgabeString;
}
}