var mysql = require("mysql");

// Database connection =========================
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "toutoumy1961",
  database: "company_db",
});

module.exports = connection;
