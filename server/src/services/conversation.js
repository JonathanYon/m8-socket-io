import { Router } from "express";
import Conversation from "../models/Conversation.js";

const convoRouter = Router();

convoRouter.post("/", async (req, res, next) => {
  try {
    const convo = await Conversation({
      members: [req.body.senderId, req.body.receiverId],
    }).save();
    res.status(201).send(convo._id);
  } catch (error) {
    console.log(error);
    next();
  }
});

export default convoRouter;
