"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
    res.json({ msg: "api work" });
});
module.exports = router;
//# sourceMappingURL=index.js.map