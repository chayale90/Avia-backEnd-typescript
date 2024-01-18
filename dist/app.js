var express = require("express");
var app = express();
var path = require("path");
var http = require("http");
var cors = require("cors");
var routesInit = require("./routes/configRoutes").routesInit;
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
routesInit(app);
var server = http.createServer(app);
var port = process.env.PORT || 3003;
server.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
module.exports = app;
//# sourceMappingURL=app.js.map