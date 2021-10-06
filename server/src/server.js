import express from "express";
import listEndpoints from "express-list-endpoints";
import mongoose from "mongoose";
import cors from "cors";
import convoRouter from "./services/conversation.js";
import usersRouter from "./users/index.js";
import messageRouter from "./services/message.js";

const port = process.env.PORT || 5000;
const server = express();

server.use(express.json());
server.use(cors());

server.use("/convos", convoRouter);
server.use("/users", usersRouter);
server.use("/messages", messageRouter);

mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on(`connected`, () => {
  // the string "connected" 👆☝ has to be "connected" nothing more nothing less
  console.log(`🎁 mongo connected Successfully!!`);
  server.listen(port, () => {
    console.table(listEndpoints(server));
    console.log(`server running on: ${port}`);
  });
});

mongoose.connection.on(`error`, (err) => {
  console.log(`Mongo Error: ${err}`);
});
