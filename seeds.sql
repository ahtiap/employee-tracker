INSERT INTO department(name) values ("Finance"),("Human Resources"),("IT");

INSERT INTO role(title,salary,department_id) 
values ("Accountant",40000,1),("Hiring Manager",50000,2),
("Programmer",45000,3);

INSERT INTO employee(first_name,last_name,role_id) 
values ("Justin","Pinero",7),
("David","Gate",4),("Alex","Caruso",5);