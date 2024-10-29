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
        (00, "Command"),
        (10, "Combat"),
        (20, "Engineering"),
        (30, "Executive")
        (40, "Quorum"),
        (50, "Civilian");

INSERT INTO role (role_id, title, salary, division_id)
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
        (900, 'Undisclosed', 30000, 60);

INSERT INTO employee (first_name, last_name, alignment_id, division_id, role_id, commander_id)
VALUES 
        ('William', 'Adama', 1, 00, 000,)
        ('Lee', 'Adama', 1, 50, 800)
        ('Felix', 'Gaeta', 4, 00, 100),
        ('Anastasia', 'Dualla', 4, 00, 100),
        ('Kara', 'Thrace', 5, 10, 200),
        ('Crashdown', 'Quartararo', 4, 10, 300),
        ('Louanne', 'Katraine', 4, 10, 200),
        ('Hera', 'Agathon', 3, 50, 900),
        ('Karl', 'Agathon', 3, 00, 100),
        ('Tom', 'Zarek', 4, 50, 800),
        ('Laura', 'Roslin', 4, 30, 600),
        ('Gaius', 'Baltar', 1, 50, 900),
        ('Billy', 'Keikeya', 4, 30, 700),
        ('Cally', 'Henderson', 4, 20, 500),
        ('John', 'Cavil', 2, 50, 900),
        ('Leoben', 'Conoy', 2, 50, 900),
        ('D`Anna', 'Biers', 2, 50, 900),
        ('Simon', 'O`Neill', 2, 50, 900),
        ('Aaron', 'Doral', 2, 50, 900),
        ('Caprica', 'Six,' 2, 20, 500),
        ('Daniel', '<Unknown>', 5, 50, 900),
        ('Sharon', 'Agathon', 2, 10, 300),
        ('Samuel', 'Anders', 2, 10, 200),
        ('Tory', 'Foster', 2, 30, 700),
        ('Galen', 'Tyrol', 2, 20, 400),
        ('Ellen', 'Tigh', 2, 50, 900),
        ('Saul', 'Tigh', 2, 00, 200);

RAISE NOTICE 'Survivors database created';

EXCEPTION
WHEN OTHERS THEN
RAISE NOTICE 'An error occured:%', SQLERRM;
ROLLBACK;

END $$;