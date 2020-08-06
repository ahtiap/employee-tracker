//DEPENDENCIES==========
var connection = require("./connection");
var inquirer = require("inquirer");
// function to add a role
function addEmployee() {
  // get the list of available departments
  var roles;
  var query = connection.query("SELECT title FROM role", function (err, res) {
    if (err) throw err;
    roles = res.map(function (dep) {
      var dep = dep.title;
      return dep;
    });
    console.log(res);

    const question = [
      {
        type: "input",
        name: "firstName",
        message: "First Name:",
      },
      {
        type: "input",
        name: "lastName",
        message: "Last Name:",
      },
      {
        type: "list",
        name: "role",
        message: "Choose a role:",
        choices: roles,
      },
      {
        type: "input",
        name: "manager",
        message: "Manager:",
      },
    ];
    // prompt
    inquirer.prompt(question).then((res) => {
      var roleId;
      var first = res.firstName;
      var last = res.lastName;
      connection.query(
        "SELECT id FROM role WHERE ?",
        {
          title: res.role,
        },
        function (err, res) {
          if (err) throw err;
          roleId = res[0].id;
          var query = connection.query(
            "INSERT INTO employee SET ?",
            {
              firstname: first,
              lastname: last,
              role_id: roleId,
            },
            function (err, res) {
              if (err) throw err;
              console.log("employee successfully added!\n");
            }
          );
        }
      );
    });
  });
}
addEmployee();
