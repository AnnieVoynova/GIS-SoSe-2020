/*import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Aufgabe11 {
  
  console.log("Starting server");

  let formData: Mongo.Collection;
  let mongoUrl: string = "mongodb+srv://userdb:dkrjf5678@gis-ist-geil.qtn3c.mongodb.net/test?retryWrites=true&w=majority";

 
  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;

  function startServer(): void {  
        
      let server: Http.Server = Http.createServer(); 

      server.addListener("request", handleRequest);    
      server.addListener("listening", handleListen);  
      server.listen(port);
  }

  
  startServer();
  connectToDatabase(mongoUrl);

  async function connectToDatabase(_url: string): Promise<void> {
    let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();
    formData =  mongoClient.db("test").collection("students");
    console.log("Connection to Database", formData != undefined);
  }

  function handleListen(): void {
      console.log("Listening");
    }
 
  async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
      console.log("I hear voices!");
      _response.setHeader("content-type", "text/html; charset=utf-8");
      _response.setHeader("Access-Control-Allow-Origin", "*");
       
  
      if (_request.url) {
          let url: Url.UrlWithParsedQuery  = Url.parse(_request.url, true);
  
          if (url.pathname == "/datenbank") { 
            formData.insertOne(url.query);     
        } 
          if (url.pathname == "/pull") {
          //let urlJson: string = JSON.stringify(url.query);
          //_response.write(urlJson); 
         _response.write(JSON.stringify(await JSON.stringify(formData.find().toArray())));
          }
      }
      _response.end();
    } 
  }    
*/
import * as Http from "http";
import * as url from "url";
import * as Mongo from "mongodb";

export namespace Aufgabe11 {

    console.log("Starting server");
    //lokaler Server wird aufgerufen
    let port: number = Number(process.env.PORT);

    if (!port)
        port = 8100;

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen); 
    server.listen(port);

    function handleListen(): void {
        console.log("Listening");
    }

    let databaseURL: string = "mongodb+srv://userdb:dkrjf5678@gis-ist-geil.qtn3c.mongodb.net/test?retryWrites=true&w=majority";
    connect(databaseURL);

    let orders: Mongo.Collection;

    async function connect(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("test").collection("students");
        console.log("Connection ", orders != undefined);
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let q: url.UrlWithParsedQuery = url.parse(_request.url, true);

            //um sich die vorhandenen Daten anzeigen zu lassen
            if (q.pathname == "/pull") {
                let storage: Mongo.Cursor<string> = orders.find();
                let storageArray: string [] = await storage.toArray();
                _response.write(JSON.stringify(storageArray));
            }

            //um etwas hinzuzufügen
            else if (q.pathname == "/datenbank") {
                orders.insertOne(q.query);
            }

            console.log("Hat geklappt!");
            _response.end();
        }
    }
}
