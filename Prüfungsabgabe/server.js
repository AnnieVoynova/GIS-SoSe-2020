"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A09Server = void 0;
const Http = require("http");
const Url = require("url");
var A09Server;
(function (A09Server) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    //Wenn es kein port gibt dann ist die automatisch 8100
    if (!port)
        port = 8100;
    // Erstellung des Servers
    let server = Http.createServer();
    // Create a listener connected to handleRequest service method
    server.addListener("request", handleRequest);
    // Create a listener connected to handleRequest service method
    server.addListener("listening", handleListen);
    //puts the server into listen mode
    server.listen(port);
    //functions
    //console log wenn die server gestartet wird
    function handleListen() {
        console.log("Listening");
    }
    //function die der request nimmt und antwortet
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        //making the head of the response
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //making the body of the response
        //_response.write(_request.url);
        //console.log(_request.url);
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/html") {
                for (let key in url.query) {
                    _response.write(key + ":" + url.query[key] + " <br/>");
                }
            }
            if (url.pathname == "/json") {
                let urlJson = JSON.stringify(url.query);
                _response.write(urlJson);
            }
        }
        _response.end();
    }
})(A09Server = exports.A09Server || (exports.A09Server = {}));
//# sourceMappingURL=server.js.map