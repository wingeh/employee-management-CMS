-- DEPARTMENT NAMES --
INSERT INTO department (name)
VALUES 
("Sales & Marketing"),
("Accounting"),
("Management");


-- Sales & Marketing Roles --
INSERT INTO roles (title, salary, department_id)
VALUES 
("Sales", 45000, 1), 
("Marketing", 45000, 1);


-- Accounting Roles --
INSERT INTO roles (title, salary, department_id)
VALUES 
("Jr. Accountant", 40000, 2),
("Sr. Accountant", 50000, 2);


-- Management Roles --
INSERT INTO roles (title, salary, department_id)
VALUES 
("Vice-President", 60000, 3), 
("President", 70000, 3);
("CEO", 80000, 3);

-- Employees --
INSERT INTO employees (first_name, last_name, role_id)
VALUES ("Greg", "Ortega", 1);
INSERT INTO employees (first_name, last_name, role_id)
VALUES ("Lilli", "Wagner", 1);
INSERT INTO employees (first_name, last_name, role_id)
VALUES ("Indiana", "McManus", 2);
INSERT INTO employees (first_name, last_name, role_id)
VALUES ("Maggie", "Wade", 3);
INSERT INTO employees (first_name, last_name, role_id)
VALUES ("Kendall", "Cooke", 4);
INSERT INTO employees (first_name, last_name, role_id)
VALUES ("Leja", "Rose", 5);
INSERT INTO employees (first_name, last_name, role_id)
VALUES ("Lina", "Walker", 6);
INSERT INTO employees (first_name, last_name, role_id)
VALUES ("Blythe", "Bautista", 7);