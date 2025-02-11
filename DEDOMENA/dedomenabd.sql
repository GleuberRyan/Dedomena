create schema dedomena;

use dedomena;

create table usuario(
	nome_usuario varchar(50) not null,
    email varchar(100) not null,
    senha varchar(100) not null
);

create table ficha(
	nome_personagem varchar(50) not null,
    classe varchar(50) not null, 
    nex varchar(10) not null,
    nivel int,
    desc_abilidades varchar(200),
    agilidade int,
    forca int,
    intelecto int,
    presenca int,
    vigor int
);
