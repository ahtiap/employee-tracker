//DEPENDENCIES==========
var start = require("../start.js");
var connection = require("./connection");
var inquirer = require("inquirer");
// function to add a role
function addRole() {
  // get the list of available departments
  var departments;
  var query = connection.query("SELECT name FROM department", function (
    err,
    res
  ) {
    if (err) throw err;
    departments = res.map(function (dep) {
      var dep = dep.name;
      return dep;
    });
    const question = [
      {
        type: "input",
        name: "title",
        message: "Title:",
      },
      {
        type: "input",
        name: "sal",
        message: "Salary:",
      },
      {
        type: "list",
        name: "department",
        message: "Choose a department",
        choices: departments,
      },
    ];
    // prompt
    inquirer.prompt(question).then((res) => {
      var depId;
      var newTitle = res.title;
      var newSal = res.sal;
      connection.query(
        "SELECT id FROM department WHERE ?",
        {
          name: res.department,
        },
        function (err, res) {
          if (err) throw err;
          depId = res[0].id;
          var query = connection.query(
            "INSERT INTO role SET ?",
            {
              title: newTitle,
              salary: newSal,
              department_id: depId,
            },
            function (err, res) {
              if (err) throw err;
              console.log("Role successfully added!\n");
            }
          );
        }
      );
    });
  });
}

module.exports = addRole;
