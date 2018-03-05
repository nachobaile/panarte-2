const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ProductsSchema = new Schema({
  name: String,
  image: String,
  price:Number,
  ingredients:String,
  category:{
    type: String,
    enum: ['Breads', 'Empanadas',"cakes"]
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Products = mongoose.model('Product', ProductsSchema);
module.exports = Products;

