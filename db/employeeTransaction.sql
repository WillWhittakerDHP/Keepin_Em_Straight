DO $$
DECLARE
BEGIN

INSERT INTO departments (department_id, department_name)
VALUES  
        (00, 'Command'),
        (10, 'Combat'),
        (20, 'Engineering'),
        (30, 'Executive'),
        (40, 'Quorum'),
        (50, 'Civilian');

INSERT INTO roles (role_id, title, salary, department)
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

INSERT INTO employees (first_name, last_name, department_id, role_id, manager)
VALUES 
        ('Lee', 'Adama', 40, 800, NULL),
        ('William', 'Adama', 00, 000, NULL),
        ('Hera', 'Agathon', 50, 901, NULL),
        ('Karl', 'Agathon', 00, 100, 2),
        ('Sharon', 'Agathon', 10, 300, 4),
        ('Samuel', 'Anders', 10, 200, NULL),
        ('Gaius', 'Baltar', 50, 900, NULL),
        ('D`Anna', 'Biers', 50, 901, NULL),
        ('John', 'Cavil', 50, 902, NULL),
        ('Leoben', 'Conoy', 50, 900, NULL),
        ('Aaron', 'Doral', 50, 902, NULL),
        ('Anastasia', 'Dualla', 00, 100, NULL),
        ('Tory', 'Foster', 30, 700, NULL),
        ('Felix', 'Gaeta', 00, 100, NULL),
        ('Cally', 'Henderson', 20, 500, NULL),
        ('Louanne', 'Katraine', 10, 200, NULL),
        ('Billy', 'Keikeya', 30, 700, NULL),
        ('Simon', 'O`Neill', 50, 902, NULL),
        ('Crashdown', 'Quartararo', 10, 300, NULL),
        ('Laura', 'Roslin', 30, 600, NULL),
        ('Caprica', 'Six', 20, 500, NULL),
        ('Kara', 'Thrace', 10, 200, NULL),
        ('Ellen', 'Tigh', 50, 900, NULL),
        ('Saul', 'Tigh', 00, 100, 2),
        ('Galen', 'Tyrol', 20, 400, 24),
        ('Tom', 'Zarek', 40, 800, NULL),
        ('Daniel', '<Unknown>', 50, 901, NULL);

RAISE NOTICE 'Employees database created';

EXCEPTION
WHEN OTHERS THEN
RAISE NOTICE 'An error occurred:%', SQLERRM;
ROLLBACK;

END $$;