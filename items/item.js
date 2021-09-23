const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create mongodb schema
const ItemSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Item = mongoose.model("item", ItemSchema);
module.exports = Item;
