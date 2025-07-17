const express = require('express');
const paymentController = require('./../controllers/paymentController');

const router = express.Router();

router.route('/checkout').post(paymentController.checkout);

router
  .route('/paymentVerification')
  .post(paymentController.paymentVerification);

module.exports = router;
