//Dependencies
const inquirer = require("inquirer");
const mysql = require('mysql');
// const consoleTable = require('console.table');
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

};

// Add Roles

function createRole (){

};

// Add Employees

function createEmployee (){

};

// View Departments

function viewDepartment () {

};

// View Roles

function viewRoles (){

};
// View Employees

function viewEmployees (){

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