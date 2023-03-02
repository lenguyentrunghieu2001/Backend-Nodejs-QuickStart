const express = require("express");
const {
  index,
  getCRUD,
  postCRUD,
  getEditCRUD,
  putCRUD,
  getDeleteCRUD,
} = require("../controllers/homeController");

const router = express.Router();

router.get("/", index);
router.get("/crud", getCRUD);
router.post("/post-crud", postCRUD);
router.get("/edit-crud/:id?", getEditCRUD);
router.post("/put-crud", putCRUD);
router.get("/delete-crud/:id?", getDeleteCRUD);

module.exports = router;
