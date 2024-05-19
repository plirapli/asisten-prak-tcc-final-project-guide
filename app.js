const express = require("express");
const cors = require("cors");
const mhsRouter = require("./mahasiswa");
const port = "3100";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/mahasiswa", mhsRouter);

app.listen(port, () => {
  console.log("Server Connected on PORT: " + port + "/");
});
