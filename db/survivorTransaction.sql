DO $$
DECLARE
BEGIN
INSERT INTO alignment (alignment_id, alignment_type)
VALUES  
        (0, 'Human'),
        (1, 'Cylon'),
        (2, 'Hybrid'),
        (3, 'Deceased'),
        (4, 'Angel');

INSERT INTO division (division_id, division_name)
VALUES  
        (00, 'Command'),
        (10, 'Combat'),
        (20, 'Engineering'),
        (30, 'Executive'),
        (40, 'Quorum'),
        (50, 'Civilian');

INSERT INTO roles (role_id, title, salary, division)
VALUES  
        (000, 'Command Officer', 100000, 10),
        (100, 'CIC Staff', 60000, 10),
        (200, 'Viper Pilot', 60000, 10),
        (300, 'Raptor Pilot', 80000, 20),
        (400, 'Deck Chief', 70000, 30),
        (500, 'Deck Hand', 60000, 30),
        (600, 'President', 100000, 40),
        (700, 'Executive Staff', 60000, 40),
        (800, 'Representative', 85000, 50),
        (900, 'Undisclosed', 30000, 50);

INSERT INTO survivors (first_name, last_name, alignment_id, division_id, role_id, commander)
VALUES 
        ('William', 'Adama', 0, 00, 000),
        ('Lee', 'Adama', 0, 50, 800),
        ('Felix', 'Gaeta', 3, 00, 100),
        ('Anastasia', 'Dualla', 3, 00, 100),
        ('Kara', 'Thrace', 4, 10, 200),
        ('Crashdown', 'Quartararo', 3, 10, 300),
        ('Louanne', 'Katraine', 3, 10, 200),
        ('Hera', 'Agathon', 2, 50, 900),
        ('Karl', 'Agathon', 0, 00, 100),
        ('Tom', 'Zarek', 3, 50, 800),
        ('Laura', 'Roslin', 3, 30, 600),
        ('Gaius', 'Baltar', 0, 50, 900),
        ('Billy', 'Keikeya', 3, 30, 700),
        ('Cally', 'Henderson', 3, 20, 500),
        ('John', 'Cavil', 1, 50, 900),
        ('Leoben', 'Conoy', 1, 50, 900),
        ('D`Anna', 'Biers', 1, 50, 900),
        ('Simon', 'O`Neill', 1, 50, 900),
        ('Aaron', 'Doral', 1, 50, 900),
        ('Caprica', 'Six', 1, 20, 500),
        ('Daniel', '<Unknown>', 3, 50, 900),
        ('Sharon', 'Agathon', 1, 10, 300),
        ('Samuel', 'Anders', 1, 10, 200),
        ('Tory', 'Foster', 1, 30, 700),
        ('Galen', 'Tyrol', 1, 20, 400),
        ('Ellen', 'Tigh', 1, 50, 900),
        ('Saul', 'Tigh', 1, 00, 200, 1);

RAISE NOTICE 'Survivors database created';

EXCEPTION
WHEN OTHERS THEN
RAISE NOTICE 'An error occurred:%', SQLERRM;
ROLLBACK;

END $$;

SELECT concat(first_name, ' ', last_name) AS "Name", alignment.alignment_type AS "Alignment", division.division_name AS "Division", roles.title AS "Role", roles.salary AS "Salary"
, survivors.commander AS "Commander"
FROM survivors
JOIN alignment ON survivors.alignment_id = alignment.alignment_id
JOIN division ON survivors.division_id = division.division_id
JOIN roles ON survivors.role_id = roles.role_id
JOIN commander ON survivors.commander = survivors.survivor_id;