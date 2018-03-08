const Order = require("../models/Orders.js");
const express = require("express");

const router = express.Router();

router.post("/new", (req, res, next) => {
  const productos = req.body.productsBought;
  const userId = res.locals.user._id;
  const arrNuevo = [];

  for (i = 0; i < productos.length; i++) {
    arrNuevo.push(productos[i]._id);
  }

  const newOrder = new Order({
    buyer: userId,
    productId: arrNuevo
  });

  newOrder
    .save()
    .then(savedOrder => {
      res.status(200).json(savedOrder)
    })
    .catch(e => res.status(500).json(e));
});

//CRUD READ
router.get("/show", (req, res, next) => {
  Order.find()
    .then(ordersFound => res.status(200).json(ordersFound))
    .catch(error => res.status(500).json(error));
});
//CRUD CREATE
router.post("/create", (req, res, next) => {
  console.log(req.body);

  console.log(res.locals);
  const order = new Order({
    buyer: res.locals.user.id
  });

  console.log(order);

  order
    .save()
    .then(savedOrder => res.status(200).json(savedOrder))
    .catch(error => res.status(500).json(error));
});
//CRUD UPDATE

router.post("/update/:id", (req, res, next) => {
  const orderId = req.params.id;
  console.log(req.body);
  const { productId } = req.body;
  // const updates = { buyer, productId  };
  Order.findByIdAndUpdate(
    orderId,
    { $push: { productId: req.body.productId } },
    { new: true }
  )
    .then(ordersFound => res.status(200).json(ordersFound))
    .catch(error => res.status(500).json(error));
});

//CRUD DELETE

router.get("/delete/:id", (req, res, next) => {
  const orderId = req.params.id;
  Order.findByIdAndRemove(req.params.id)
    .then(() =>
      res.status(200).json({ message: "Pedido eliminado de la cesta" })
    )
    .catch(error => res.status(500).json(error));
});

module.exports = router;
