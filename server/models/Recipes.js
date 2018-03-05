const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const recipesSchema = new Schema({
  name: String,
  userId: { type: Schema.Types.ObjectId,ref:"User" },
  ingredients:[],
  description:String,
  image: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});
const Recipes = mongoose.model('Recipe', recipesSchema);
module.exports = Recipes;