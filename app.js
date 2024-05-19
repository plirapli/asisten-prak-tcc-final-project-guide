require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRouter = require("./router/auth");
const port = process.env.PORT || "3100";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);

app.listen(port, () => {
  console.log("Server Connected on PORT: " + port + "/");
});
