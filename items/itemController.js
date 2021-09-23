// Import item model
const Item = require("./item");

const fetchAllItems = async (req, res) => {
  try {
    const items = await Item.find()
      .sort({ date: -1 })
      .then((items) => res.json(items));
    res.status(200).json(items);
  } catch {
    res.status(400).end();
  }
};

const createItem = async (req, res) => {
  let newItem = new Item({
    name: req.body.name,
    quantity: req.body.quantity,
    date: req.body.date,
  });
  console.log(req.body.date);
  try {
    await newItem.save();
    res.send({ message: "Rating recieved. Ok" });
    res.status(201);
  } catch {
    res.send({ message: "Failed to create item" });
    res.status(400);
  }
};

const removeItem = async (req, res) => {
  const itemId = req.query.itemId;
  try {
    await Item.deleteOne({ _id: itemId });
    res.status(204).end();
  } catch {
    res.status(404).end();
  }
};

module.exports.fetchAllItems = fetchAllItems;
module.exports.createItem = createItem;
module.exports.removeItem = removeItem;
