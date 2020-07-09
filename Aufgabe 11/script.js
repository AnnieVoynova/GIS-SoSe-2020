"use strict";
let button; //= document.getElementById("button");
button = document.getElementById("buttonData");
button.addEventListener("click", handleSend);
let buttonJs;
buttonJs = document.getElementById("button");
buttonJs.addEventListener("click", handlePull);
async function handleSend() {
    //console.log("test1");
    let formData = new FormData(document.forms[0]);
    let url = "https://testgissomse2020.herokuapp.com";
    // tslint:disable-next-line: no-any
    let query = new URLSearchParams(formData);
    url = url + "/datenbank" + "?" + query.toString();
    await fetch(url, { mode: "cors" });
}
async function handlePull() {
    let url = "https://testgissomse2020.herokuapp.com";
    let response = await fetch(url, { mode: "cors" });
    let ausgabeString = await response.text();
    let console = document.getElementById("serverAntwort");
    console.innerHTML = ausgabeString;
}
//# sourceMappingURL=script.js.map