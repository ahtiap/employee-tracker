// DEPENDENCIES===========================
var inquirer = require("inquirer");
var addRole = require("./utils/addRole");
var addDepa = require("./utils/addDepa");
var addEmployee = require("./utils/addEmployee");
var update = require("./utils/update");
var view = require("./utils/view");
const connection = require("./utils/connection");
const addDepartment = require("./utils/addDepa");
function start() {
  var choice;
  const question = [
    {
      type: "list",
      name: "choice",
      message: "Welcome to the Employee Tracker!\n Please pick an option:",
      choices: [
        "View Departments",
        "View Roles",
        "View Employees",
        "Add Department",
        "Add Role",
        "Add Employee",
        "Update employee role",
        "Exit",
      ],
    },
  ];
  inquirer.prompt(question).then((res) => {
    choice = res.choice;
    switch (choice) {
      case "View Departments":
        view("department");
        break;
      case "View Roles":
        view("role");
        break;
      case "View Employees":
        view("employee");
        break;
      case "Add Department":
        addDepartment();
        break;
      case "Add Role":
        addRole();
        break;
      case "Add Employee":
        addEmployee();
        break;
      case "Update employee role":
        update();
        break;
      default:
        connection.end();
        break;
    }
  });
}
start();
module.exports = start;
