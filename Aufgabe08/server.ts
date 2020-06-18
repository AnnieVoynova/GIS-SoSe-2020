import * as Http from "http";

export namespace A08Server {
  console.log("Starting server");
  let port: number = Number(process.env.PORT);
  //Wenn es kein port gibt dann ist die automatisch 8100
  if (!port)
    port = 8100;
  // Erstellung des Servers
  let server: Http.Server = Http.createServer();
  // Create a listener connected to handleRequest service method
  server.addListener("request", handleRequest);
  // Create a listener connected to handleRequest service method
  server.addListener("listening", handleListen);
   //puts the server into listen mode
  server.listen(port);
  
   //functions
   //console log wenn die server gestartet wird
  function handleListen(): void {
    console.log("Listening");
  }
  //function die der request nimmt und antwortet
  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("I hear voices!");
      //making the head of the response
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");
     
     //making the body of the response
    _response.write(_request.url);
    console.log(_request.url);

    _response.end();
  }
}