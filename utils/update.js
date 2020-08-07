var connection = require("./connection");
var inquirer = require("inquirer");
const { fstat, lstat } = require("fs");

function update() {
  var empPick;
  var rolePick;
  connection.query("SELECT firstname,lastname FROM employee", function (
    err,
    res
  ) {
    if (err) throw err;
    var empName = res.map(function (emp) {
      var emp = emp.firstname + " " + emp.lastname;
      return emp;
    });
    const question = [
      {
        type: "list",
        name: "employee",
        message: "Choose an employee to update his role:",
        choices: empName,
      },
    ];
    inquirer.prompt(question).then((res) => {
      empPick = res.employee;

      var fs = empPick.split(" ")[0];
      var ls = empPick.split(" ")[1];
      connection.query("SELECT title FROM role", function (err, res) {
        if (err) throw err;
        var roles = res.map(function (res) {
          var title = res.title;
          return title;
        });
        const question = [
          {
            type: "list",
            name: "role",
            message: "Pick the new role:",
            choices: roles,
          },
        ];
        inquirer.prompt(question).then((res) => {
          var rolePick;
          connection.query(
            "SELECT id FROM role where ?",
            { title: res.role },
            function (err, res) {
              if (err) throw err;
              rolePick = res[0].id;
            }
          );
          var empId;
          connection.query(
            "SELECT id FROM employee where ? AND ?",
            [
              {
                firstname: fs,
              },
              {
                lastname: ls,
              },
            ],
            function (err, res) {
              if (err) throw err;
              empId = res[0].id;
              connection.query(
                "UPDATE employee SET ? WHERE ?",
                [{ role_id: rolePick }, { id: empId }],
                function (err, res) {
                  if (err) throw err;
                  console.log("Employee's role updated!");
                }
              );
            }
          );
        });
      });
    });
  });
}
module.exports = update;
