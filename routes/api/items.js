const express = require("express");
const router = express.Router();

const Item = require("../../models/Item");

// @route   GET api/items
// @desc    get all items
// @access  Public
// router gets from this specific route -> so just /
// using mongoose find() *Promise*
// sorting items descending from date
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

// @route   POST api/items
// @desc    Create an item
// @access  Public
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });

  newItem.save().then((item) => res.json(item));
});

// @route   DELETE api/items
// @desc    Delete an item
// @access  Public
// findById() using mongodb assigned id to find item *Promise*
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ removed: true })))
    .catch((error) => res.status(404).json({ removed: false }));
});

module.exports = router;
