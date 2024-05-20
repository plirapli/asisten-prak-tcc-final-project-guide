const express = require("express");
const cors = require("cors");
const mhsRouter = require("./mahasiswa");
const port = "3100";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/mahasiswa", mhsRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Mahasiswa Service! 😁");
});

app.listen(port, () => {
  console.log("Server Connected on PORT: " + port + "/");
});
