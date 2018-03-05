const Recipe = require("../models/Recipes.js");

const express = require("express");

const router = express.Router();

//CRUD READ
router.get("/show", (req, res, next) => {
  Recipe.find()
    .then(recipesFound => res.status(200).json(recipesFound))
    .catch(error => res.status(500).json(error));
});
//CRUD CREATE
router.post("/create", (req, res, next) => {
  console.log(req.body);

  const recipe = new Recipe({
    name: req.body.name,
    userId: res.locals.use,
    ingredients: req.body.ingredients,
    description: req.body.description,
    image: req.body.image
  });

  recipe
    .save()
    .then(recipesFound => res.status(200).json(recipesFound))
    .catch(error => res.status(500).json(error));
});

// //CRUD UPDATE

router.post("/update/:id", (req, res, next) => {
  const recipeId = req.params.id;
  const { name, ingredients, description } = req.body;
  const updates = { name, ingredients, description };
  Recipe.findByIdAndUpdate(
    recipeId,
    { name, ingredients, description },
    { new: true }
  )
    .then(recipesFound => res.status(200).json(recipesFound))
    .catch(error => res.status(500).json(error));
});

//CRUD DELETE

router.get("/delete/:id", (req, res, next) => {
  const recipetId = req.params.id;
  Recipe.findByIdAndRemove(recipetId)
    .then(() => res.status(200).json({ message: "Receta borrada" }))
    .catch(error => res.status(500).json(error));
});

module.exports = router;
