var inquirer = require("inquirer");
var connection = require("./connection");
// function to add a department
function addDepartment() {
  const question = [
    {
      type: "input",
      name: "depName",
      message: "Department Name:",
    },
  ];
  // prompt
  inquirer.prompt(question).then((res) => {
    var query = connection.query(
      "INSERT INTO department SET ?",
      {
        name: res.depName,
      },
      function (err, res) {
        if (err) throw err;
        console.log("Department successfully added!\n");
      }
    );
  });
}
module.exports = addDepartment;
