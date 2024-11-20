DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

\c employees_db;

-- CREATE TABLE alignments(
--   alignment_id INTEGER PRIMARY KEY,
--   alignment_type VARCHAR(10) UNIQUE NOT NULL
-- );

CREATE TABLE departments(
  department_id INTEGER PRIMARY KEY,
  department_name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE roles(
  role_id INTEGER PRIMARY KEY,
  title VARCHAR(30) UNIQUE NOT NULL,
  salary DECIMAL NOT NULL,
  department INTEGER NOT NULL,
  FOREIGN KEY (department) REFERENCES departments(department_id)
);

CREATE TABLE employees(
  employee_id SERIAL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  department_id INTEGER NOT NULL,
  FOREIGN KEY (department_id) REFERENCES departments(department_id),
  role_id INTEGER NOT NULL,
  FOREIGN KEY (role_id) REFERENCES roles(role_id),
  manager INTEGER,
  CONSTRAINT fk_manager FOREIGN KEY (manager) REFERENCES employees(employee_id)
);