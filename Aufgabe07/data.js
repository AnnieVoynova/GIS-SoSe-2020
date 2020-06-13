"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    async function communicate(_url) {
        let response = await fetch(_url);
        Aufgabe07.artikel = await response.json();
        Aufgabe07.artikelnErstellen();
    }
    communicate("dateien.json");
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=data.js.map