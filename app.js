const express = require("express");
const cors = require("cors");
const userRouter = require("./mahasiswa");
const port = "3100";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/mahasiswa", userRouter);

app.listen(port, () => {
  console.log("Server Connected on PORT: " + port + "/");
});
