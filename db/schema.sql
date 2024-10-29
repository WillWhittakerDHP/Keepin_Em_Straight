DROP DATABASE IF EXISTS survivors_db;
CREATE DATABASE survivors_db;

\c survivors_db;

CREATE TABLE alignment(
  id SERIAL PRIMARY KEY,
  alignment_id VARCHAR(10) UNIQUE NOT NULL
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

CREATE TABLE survivors(
  survivor_id SERIAL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  alignment_id INTEGER NOT NULL,
  FOREIGN KEY (alignment_id) REFERENCES alignment(id),
  division_id INTEGER NOT NULL,
  FOREIGN KEY (division_id) REFERENCES division(id),
  role_id INTEGER NOT NULL,
  FOREIGN KEY (role_id) REFERENCES role(id),
  commander_id INTEGER,
  FOREIGN KEY(commander_id) REFERENCES survivors(survivor_id)
);

-- SELECT * alignment.alignment_id, division.id, role.id, survivor.commander_id
-- FROM survivors;
-- JOIN alignment ON businesses.business_id = relationships.business_id
-- JOIN division ON
-- JOIN role ON relationships.locations_id = locations.location_id;