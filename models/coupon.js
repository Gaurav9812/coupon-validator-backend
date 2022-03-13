const mongoose = require("mongoose");

const couponSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    code: {
      type: String,

      required: true,
      unique: true,
    },
    min_amount: {
      type: Number,
      required: true,
    },
    start_date: {
      type: Date,
      default: Date.now(),
    },
    end_date: {
      type: Date,
      required: true,
    },
    coupon_type: {
      type: String,
      default: "flat",
    },
    percentage: {
      type: Number,
    },
    Amount: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);
const Coupon = mongoose.model("Coupon", couponSchema);
module.exports = Coupon;
