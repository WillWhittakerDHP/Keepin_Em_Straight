DO $$
DECLARE
BEGIN
INSERT INTO alignments (alignment_id, alignment_type)
VALUES  
        (0, 'Human'),
        (1, 'Cylon'),
        (2, 'Hybrid'),
        (3, 'Deceased'),
        (4, 'Angel');

INSERT INTO divisions (division_id, division_name)
VALUES  
        (00, 'Command'),
        (10, 'Combat'),
        (20, 'Engineering'),
        (30, 'Executive'),
        (40, 'Quorum'),
        (50, 'Civilian');

INSERT INTO roles (role_id, title, salary, division)
VALUES  
        (000, 'Command Officer', 100000, 00),
        (100, 'CIC Staff', 60000, 00),
        (200, 'Viper Pilot', 60000, 10),
        (300, 'Raptor Pilot', 80000, 10),
        (400, 'Deck Chief', 70000, 20),
        (500, 'Deck Hand', 60000, 20),
        (600, 'President', 100000, 30),
        (700, 'Executive Staff', 60000, 30),
        (800, 'Representative', 85000, 40),
        (900, 'Undisclosed', 30000, 50),
        (901, 'Not Applicable', 0, 50),
        (902, 'Enemy Combattant', 0, 50);

INSERT INTO survivors (first_name, last_name, alignment_id, division_id, role_id, commander)
VALUES 
        ('Lee', 'Adama', 0, 40, 800, NULL),
        ('William', 'Adama', 0, 00, 000, NULL),
        ('Hera', 'Agathon', 2, 50, 901, NULL),
        ('Karl', 'Agathon', 0, 00, 100, 2),
        ('Sharon', 'Agathon', 1, 10, 300, 4),
        ('Samuel', 'Anders', 3, 10, 200, NULL),
        ('Gaius', 'Baltar', 0, 50, 900, NULL),
        ('D`Anna', 'Biers', 3, 50, 901, NULL),
        ('John', 'Cavil', 1, 50, 902, NULL),
        ('Leoben', 'Conoy', 1, 50, 900, NULL),
        ('Aaron', 'Doral', 1, 50, 902, NULL),
        ('Anastasia', 'Dualla', 3, 00, 100, NULL),
        ('Tory', 'Foster', 3, 30, 700, NULL),
        ('Felix', 'Gaeta', 3, 00, 100, NULL),
        ('Cally', 'Henderson', 3, 20, 500, NULL),
        ('Louanne', 'Katraine', 3, 10, 200, NULL),
        ('Billy', 'Keikeya', 3, 30, 700, NULL),
        ('Simon', 'O`Neill', 1, 50, 902, NULL),
        ('Crashdown', 'Quartararo', 3, 10, 300, NULL),
        ('Laura', 'Roslin', 3, 30, 600, NULL),
        ('Caprica', 'Six', 1, 20, 500, NULL),
        ('Kara', 'Thrace', 4, 10, 200, NULL),
        ('Ellen', 'Tigh', 1, 50, 900, NULL),
        ('Saul', 'Tigh', 1, 00, 100, 2),
        ('Galen', 'Tyrol', 1, 20, 400, 24),
        ('Tom', 'Zarek', 3, 40, 800, NULL),
        ('Daniel', '<Unknown>', 3, 50, 901, NULL);

RAISE NOTICE 'Survivors database created';

EXCEPTION
WHEN OTHERS THEN
RAISE NOTICE 'An error occurred:%', SQLERRM;
ROLLBACK;

END $$;