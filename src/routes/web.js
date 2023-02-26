const express = require("express");
const {
  index,
  getCRUD,
  postCRUD,
  getEditCRUD,
  putCRUD,
  getDeleteCRUD,
} = require("../controllers/homeController");
const routes = express.Router();

routes.get("/", index);
routes.get("/crud", getCRUD);
routes.post("/post-crud", postCRUD);
routes.get("/edit-crud/:id?", getEditCRUD);
routes.post("/put-crud", putCRUD);
routes.get("/delete-crud/:id?", getDeleteCRUD);

module.exports = routes;
