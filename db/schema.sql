DROP DATABASE IF EXISTS survivors_db;
CREATE DATABASE survivors_db;

\c survivors_db;

CREATE TABLE alignment(
  alignment_id INTEGER PRIMARY KEY,
  alignment_type VARCHAR(10) UNIQUE NOT NULL
);

CREATE TABLE division(
  division_id INTEGER PRIMARY KEY,
  division_name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE roles(
  role_id INTEGER PRIMARY KEY,
  title VARCHAR(30) UNIQUE NOT NULL,
  salary DECIMAL NOT NULL,
  division INTEGER NOT NULL,
  FOREIGN KEY (division) REFERENCES division(division_id)
);

CREATE TABLE survivors(
  survivor_id SERIAL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  alignment_id INTEGER NOT NULL,
  FOREIGN KEY (alignment_id) REFERENCES alignment(alignment_id),
  division_id INTEGER NOT NULL,
  FOREIGN KEY (division_id) REFERENCES division(division_id),
  role_id INTEGER NOT NULL,
  FOREIGN KEY (role_id) REFERENCES roles(role_id),
  commander INTEGER REFERENCES survivors(survivor_id)
);