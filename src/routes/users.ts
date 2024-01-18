import { Request, Response } from "express";
import { User, UserProps } from "../models/userModel";
const fs = require("fs");
const express = require("express");
const path = require("path");
const router = express.Router();
const usersJson = require("../customers.json");

// Check if the router "users" works
router.get("/", (req: Request, res: Response) => {
  res.json({ msg: "users work" });
});

// get all users
router.get("/users-list", async (req: Request, res: Response) => {
  try {
    let dataJson = fs.readFileSync(
      path.join(__dirname, "../customers.json"),
      "utf8"
    );
    console.log("hi");
    
    const currentUsers = JSON.parse(dataJson);
    return res.status(200).json(currentUsers);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "err", err });
  }
});

router.post("/add-user", async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const user = new User(userData);
    const data = fs.readFileSync(
      path.join(__dirname, "../customers.json"),
      "utf8"
    );
    const currentUsers = JSON.parse(data);
    currentUsers.push(user);
    const jsonData = JSON.stringify(currentUsers);

    fs.writeFile(
      path.resolve(__dirname, "../customers.json"),
      jsonData,
      (error: Error) => {
        if (error) {
          console.error("Error writing to file:", error);
          return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.status(201).json({ message: "User added successfully!" });
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/user-info/:userEmail", async (req: Request, res: Response) => {
  try {
    const { userEmail } = req.params;
    let userInfo = usersJson.find(
      (user: UserProps) => user.email === userEmail
    );
    if (!userInfo) return res.status(404).json({ message: "User not found" });
    return res.status(200).json(userInfo);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
