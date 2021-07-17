//Dependencies
const inquirer = require('inquirer');
const cTable = require('console.table');
const connection = require('./config/connections');

connection.connect(function (err) {
    if (err) throw err;
    console.log("Welcome to the Employee Management System")
    mainMenu();
});

function mainMenu (){
    inquirer.prompt({
        type: 'list',
        name: 'main',
        message: 'Main Menu:',
        choices: ['Create New Department', 'Create New Role', 'Create New Employee', 'View Departments', 'View Roles', 'View Employees', 'Update Employee Roles', 'Quit']
      })
        .then((answer) => {
          switch (answer.main) {
            case 'Create New Department':
              createDepartment();
              break;
    
            case 'Create New Role':
              createRole();
              break;
    
            case 'Create New Employee':
              createEmployee();
              break;
    
            case 'View Departments':
              viewDepartment();
              break;
    
            case 'View Roles':
              viewRoles();
              break;
    
            case 'View Employees':
              viewEmployees();
              break;
    
            case 'Update Employee Roles':
              updateEmployee();
              break;
    
            case 'Quit':
                quitApp();
                break;
        }
     })
};

// Add Departments

function createDepartment (){
    inquirer.prompt([{
        type: 'input',
        name: 'department_name',
        message: 'New Department Name:'
      }]).then((answer) => {
        connection.query(`INSERT INTO department (name) VALUES (?)`, answer.department_name, (err) => {
          if (err) throw err;
          console.log("You have successful added the " + answer.department_name + " department into the Employee Management CMS.")
          mainMenu();
        })
      })
};

// Add Roles

function createRole (){
    connection.query(`SELECT * FROM department`, (err, res) => {
        if (err) throw err;
        let departmentArray = [];
        res.forEach(element => {
          departmentArray.push(element.name);
        });
        inquirer.prompt([
          {
            type: 'input',
            name: 'title',
            message: 'Role Title:'
          },
          {
            type: 'input',
            name: 'salary',
            message: 'Salary:'
          },
          {
            type: 'list',
            name: 'department',
            message: 'Department:',
            choices: departmentArray
          }
    
        ]).then((answer) => {
          let departmentId;
          res.forEach((element) => {
            if (answer.department === element.name) {
              departmentId = element.id
            };
          });
          connection.query('INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)',
            [answer.title, answer.salary, departmentId],
            (err) => {
              if (err) throw err;
              console.log("You have successfully added " + answer.title + " to the " + answer.department + " department into the Employee Management CMS.");
              mainMenu();
            })
        })
      });
};

// Add Employees

function createEmployee (){
    inquirer.prompt([{
        type: 'input',
        name: 'first_name',
        message: 'First Name:'
      },
      {
        type: 'input',
        name: 'last_name',
        message: 'Last Name:'
      },
      ]).then((answer) => {
        const newEmployee = [answer.first_name, answer.last_name]
        connection.query(`SELECT roles.id, roles.title FROM roles`, (err, res) => {
          if (err) throw err;
          const employeeRoles = res.map(({ id, title }) => ({ name: title, value: id }));
          inquirer.prompt([{
            type: 'list',
            name: 'roles',
            message: "Select Role:",
            choices: employeeRoles
          }
          ]).then(response => {
            const role = response.roles;
            newEmployee.push(role);
            connection.query(`SELECT * FROM employees`, (err, res) => {
              if (err) throw err;
              const managers = res.map(({ id, first_name, last_name }) => ({ name: first_name + ' ' + last_name, value: id }));
              inquirer.prompt([{
                type: 'list',
                name: 'manager',
                message: 'Assign Manager:',
                choices: managers
              }
    
              ]).then(response => {
                const manager = response.manager;
                newEmployee.push(manager);
                connection.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, newEmployee, (err, res) => {
                  if (err) throw err;
                    console.log("You have successfully added " + answer.first_name + " into the Employee Management CMS.");
                    mainMenu();
                })
              })
            })
          })
        })
      })
    };

// View Departments

function viewDepartment () {
    connection.query("SELECT * FROM department", (err, res) => {
        if (err) throw err;
        console.table(res);
        mainMenu();
      });
};

// View Roles

function viewRoles (){
    connection.query("SELECT * FROM roles", (err, res) => {
        if (err) throw err;
        console.table(res);
        mainMenu();
      });
};
// View Employees

function viewEmployees (){
    connection.query("SELECT * FROM employees", (err, res) => {
        if (err) throw err;
        console.table(res);
        mainMenu();
      });
};

// Update Employee Roles

function updateEmployee(){

};

// Quit

function quitApp(){
    console.log("Thank you for using the Employee Management CMS");
    connection.end();
    return process.exit();
};