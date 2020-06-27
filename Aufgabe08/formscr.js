"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    let button; //= document.getElementById("button");
    button = document.getElementById("button");
    button.addEventListener("click", handleSend);
    async function handleSend() {
        //console.log("test1");
        let formData = new FormData(document.forms[0]);
        let url = "https://testgissomse2020.herokuapp.com/";
        // tslint:disable-next-line: no-any //quickfix "any" error
        // console.log(formData.get("name"));
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let ausgabe = await response.text();
        console.log(ausgabe);
        //let ausgabe = response;
        //console.log(ausgabe); 
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=formscr.js.map