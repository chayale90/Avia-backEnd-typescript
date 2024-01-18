import { Express } from 'express';
const indexR = require("./index");
const usersR = require("./users");

exports.routesInit = (app:Express) => {
  app.use("/",indexR);
  app.use("/users",usersR);
}