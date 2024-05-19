// Mengimport package
const express = require("express");
const router = express.Router();
const connection = require("./config");

// [GET] Mengambil daftar mahasiswa
router.get("/", async (req, res) => {
  try {
    // Execute query ke database
    const command = "SELECT * FROM mahasiswa";
    const data = await connection.promise().query(command);

    // Mengirimkan respons jika berhasil
    res.status(200).json({
      status: "Success",
      message: "Berhasil mengambil daftar mahasiswa",
      data: data[0],
    });
  } catch (error) {
    // mengirimkan respons jika gagal
    res.status(error.statusCode || 500).json({
      status: "Error",
      message: error.message,
    });
  }
});

// [POST] Memasukkan mahasiswa baru ke dalam daftar mahasiswa
router.post("/", async (req, res) => {
  try {
    // mengambil nama dan nim dari request body
    const { nama, nim } = req.body;

    // kalau nama/nim kosong atau gaada kolom nama/nim di request body
    if (!nama || !nim) {
      const msg = `${!nama ? "Nama" : "NIM"} gabole kosong 😠`;
      const error = new Error(msg);
      error.statusCode = 401;
      throw error;
    }

    // Execute query ke database
    const command = "INSERT INTO mahasiswa (nama, nim) VALUES (?, ?)";
    await connection.promise().query(command, [nama, nim]);

    // mengirimkan respons jika berhasil
    res.status(201).json({
      status: "Success",
      message: "Berhasil menambahkan mahasiswa",
    });
  } catch (error) {
    // mengirimkan respons jika gagal
    res.status(error.statusCode || 500).json({
      status: "Error",
      message: error.message,
    });
  }
});

// [PUT] Mengubah data mahasiswa berdasarkan id
router.put("/:id", async (req, res) => {
  try {
    // mengambil nama dan nim dari request body
    const { id } = req.params;
    const { nama, nim } = req.body;

    /// kalau nama/nim kosong atau gaada kolom nama/nim di request body
    if (!nama || !nim) {
      const msg = `${!nama ? "Nama" : "NIM"} gabole kosong 😠`;
      const error = new Error(msg);
      error.statusCode = 401;
      throw error;
    }

    // Execute query ke database
    const command = "UPDATE mahasiswa SET nama = ?, nim = ? WHERE id = ?";
    await connection.promise().query(command, [nama, nim, id]);

    // mengirimkan respons jika berhasil
    res.status(201).json({
      status: "Success",
      message: "Berhasil mengubah mahasiswa",
    });
  } catch (error) {
    // mengirimkan respons jika gagal
    res.status(error.statusCode || 500).json({
      status: "Error",
      message: error.message,
    });
  }
});

// [DELETE] Menghapus suatu mahasiswa berdasarkan id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Execute query ke database
    const command = "DELETE FROM mahasiswa WHERE id = ?";
    await connection.promise().query(command, [id]);

    // mengirimkan respons jika berhasil
    res.status(200).json({
      status: "Success",
      message: "Berhasil menghapus mahasiswa",
    });
  } catch (error) {
    // mengirimkan respons jika gagal
    res.status(error.statusCode || 500).json({
      status: "Error",
      message: error.message,
    });
  }
});

// [GET] Mengambil mahasiswa berdasarkan ID
router.get("/:id", async (req, res) => {
  try {
    // mengambil id dari parameter
    const { id } = req.params;

    // Execute query ke database
    const command = "SELECT * FROM mahasiswa WHERE id = ?";
    const [[data]] = await connection.promise().query(command, [id]);

    if (!data) {
      const error = new Error("mahasiswa tidak ditemukan.");
      error.statusCode = 404;
      throw error;
    }

    // Mengirimkan respons jika berhasil
    res.status(200).json({
      status: "Success",
      message: "Berhasil mengambil mahasiswa",
      data: data,
    });
  } catch (error) {
    // mengirimkan respons jika gagal
    res.status(error.statusCode || 500).json({
      status: "Error",
      message: error.message,
    });
  }
});

module.exports = router;
