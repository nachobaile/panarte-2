const mongoose = require('mongoose');
const { Schema } = mongoose


const OrdersSchema = new Schema({
  buyer: { type: Schema.Types.ObjectId,ref:"User" },
  productId:[{ type: Schema.Types.ObjectId,ref:"Product" }]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Orders = mongoose.model('Order', OrdersSchema);
module.exports = Orders;