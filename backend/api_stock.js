const express = require("express");
const router = express.Router();
const product = require("./models/product");
const Sequelize = require("sequelize");
const constants = require("./constant");
const formidable = require("formidable");
const path = require("path");
const fs = require("fs-extra");

router.get("/product", async (req, res) => {
  let result = await product.findAll({ order: Sequelize.literal("id DESC") });
  res.json(result);
});

// Upload Image
uploadImage = async (files, doc) => {
  if (files.image != null) {
    var fileExtention = files.image.name.split(".")[1];
    doc.image = `${doc.id}.${fileExtention}`;
    var newpath =
      path.resolve(__dirname + "/uploaded/images/") + "/" + doc.image;
    if (fs.exists(newpath)) {
      await fs.remove(newpath);
    }
    await fs.moveSync(files.image.path, newpath);

    // Update database
    let result = product.update(
      { image: doc.image },
      { where: { id: doc.id } }
    );
    return result;
  }
};

//create
//Router เพื่อเป็นการเชื่อต่อ ระหว่าง fontend ที่เป็น React และ Backend ที่เป็น NodeJs นั้นเอง
router.post("/product", async (req, res) => {
  try {
    const form = new formidable.IncomingForm();
    form.parse(req, async (error, fields, files) => {
      let result = await product.create(fields);
      result = await uploadImage(files, result);
      res.json({
        result: constants.kResultOk,
        message: JSON.stringify(result)
      });
    });
  } catch (error) {
    res.json({ result: constants.kResultNok, message: JSON.stringify(error) });
  }
});

// Update Product
router.put("/product", async (req, res) => {
  try {
    var form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      let result = await product.update(fields, { where: { id: fields.id } });
      result = await uploadImage(files, fields);

      res.json({
        result: constants.kResultOk,
        message: JSON.stringify(result)
      });
    });
  } catch (err) {
    res.json({ result: constants.kResultNok, message: JSON.stringify(err) });
  }
});

//delete
router.delete("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let result = await product.findOne({ where: { id: id } });
    await fs.remove(
      path.resolve(__dirname + "/uploaded/images/") + "/" + result.image
    );
    result = await product.destroy({ where: { id: id } });
    res.json({ result: constants.kResultOk, message: JSON.stringify(result) });
  } catch (error) {
    res.json({ result: constants.kResultNok, message: "Internal error" });
  }
});

module.exports = router;
