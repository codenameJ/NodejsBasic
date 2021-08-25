const mongoose = require("mongoose");
const mongo = require('mongodb');
cont = dburl = "mongodb://localhost:27017/NodejsBasicDB";

mongoose.connect(dburl, { useNewUrlParser:true})

const db = mongoose.connection;
const Schema = mongoose.Schema;

const productSchema = new Schema({
  id: {
    type: Schema.ObjectId,
  },
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  amount: {
    type: Number,
    require: true,
  },
},{
    timestamps : true,
});

const Products = (module.exports = mongoose.model("Products", productSchema));
module.exports.createProduct = function (newProduct, callback) {
  newProduct.save(callback);
};
module.exports.getAllProducts = function(data){
    Products.find(data);
}
