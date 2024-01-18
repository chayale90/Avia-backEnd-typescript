const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
const cors = require("cors");
const { routesInit } = require("./routes/configRoutes");
// access all domains to reach our server
app.use(cors());
// to get body
app.use(express.json());
// definition public folder as main folder
app.use(express.static(path.join(__dirname, "public")));
routesInit(app);
const server = http.createServer(app);
let port = process.env.PORT || 3003;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=app.js.map