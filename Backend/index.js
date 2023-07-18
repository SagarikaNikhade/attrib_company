const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const { connection } = require("./config/db");
// user
const { userRouter } = require("./routes/user.routes");
// auth
const { auth } = require("./middleware/auth.middleware");
// Inventory
const {inventoryRouter} = require("./routes/inventory.routes")

app.use(cors());
app.use(express.json());
// user
app.use("/users", userRouter);
//  Inventory
app.use("/inventory",inventoryRouter)

app.listen(8080, async () => {
    try {
      await connection;
      console.log("Connected to database");
    } catch (err) {
      console.log(err);
      console.log("Not able to connect database");
    }
    console.log(`Server is running on port 8080`);
  })