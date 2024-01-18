"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
router.get("/", function (req, res) {
    res.json({ msg: "api work" });
});
module.exports = router;
//# sourceMappingURL=index.js.map