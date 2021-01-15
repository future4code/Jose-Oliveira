<!-- exercicio 1.a -->

<!-- chave estrangeira é uma primary key de outra tabela -->

<!-- exercicio 1.b -->

insert into Rating values
("001","bonzinho","7","001")

insert into Rating values
("002","ok","8","002")

insert into Rating values
("004","meh","5","004")

<!-- exercicio 1.c -->

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-jose-oliveira`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
<!-- ele indica que ele tem que fazer referencia a um id existente -->

<!-- exercicio 1.d -->

alter table Movies drop column avaliacao

<!-- exercicio 1.e -->

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`dumont-jose-oliveira`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
<!-- ele indica que não pode apagar uma linha que é pai de uma foreing key -->

<!-- exercicio 2.a -->

<!-- essa tabela faz referencia a tabela de filmes, indicando um filme e faz referencia a tabela de atores, indiando quais
tiveram participação no filme -->

<!-- exercicio 2.b -->

insert into MovieCast values
("002","004"),("004","004"),("004","005"),("001","006"),("001","007")

<!-- exercicio 2.c -->

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-jose-oliveira`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
<!-- ele indica falha na busca da foreing key -->

<!-- exercicio 2.d -->

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`dumont-jose-oliveira`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
<!-- ele indica que não pode deleter um pai de uma foreing key -->

<!-- exercicio 3.a -->

<!-- A query em questão junta duas tabelas com suas informações relacionadas lado a lado -->

<!-- exercicio 3.b -->

SELECT name, Movies.id, rate FROM Movies
INNER JOIN Rating ON Movies.id = Rating.movie_id;

<!-- exercicio 4.a -->

SELECT name, Movies.id, rate, comment FROM Movies
JOIN Rating ON Movies.id = Rating.movie_id;

<!-- exercicio 4.b -->

SELECT id,name,actor_id FROM Movies
JOIN MovieCast ON Movies.id = MovieCast.movie_id;

<!-- exercicio 4.c -->

SELECT name, avg(rate) FROM Movies
JOIN Rating ON Movies.id = Rating.movie_id
group by Movies.id;

<!-- exercicio 5.a -->

<!-- é necessario usar join duas vezes pois estamos juntando 3 tabeles em uma -->

<!-- exercicio 5.b -->

SELECT Movies.id, Movies.name, Actor.name FROM MovieCast
JOIN Movies ON Movies.id = MovieCast.movie_id
join Actor on Actor.id = MovieCast.actor_id

<!-- exercicio 6.a -->

<!-- N:M, pois um filme pode ter varios oscars e dois filmes podem ter o mesmo oscar de anos diferentes  -->

<!-- exercicio 6.b -->
<!-- exercicio 6.c -->
<!-- exercicio 6.d -->


