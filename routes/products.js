var express = require('express');
var router = express.Router();
const { body, validationResult } = require('express-validator');

router.get('/', function(req, res, next) {
    res.render('product', { title: 'Products' });
  });

  router.get('/add', function(req, res, next) {
    res.render('addproduct',{title: 'Add Product'});
  });

  router.post('/add', [
      body("name","Add Product Name.").not().isEmpty(),
      body("description","Add Product Description.").not().isEmpty(),
      body("amount","Add Product Amount.").not().isEmpty()
  ], function(req, res, next) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      res.render('addproduct', {errors:result.errors, title: 'Add Product'})
    }
    else{
      console.log(req.body.name);
      console.log(req.body.description);
      console.log(req.body.amount);
    }
  });

  module.exports = router