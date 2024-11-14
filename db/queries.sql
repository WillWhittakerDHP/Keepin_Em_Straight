
-- JOIN commander ON survivors.commander = survivors.survivor_id;
-- SELECT concat(first_name, ' ', last_name) AS "Name", divisions.division_name AS "Division"
-- FROM survivors 
-- JOIN alignments ON survivors.alignment_id = alignments.alignment_id
-- JOIN divisions ON survivors.division_id = divisions.division_id
-- WHERE survivors.alignment_id = 0
-- ;

-- SELECT concat(first_name, ' ', last_name) AS "Survivor", alignments.alignment_type AS "Alignment", roles.title AS "Role"
-- FROM survivors 
-- JOIN alignments ON survivors.alignment_id = alignments.alignment_id
-- JOIN divisions ON survivors.division_id = divisions.division_id
-- JOIN roles ON survivors.role_id = roles.role_id 
-- WHERE survivors.division_id = 50
-- ;

-- SELECT divisions.division_name AS "Division", SUM(roles.salary) AS "Budget (in cubits)"
-- FROM survivors
-- JOIN divisions ON survivors.division_id = divisions.division_id
-- JOIN roles ON divisions.division_id = divisions.division_id
-- GROUP BY divisions.division_name;

select array_to_json(array_agg(row_to_json(t)))
from (
SELECT survivor_id, first_name, last_name, alignments.alignment_id, roles.role_id, divisions.division_id, commander
FROM survivors
JOIN alignments ON survivors.alignment_id = alignments.alignment_id
JOIN divisions ON survivors.division_id = divisions.division_id
JOIN roles ON survivors.role_id = roles.role_id
) t;