import mongoose from "mongoose";
const { Schema, model } = mongoose;

const roomSchema = new Schema({
  name: { type: String, required: true },
  members: [{ username: String, socketId: String }],
});
export default model("Room", roomSchema);
