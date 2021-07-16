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
    console.log("Main Menu")
};