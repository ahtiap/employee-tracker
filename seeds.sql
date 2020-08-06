INSERT INTO department(name) values ("Finance"),("Human Resources"),("IT");

INSERT INTO role(title,salary,department_id) 
values ("Accountant",40000,1),("Hiring Manager",50000,2),
("Programmer",45000,3);

INSERT INTO employee(firstname,lastname,role_id) 
values ("Justin","Pinero",3),
("David","Gate",1),("Alex","Caruso",2);