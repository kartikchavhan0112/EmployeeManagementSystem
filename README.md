# EmployeeManagementSystem
 The Employee Management System is a full-stack web app for managing employees, departments, and roles. It offers a user-friendly interface to add, update, delete, and view details efficiently. Built with React for the frontend and Spring Boot for the backend, it ensures seamless performance and a smooth user experience.

# Features:
1. Employee Management
Add new employees with details like name, email, and salary.
Update existing employee information.
Delete employees from the system.
View a list of all employees with their details.

2. Department Management
Add new departments.
Update department names.
Delete departments.
View a list of all departments.

3. Role Management
Add new roles.
Update role names.
Delete roles.
View a list of all roles.

4. Dashboard
Displays the total number of employees, departments, and roles at a glance.

5. Responsive Design
The application is fully responsive and works seamlessly on all devices (desktop, tablet, and mobile).

6. Error Handling
Proper error handling for API requests and form submissions.

# How to Install and Run:
1) Frontend (React)
Prerequisites:
Node.js (v16 or higher)
npm (Node Package Manager)

Steps:
a) Clone the Repository
bash
-> git clone https://github.com/kartikchavhan0112/EmployeeManagementSystem.git
-> cd EmployeeManagementSystem-Frontend

b) Install Dependencies
bash
-> npm install

c) Run the Application
bash
-> npm run dev
The frontend will start on http://localhost:5173.

2) Backend (Spring Boot)
Prerequisites:
Java (JDK 17 or higher)
Maven (for building the project)
MySQL (or any other relational database)

Steps:
a) Clone the Repository
bash
-> cd EmployeeManagementSystem-Backend

b) Configure the Database
Open src/main/resources/application.properties and update the database configuration:

properties:
server port:
server.port=9090

database properties:
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/[sql file name]
spring.datasource.username=[Username]
spring.datasource.password=[Password]

hibernate properties:
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
spring.jpa.properties.hibernate.hbm2ddl.auto=update

c) Build the Project
bash
-> mvn clean install

Run the Application
bash
-> mvn spring-boot:run
The backend will start on http://localhost:9090.

Conclusion
The Employee Management System is a robust and efficient solution for managing employees, departments, and roles within an organization. With its intuitive user interface and powerful backend, it simplifies the process of managing organizational data. Whether you're a small business or a large enterprise, this system provides the tools you need to streamline your operations.

# Technologies Used
Frontend:
React: A JavaScript library for building user interfaces.
Vite: A fast build tool for modern web applications.
React Router: For handling routing in the application.
Axios: For making HTTP requests to the backend.

Backend:
Spring Boot: A Java-based framework for building web applications.
Spring Data JPA: For database operations.
MySQL: A relational database for storing data.
CORS: For enabling cross-origin requests.

# License
This project is licensed under the MIT License. See the LICENSE file for details.
