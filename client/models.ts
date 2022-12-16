import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  id: String,
  name: String,
  lastName: String,
  email: String,
  password: String,
});

export const Client = mongoose.model("Client", clientSchema);
