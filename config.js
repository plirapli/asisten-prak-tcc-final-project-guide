const mysql = require("mysql2");

const config = {
  host: "localhost",
  user: "root",
  password: "",
  database: "kampus_upnvy",
};

const connect = mysql.createConnection(config);

// Koneksi DB
connect.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected");
});

module.exports = connect;
