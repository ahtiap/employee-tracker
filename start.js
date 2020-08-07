// DEPENDENCIES===========================
var inquirer = require("inquirer");
var addRole = require("./addRole");
var addDepa = require("./addDepa");
var addEmployee = require("./addEmployee");
var update = require("./update");
var view = require("./view");
const connection = require("./connection");
const addDepartment = require("./addDepa");

function start() {
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
    switch (res.choice) {
      case "View Departments":
        view("department");
        start();
        break;
      case "View Roles":
        view("role");
        start();
        break;
      case "View Employees":
        view("employee");
        start();
        break;
      case "Add Department":
        addDepa();
        start();
        break;
      case "Add Role":
        addRole();
        start();
        break;
      case "Add Employee":
        addEmployee();
        start();
        break;
      case "Update employee role":
        update();
        start();
        break;
      default:
        connection.end();
        break;
    }
  });
}
start();
