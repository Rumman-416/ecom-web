const Product = require("../models/Productmodel");

exports.postProduct = async (req, res) => {
  // creating product
  try {
    const product = await Product.create(req.body);
    return res.status(200).send({
      success: "true",
      product,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getProduct = async (req, res) => {
  try {
    const { name, category } = req.query;
    const queryObj = {};

    if (name) {
      queryObj.name = {
        $regex: name,
        $options: "i",
      };
    }
    if (category) {
      queryObj.category = category;
    }

    const product = await Product.find(queryObj);
    return res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getParticularProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    return res.status(200).send({
      success: "true",
      product,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    return res.status(200).send({
      success: "true",
      product,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteproduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: "true",
      product,
      message: "Product deleted",
    });
  } catch (error) {
    console.log(error);
  }
};
