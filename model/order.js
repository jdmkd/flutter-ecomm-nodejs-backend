const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  orderDate: {
    type: Date,
    default: Date.now
  },
  orderStatus: {
    type: String,
    enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled','returned'],
    default: 'pending'
  },
  items: [
    {
      productID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
      productName: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      variant: {
        type: String,
      },
    }
  ],
  totalPrice: {
    type: Number,
    required: true
  },
  shippingAddress: {
    phone: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    country:{ type: String, required: true }
  },

  paymentMethod: {
    type: String,
    enum: ['cod', 'prepaid'],
    // required: true
  },

  // paymentStatus: {
  //   type: String,
  //   enum: ['pending', 'paid', 'failed', 'refunded'],
  //   default: 'pending'
  // },

  couponCode: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Coupon',
    default: null
  },
  // change orderTotal to pricingDetails for clarity.
  orderTotal: {
    subtotal: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    total: { type: Number, required: true }
  },
  trackingUrl: {
    type: String,
    default: null
  },
},{ timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
