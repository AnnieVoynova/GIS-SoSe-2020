"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    let button; //= document.getElementById("button");
    button = document.getElementById("button");
    button.addEventListener("click", handleSend);
    //functions
    async function handleSend() {
        getData(await sendData());
    }
    async function sendData() {
        let formData = new FormData(document.forms[0]);
        let url = "https://testgissomse2020.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        return url;
    }
    async function getData(_url) {
        let response = await fetch(_url);
        let ausgabe = await response.text();
        console.log(ausgabe);
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=formscr.js.map