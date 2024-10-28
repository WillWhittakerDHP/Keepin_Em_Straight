DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

\c employees_db;

CREATE TABLE humanity(
  id SERIAL PRIMARY KEY,
  humanity_id VARCHAR(10) UNIQUE NOT NULL
);

CREATE TABLE division(
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE role(
  id SERIAL PRIMARY KEY,
  title VARCHAR(30) UNIQUE NOT NULL,
  salary DECIMAL NOT NULL,
  division INTEGER NOT NULL,
  FOREIGN KEY (division) REFERENCES division(id)
);

CREATE TABLE employees(
  employee_id SERIAL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  humanity_id INTEGER NOT NULL,
  FOREIGN KEY (humanity_id) REFERENCES humanity(id),
  division_id INTEGER NOT NULL,
  FOREIGN KEY (division_id) REFERENCES division(id),
  role_id INTEGER NOT NULL,
  FOREIGN KEY (role_id) REFERENCES role(id),
  commander_id INTEGER,
  FOREIGN KEY(commander_id) REFERENCES employees(employee_id)
);

-- SELECT * humanity.humanity_id, division.id, role.id, employee.commander_id
-- FROM employees;
-- JOIN humanity ON businesses.business_id = relationships.business_id
-- JOIN division ON
-- JOIN role ON relationships.locations_id = locations.location_id;