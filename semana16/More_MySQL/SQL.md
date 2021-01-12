<!-- exercicio 1.a -->

<!-- Remove a coluca salary  -->

<!-- exercicio 1.b -->

<!-- muda o nome de da linha gender para sex -->

<!-- exercicio 1.c -->

<!-- altera o numero maximo de characteres para 255 -->

<!-- exercicio 1.d -->

ALTER TABLE Actor CHANGE sex sex VARCHAR(100);

<!-- exercicio 2.a -->

UPDATE Actor
SET birth_date = "1970/01/01"
WHERE id = "003"

<!-- exercicio 2.b -->

UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";


<!-- exercicio 2.c -->

UPDATE Actor
SET name = "Juliana Paes",
salary = "10000",
birth_date = "1970/01/01",
sex = "male"
WHERE id = "005";

<!-- exercicio 2.d -->

<!-- Error Code: 1054. Unknown column 'sdsafew' in 'field list'	0,063 sec,  ele indica a inexistencia da coluna pedida -->

<!-- exercicio 3.a -->

DELETE FROM Actor WHERE name = "Fernanda Montenegro"

<!-- exercicio 3.b -->

DELETE FROM Actor WHERE sex = "male" and salary > 1000000

<!-- exercicio 4.a -->

SELECT MAX(salary)from Actor;

<!-- exercicio 4.b -->

SELECT MIN(salary)from Actor
where sex = "female";

<!-- exercicio 4.c -->

SELECT COUNT(*)FROM Actor where sex = "female";

<!-- exercicio 4.d -->

SELECT SUM(salary)FROM Actor;

<!-- exercicio 5.a -->

<!-- a query retornou as possiveis respostas e quantas vezes cada uma foi encontrada -->

<!-- exercicio 5.b -->

SELECT id, name FROM Actor ORDER BY name desc

<!-- exercicio 5.c -->

SELECT * FROM Actor ORDER BY salary asc

<!-- exercicio 5.d -->

SELECT * FROM Actor ORDER BY salary desc limit 3

<!-- exercicio 5.e -->

SELECT AVG(salary), sex FROM Actor
group by sex;

<!-- exercicio 6.a -->

alter table Movies
add playing_limit_date varchar(255)

<!-- exercicio 6.b -->

ALTER TABLE Movies CHANGE avaliacao avaliacao float;

<!-- exercicio 6.c -->

update Movies
set playing_limit_date = "01/01/2500"
where id = 001

update Movies
set playing_limit_date = "01/01/1500"
where id = 002

<!-- exercicio 6.d -->

DELETE FROM Movie WHERE id = "001"
<!-- ele diz que fez as alterações porem 0 linha e colunas foram afetadas -->

<!-- exercicio 7.a -->

select * from Movies where avaliacao >7.5

<!-- exercicio 7.b -->

select avg(avaliacao) from Movies

<!-- exercicio 7.c -->

select count(*) from Movies

<!-- exercicio 7.d -->

select count(*) from Movies where release_date > curdate()

<!-- exercicio 7.e -->

select max(avaliacao) from Movies

<!-- exercicio 7.f -->

select min(avaliacao) from Movies

<!-- exercicio 8.a -->

select * from Movies order by name asc

<!-- exercicio 8.b -->

select * from Movies order by name desc limit 5

<!-- exercicio 8.c -->

select * from Movies order by release_date desc limit 3

<!-- exercicio 8.d -->

select * from Movies order by avaliacao desc limit 3
