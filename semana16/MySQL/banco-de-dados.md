<!-- exercicio 1.a -->
<!-- VARCHAR(255) declara como string e limita a 255 characteres -->
<!-- primary key declara identificador unico -->
<!-- not null indica que o valor não pode ser null -->

<!-- exercicio 1.b -->
<!-- o programa mostra as databases e as tabelas existentes respectivamente -->

<!-- exercicio 1.c -->
<!-- mostra as configurações da tabela -->

<!-- exercicio 2.b -->
<!-- erro de chave primeiria repetida, isso ocorreu, pois essa declaração não permite valores iguais -->

<!-- exercicio 2.c -->

INSERT INTO Actor (id, name, salary,birth_date,gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

<!-- exercicio 2.d -->

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio da Silva Fagundes Filho",
  400000,
  "1949-04-18", 
  "male"
);

<!-- exericicio 2.e -->

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

<!-- exercicio 2.f -->

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Ana Maria Braga ",
  700000,
  "1947-04-01", 
  "female"
);

<!-- exercicio 3.a -->

SELECT id, name from Actor WHERE gender = "female"

<!-- exericio 3.b -->

SELECT salary from Actor WHERE name = "Tony Ramos"

<!-- exercicio 3.c -->

<!-- Não apareceu nenhuma das linhas inseridas, pois não havia nenhum ator com gender invalid -->

<!-- exercicio 3.d -->

SELECT id, name, salary from Actor WHERE salary <= 500000;

<!-- exercicio 3.e -->

<!-- umas das categorias estava escrito errado -->
SELECT id, name from Actor WHERE id = "002"

<!-- exercicio 4.a -->

<!-- a query ira filtrar por atores cujo nome comece com A ou J e ao mesmo tempo tenham salario superior a 300000 -->

<!-- exericio 4.b -->

SELECT * FROM Actor
WHERE name not LIKE "A%"  AND salary > 350000

<!-- exercicio 4.c -->

SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%")

<!-- exercicio 4.d -->

SELECT * FROM Actor 
WHERE (name LIKE "%a%" OR name LIKE "%A%" or name LIKE "%G%" OR name LIKE "%g%") and salary between 350000 AND 900000

<!-- exercicio 5.a -->

CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    sinopse text NOT NULL,
	release_date DATE NOT NULL,
	avaliacao VARCHAR(2) NOT NULL
);

<!-- exercicio 5.b -->

INSERT INTO Movies
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  "7"
);


<!-- exercicio 5.c -->

INSERT INTO Movies
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  "10"
);


<!-- exercicio 5.d -->

INSERT INTO Movies
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  "8"
);


<!-- exercicio 5.e -->

INSERT INTO Movies
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
)

<!-- exercicio 6.a -->

SELECT id, name, avaliacao FROM Movies WHERE id = "004";

<!-- exercicio 6.b -->

SELECT * FROM Movies WHERE name = "Deus é Brasileiro";

<!-- exercicio 6.c -->

SELECT * FROM Movies WHERE avaliacao > 7

<!-- exercicio 7.a -->

SELECT * FROM Movies WHERE name like "%vida%";

<!-- exercicio 7.b -->

SELECT * FROM Movies WHERE name or sinopse like "%vida%";

<!-- exercicio 7.c -->

SELECT * FROM Movies
WHERE release_date < "2020-05-04";

<!-- exercicio 7.d -->

SELECT * FROM Movies
WHERE release_date < CURDATE() AND 
      (name LIKE "%vida%" OR
      synopse LIKE "%vida%");