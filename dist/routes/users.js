"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = require("../models/userModel");
const fs = require("fs");
const express = require("express");
const path = require("path");
const router = express.Router();
// const usersJson = require("../customers.json");
router.get("/", (req, res) => {
    res.json({ msg: "users work" });
});
router.get("/users-list", async (req, res) => {
    try {
        let dataJson = fs.readFileSync(path.join(__dirname, "../customers.json"), "utf8");
        const currentUsers = JSON.parse(dataJson);
        return res.status(200).json(currentUsers);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ msg: "err", err });
    }
});
router.post("/add-user", async (req, res) => {
    try {
        const userData = req.body;
        const user = new userModel_1.User(userData);
        const data = fs.readFileSync(path.join(__dirname, "../customers.json"), "utf8");
        const currentUsers = JSON.parse(data);
        currentUsers.push(user);
        const jsonData = JSON.stringify(currentUsers);
        fs.writeFile(path.resolve(__dirname, "../customers.json"), jsonData, (error) => {
            if (error) {
                console.error("Error writing to file:", error);
                return res.status(500).json({ error: "Internal Server Error" });
            }
            return res.status(201).json({ message: "User added successfully!" });
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});
router.get("/user-info/:userEmail", async (req, res) => {
    try {
        const { userEmail } = req.params;
        let dataJson = fs.readFileSync(path.join(__dirname, "../customers.json"), "utf8");
        let userInfo = dataJson.find((user) => user.email === userEmail);
        if (!userInfo)
            return res.status(404).json({ message: "User not found" });
        return res.status(200).json(userInfo);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});
module.exports = router;
//# sourceMappingURL=users.js.map