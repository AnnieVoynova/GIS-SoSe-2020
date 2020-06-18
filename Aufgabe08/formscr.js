"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    let button; //= document.getElementById("button");
    button = document.getElementById("button");
    button.addEventListener("click", handleSend);
    //functions
    function handleSend() {
        getResponse("https://testgissomse2020.herokuapp.com/");
    }
    async function getResponse(_url) {
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=formscr.js.map