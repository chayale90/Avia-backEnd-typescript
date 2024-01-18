"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const indexR = require("./index");
const usersR = require("./users");
exports.routesInit = (app) => {
    app.use("/", indexR);
    app.use("/users", usersR);
};
//# sourceMappingURL=configRoutes.js.map