const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
const cors = require("cors");
const { routesInit } = require("./routes/configRoutes");
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
routesInit(app);
const server = http.createServer(app);
let port = process.env.PORT || 3003;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
module.exports = app;
//# sourceMappingURL=app.js.map