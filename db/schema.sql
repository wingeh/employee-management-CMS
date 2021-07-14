DROP  DATABASE IF EXISTS employee_db;
CREATE DATABASE  employee_db; 

USE employee_db;

-- DEPARTMENT TABLE --
CREATE TABLE department (
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

-- ROLES TABLE --
CREATE TABLE roles (
  id INT AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(6,0) NOT NULL,
  department_id INTEGER NULL,
  PRIMARY KEY (id)
);

-- EMPLOYEES TABLE --
CREATE TABLE employees (
  id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER,
  manager_id INT,
  PRIMARY KEY (id)
);