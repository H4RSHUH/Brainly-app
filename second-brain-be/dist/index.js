import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { contentModel, linkModel, userModel } from "./db.js";
import bcrypt from "bcrypt";
import { JWT_SECRET } from "./config.js";
import { userMiddleware } from "./middleware.js";
import { random } from "./utils.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
app.post("/api/v1/signup", async (req, res) => {
    // zod validation, hashing the pass 
    const username = req.body.username;
    const password = req.body.password;
    let userExist = false;
    try {
        const hashedPass = await bcrypt.hash(password, 5);
        await userModel.create({
            username: username,
            password: hashedPass
        });
    }
    catch (e) {
        res.status(403).json({
            msg: "User already Exist"
        });
        userExist = true;
    }
    if (!userExist) {
        res.json({
            msg: "Account has been created"
        });
    }
});
app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = await userModel.findOne({
        username
    });
    if (!user) {
        return res.status(403).json({
            msg: "User not exist"
        });
    }
    if (!user.password) {
        return res.status(500).json({ msg: "User password missing in database" });
    }
    const matchPass = await bcrypt.compare(password, user.password);
    if (matchPass) {
        const token = jwt.sign({
            id: user._id
        }, JWT_SECRET);
        res.json({
            token: token
        });
    }
    if (!matchPass) {
        return res.status(403).json({
            msg: "invalid password"
        });
    }
});
app.post("/api/v1/content", userMiddleware, async (req, res) => {
    const link = req.body.link;
    const type = req.body.type;
    await contentModel.create({
        title: req.body.title,
        link,
        tags: [],
        type,
        // @ts-ignore
        userId: req.userId
    });
    res.json({
        msg: "content added"
    });
});
app.get("/api/v1/content", userMiddleware, async (req, res) => {
    // @ts-ignore
    const userId = req.userId;
    const content = await contentModel.find({
        userId: userId
    }).populate("userId", "username");
    res.json({
        content
    });
});
app.delete("/api/v1/brain/content", userMiddleware, async (req, res) => {
    const contentId = req.body.contentId;
    await contentModel.deleteOne({
        contentId,
        // @ts-ignore
        userId: req.userId
    });
    res.json({
        msg: "content deleted successfully"
    });
});
app.post("/api/v1/brain/share", userMiddleware, async (req, res) => {
    const share = req.body.share;
    if (share) {
        const existingLink = await linkModel.findOne({
            // @ts-ignore
            userId: req.userId
        });
        if (existingLink) {
            res.json({
                hash: existingLink.hash
            });
            return;
        }
        const hash = random(10);
        await linkModel.create({
            // @ts-ignore
            userId: req.userId,
            hash: hash
        });
        res.json({
            hash
        });
    }
    else {
        linkModel.deleteOne({
            // @ts-ignore
            userId: req.userId
        });
    }
});
app.get("/api/v1/brain/:shareLink", async (req, res) => {
    const hash = req.params.shareLink;
    const link = await linkModel.findOne({
        hash
    });
    if (!link) {
        res.status(411).json({
            msg: "Invalid Link"
        });
        return;
    }
    const content = await contentModel.find({
        userId: link.userId
    });
    const user = await userModel.findOne({
        _id: link.userId
    });
    if (!user) {
        res.status(411).json({
            msg: "user not found"
        });
        return;
    }
    res.json({
        username: user.username,
        content: content
    });
});
app.listen(3000);
//# sourceMappingURL=index.js.map