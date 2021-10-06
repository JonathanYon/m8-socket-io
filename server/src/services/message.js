import { Router } from "express";
import Message from "../models/Message.js";

const messageRouter = Router();

messageRouter.post("/", async (req, res, next) => {
  try {
    const message = await Message(req.body).save();
    res.status(201).send(message);
  } catch (error) {
    console.log(error);
    next();
  }
});

export default messageRouter;
