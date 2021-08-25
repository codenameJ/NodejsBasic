const { request } = require("express");
var express = require("express");
var router = express.Router();
const { body, validationResult } = require("express-validator");
const Products = require("../models/products");

router.get("/", function (req, res, next) {
  Products.getAllProducts(function(err, products){
    if(err) throw err;
    res.render("product", { title: "Products" , products:products});
  })
});

router.get("/add", function (req, res, next) {
  res.render("addproduct", { title: "Add Product" });
});

router.post(
  "/add",
  [
    body("name", "Add Product Name.").not().isEmpty(),
    body("description", "Add Product Description.").not().isEmpty(),
    body("amount", "Add Product Amount.").not().isEmpty(),
  ],
  function (req, res, next) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      res.render("addproduct", { errors: result.errors, title: "Add Product" });
    } else {
      data = new Products({
        name: req.body.name,
        description: req.body.description,
        amount: req.body.amount,
      });
      Products.createProduct(data, function (err, callback) {
        if (err) console.log(err);
        else res.redirect("/products");
      });
    }
  }
);

module.exports = router;
