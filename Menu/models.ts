import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: String,
  image: String,
});

export const Menu = mongoose.model("Menu", menuSchema);
