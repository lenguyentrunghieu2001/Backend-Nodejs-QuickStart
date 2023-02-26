const {
  createNewUser,
  getAllUser,
  getUserInfoId,
  updateUserData,
  deleteUserData,
} = require("../services/CRUDServices");

const index = async (req, res) => {
  let data = await getAllUser();
  res.render("home", { data: data });
};

const getCRUD = async (req, res) => {
  res.render("crud");
};

const postCRUD = async (req, res) => {
  await createNewUser(req.body);
  return res.redirect("/");
};

const getEditCRUD = async (req, res) => {
  let userId = req.params.id;
  if (userId) {
    let userData = await getUserInfoId(userId);
    if (userData) {
      return res.render("edit", { dataUser: userData });
    } else {
      return res.send("User not database");
    }
  } else {
    return res.send("User not found");
  }
};

const putCRUD = async (req, res) => {
  let id = req.body.id;
  let data = req.body;
  updateUserData(data, id);
  return res.redirect("/");
};

const getDeleteCRUD = async (req, res) => {
  let id = req.params.id;
  if (id) {
    deleteUserData(id);
    return res.redirect("/");
  } else {
    return res.send("User not found");
  }
};

module.exports = {
  index,
  getCRUD,
  postCRUD,
  getEditCRUD,
  putCRUD,
  getDeleteCRUD,
};
