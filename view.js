var connection = require("./connection");
var inquirer = require("inquirer");

function view(table) {
  connection.query(
    "SELECT * FROM " + table,

    function (err, res) {
      if (err) throw err;
      console.table(res);
    }
  );
}
