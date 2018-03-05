const Product = require("../models/Products.js");
const express = require("express");

const router = express.Router();

//CRUD READ
router.get("/show", (req, res, next) => {
  Product.find()
    .then(productsFound => res.status(200).json(productsFound))
    .catch(error => res.status(500).json(error));
});
//CRUD CREATE
router.post("/create", (req, res, next) => {
  console.log(req.body);
  const product = new Product({
    name: req.body.name,
    image: req.body.image,
    price: req.body.price,
    ingredients: req.body.ingredients
  });

  product
    .save()
    .then(productsFound => res.status(200).json(productsFound))
    .catch(error => res.status(500).json(error));
});

//CRUD UPDATE

router.post("/update/:id", (req, res, next) => {
  const productId = req.params.id;
  const { name, price, ingredients } = req.body;
  const updates = { name, price, ingredients };
  Product.findByIdAndUpdate(
    productId,
    { name, price, ingredients },
    { new: true }
  )
    .then(productsFound => res.status(200).json(productsFound))
    .catch(error => res.status(500).json(error));
});

//CRUD DELETE

router.get("/delete/:id", (req, res, next) => {
  const productId = req.params.id;
  Product.findByIdAndRemove(req.params.id)
    .then(() =>
      res.status(200).json({ message: "Producto eliminado de la cesta" })
    )
    .catch(error => res.status(500).json(error));
});

module.exports = router;
