const mysql = require("mysql2");

const config = {
  host: "34.27.26.247",
  user: "root",
  password: "{NH1#9byN%ebp;x[",
  database: "kampus_upnvy",
};

const connect = mysql.createConnection(config);

connect.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected");
});

module.exports = connect;
