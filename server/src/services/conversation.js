import { Router } from "express";
import Conversation from "../models/Conversation.js";

const convoRouter = Router();

// initiate a convo using POST
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
// GET convo of a user

convoRouter.get("/:userId", async (req, res, next) => {
  try {
    // const convo = await Conversation.findById(req.params.userId);
    const convo = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).send(convo);
  } catch (error) {
    console.log(error);
    next();
  }
});

export default convoRouter;
