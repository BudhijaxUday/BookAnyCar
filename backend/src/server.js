require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const dbConfig = require("./util/database");

const port = process.env.PORT || 80;
app.use(cors())
app.use(express.json())
const {router:adminRouter,adminJS} = require("./routes/admin-panel") 
const carsRouter = require("./routes/cars")
app.use(adminJS.options.rootPath,adminRouter)
app.use("/api/v1",carsRouter)
dbConfig();
app.listen(port, () => {
  console.log("Server is up and running");
});
