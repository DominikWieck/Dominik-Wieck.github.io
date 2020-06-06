"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http"); // importiere mir alles 
const Url = require("url");
const Mongo = require("mongodb");
var L07_Haushaltshilfe;
(function (L07_Haushaltshilfe) {
    let orders;
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    let databaseUrl = "mongodb+srv://<username>:<password>@theusualyouknow-v2ul2.mongodb.net/<dbname>?retryWrites=true&w=majority";
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        let server = Http.createServer();
        console.log("Server starting on port:" + _port);
        server.listen(_port);
        server.addListener("request", handleRequest); //Wenn du eine request erhältst dann rufe auf
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        mongoClient.connect();
        await mongoClient.connect();
        orders = mongoClient.db("Haushaltshilfe_data").collection("Orders");
        console.log("Database connection", orders != undefined);
    }
    function handleRequest(_request, _response) {
        console.log("What's Up?");
        _response.setHeader("content.type", "text/html; charset-utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
            }
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
            storeOrder(url.query);
        }
        _response.write("This is my response");
        _response.end();
    }
    function storeOrder(_order) {
        orders.insert(_order);
    }
})(L07_Haushaltshilfe = exports.L07_Haushaltshilfe || (exports.L07_Haushaltshilfe = {}));
//# sourceMappingURL=server.js.map