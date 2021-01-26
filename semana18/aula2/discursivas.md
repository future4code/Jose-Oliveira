exercicio 1.a
rouds é um fator de seguranca que quanto maior, maior o tempo para execução
salt é uma string aleatoria na saida da informação que impede o rainbow table

exercicio 2.a
o cadastro, pois é ele que gera a senha

exercicio 2.d
não cheguei a completar o exercicio de ontem

exercicio 3.a

CREATE TABLE user (
id VARCHAR(255) PRIMARY KEY,
email VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
role varchar(255) default "normal"
)