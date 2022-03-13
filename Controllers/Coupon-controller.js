const Coupon = require("../models/coupon");
module.exports.create = async function (req, res) {
  try {
    console.log(req.body);
    let start = new Date(req.body.start_date).getTime();
    let end = new Date(req.body.end_date).getTime();

    if (start > end) {
      return res.status(200).json({
        message: " start date has to be greater than end date",
      });
    }
    let new_coupon = await Coupon.create({
      ...req.body,
    });

    return res.status(200).json({
      message: "success",
      new_coupon,
    });
  } catch (err) {
    console.log(`error in creating coupon ${err.message}`);
    return res.status(500).json({
      message: `error in creating Coupon ${err}`,
    });
  }
};

module.exports.getCoupons = async function (req, res) {
  try {
    let All_coupons = await Coupon.find({});
    return res.status(200).json({
      message: "success",
      All_coupons,
    });
  } catch (err) {
    console.log(`error in fetching coupons  ${err.message}`);
    return res.status(500).json({
      message: `error in creating Coupon ${err}`,
    });
  }
};
module.exports.validateCoupon = async function (req, res) {
  try {
    let couponFound = await Coupon.findOne({ code: req.body.code });
    if (couponFound) {
      let today = new Date().getTime();
      if (couponFound.min_amount > req.body.total) {
        return res.status(201).json({
          message: `cart value is less `,
        });
      }

      if (
        couponFound.start_date.getTime() < today &&
        today < couponFound.end_date.getTime()
      ) {
        let amount;
        if (couponFound.coupon_type === "FLAT") {
          amount = couponFound.Amount;
        } else {
          amount = (couponFound.percentage * req.body.total) / 100;
        }
        console.log(amount);
        return res.status(201).json({
          message: `success`,
          Amount: amount,
        });
      } else {
        return res.status(200).json({
          message: `Coupon has expired or yet to be launched`,
        });
      }
    } else {
      return res.status(200).json({
        message: `Coupon not Found`,
      });
    }
  } catch (err) {
    console.log(`error in fetching coupons  ${err.message}`);
    return res.status(500).json({
      message: `error in creating Coupon ${err}`,
    });
  }
};
