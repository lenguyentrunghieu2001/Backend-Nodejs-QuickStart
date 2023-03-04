const express = require("express");
const ConnectDB = require("./config/database");
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");
const userRouter = require("./routes/user");
const cors = require("./config/cors");

require("dotenv").config();
const app = express();

// setting cors
cors(app);

const port = process.env.PORT || 3333;

// connect to database
ConnectDB();

// config prams and res from client to server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// config public
configViewEngine(app);

// config routes
app.use("/", webRouter);
app.use("/api", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
