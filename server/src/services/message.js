import { Router } from "express";
import Message from "../models/Message.js";

const messageRouter = Router();

// starting convo(texting) using POST
messageRouter.post("/", async (req, res, next) => {
  try {
    const message = await Message(req.body).save();
    res.status(201).send(message);
  } catch (error) {
    console.log(error);
    next();
  }
});

//GET the message between 2
messageRouter.get("/:convoId", async (req, res, next) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.convoId,
    });
    res.status(200).send(messages);
  } catch (error) {
    console.log(error);
    next();
  }
});

export default messageRouter;
