"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var indexR = require("./index");
var usersR = require("./users");
exports.routesInit = function (app) {
    app.use("/", indexR);
    app.use("/users", usersR);
};
//# sourceMappingURL=configRoutes.js.map