const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("sern", "root", null, {
  host: "localhost",
  dialect: "mysql",
});

const ConnectDB = async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = ConnectDB;
