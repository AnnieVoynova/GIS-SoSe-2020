"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A11Server = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var A11Server;
(function (A11Server) {
    let formData;
    let mongoUrl = "mongodb+srv://userdb:<dkrjf5678>@gis-ist-geil.qtn3c.mongodb.net/<dbname>?retryWrites=true&w=majority";
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    function startServer() {
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(port);
    }
    startServer();
    connectToDatabase(mongoUrl);
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        formData = mongoClient.db("Test").collection("Students");
        console.log("Connection to Database", formData != undefined);
    }
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/datenbank") {
                formData.insertOne(url.query);
            }
            if (url.pathname == "/pull") {
                //let urlJson: string = JSON.stringify(url.query);
                //_response.write(urlJson); 
                _response.write(JSON.stringify(await formData.find().toArray()));
            }
        }
        _response.end();
    }
})(A11Server = exports.A11Server || (exports.A11Server = {}));
//# sourceMappingURL=server.js.map