var connection = require("./connection");

var query = connection.query("SELECT * FROM employee", function (err, res) {
  if (err) throw err;
  console.log(res);
});
connection.end();
