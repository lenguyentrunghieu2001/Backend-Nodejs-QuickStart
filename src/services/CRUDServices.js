const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);
const db = require("../models/index");

// hàm lấy tất cả user
const getAllUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.User.findAll();
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
};

// hàm thêm user
const createNewUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPasswordFromBcrypt = await hashUserPassword(data.password); //gọi hàm mã hóa và đợi nó làm xong
      await db.User.create({
        email: data.email,
        password: hashPasswordFromBcrypt,
        firstName: data.firstname,
        lastName: data.lastname,
        address: data.address,
        phoneNumber: data.phonenumber,
        gender: data.gender === "1" ? true : false,
        roleId: data.roleId,
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

// mã hóa password
const hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};

// get by id
const getUserInfoId = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { id: userId },
      });
      if (user) {
        resolve(user);
      } else {
        resolve();
      }
    } catch (e) {
      reject(e);
    }
  });
};

// update user
const updateUserData = (data, id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { id: id },
      });
      if (user) {
        user.firstName = data.firstname;
        user.lastName = data.lastname;
        user.address = data.address;
        await user.save();
        resolve();
      } else {
        resolve();
      }
    } catch (e) {
      reject(e);
    }
  });
};

// delete user
const deleteUserData = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { id: id },
      });
      if (user) {
        await user.destroy();
      }
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  getAllUser,
  createNewUser,
  hashUserPassword,
  getUserInfoId,
  updateUserData,
  deleteUserData,
};
