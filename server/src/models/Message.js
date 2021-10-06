import mongoose from "mongoose";
const { Schema, model } = mongoose;

const MessageSchema = new Schema(
  {
    members: { type: Array },
  },
  { timestamps: true }
);
export default model("Message", MessageSchema);
