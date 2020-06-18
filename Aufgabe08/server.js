"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A08Server = void 0;
const Http = require("http");
var A08Server;
(function (A08Server) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    // We create a server and assign it to server
    let server = Http.createServer();
    // Create a listener connected to handleRequest service method
    server.addListener("request", handleRequest);
    // Create a listener connected to handleRequest service method
    server.addListener("listening", handleListen);
    // puts the server into listen mode
    server.listen(port);
    // Не поема параметри за request и response
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        // композираме главата на респонса
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //композираме тялото на респонса
        _response.write(_request.url);
        console.log(_request.url);
        _response.end();
    }
})(A08Server = exports.A08Server || (exports.A08Server = {}));
//# sourceMappingURL=server.js.map