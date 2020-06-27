"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    let button; //= document.getElementById("button");
    button = document.getElementById("html");
    button.addEventListener("click", handleSend);
    let buttonJs;
    buttonJs = document.getElementById("json");
    buttonJs.addEventListener("click", handleJson);
    //HTML button
    async function handleSend() {
        //console.log("test1");
        let formData = new FormData(document.forms[0]);
        let url = "https://testgissomse2020.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url = url + "/html" + "?" + query.toString();
        let response = await fetch(url);
        let ausgabe = await response.text();
        let console = document.getElementById("consoleAusgabe");
        console.innerHTML = ausgabe;
        //console.log(ausgabe);
    }
    //json button
    async function handleJson() {
        //console.log("test1");
        let formData = new FormData(document.forms[0]);
        let url = "https://testgissomse2020.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url = url + "/json" + "?" + query.toString();
        let response = await fetch(url);
        let ausgabe = await response.json(); //gibt ein error
        //let final = JSON.parse(ausgabe); //hab diese in internet gefunden
        console.log(ausgabe);
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=script.js.map