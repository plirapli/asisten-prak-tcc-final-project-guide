// Mengimport package
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3100;
const dosenRouter = require("./dosen");

// Supaya API dapat diakses di domain yang berbeda
app.use(cors());

// Buat ngubah request body yang berupa json ke dalam object
app.use(express.json());

app.use("/dosen", dosenRouter);

app.get("/", (req, res) => {
  res.send("Hello from dosen-service! 😁");
});

// Menjalankan server di port 3001
app.listen(port, () => console.log("Server terkoneksi pada port " + port));
