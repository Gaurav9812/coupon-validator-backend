const express = require("express");
const router = express.Router();
const coupon_controller = require("../Controllers/Coupon-controller");
//if url has product
router.post("/create", coupon_controller.create);
router.get("/getCoupon", coupon_controller.getCoupons);
router.post("/validate", coupon_controller.validateCoupon);

module.exports = router;
