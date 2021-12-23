CREATE TABLE users (
    user_id bigserial PRIMARY KEY,
    user_name VARCHAR(100) not null,
    user_email text not null,
    user_password bigint not null,
    isAdmin VARCHAR(250) DEFAULT 'false'
);

 
CREATE TABLE movies (
    movies_id serial,
    movies_name VARCHAR(400) not null,
    movies_text text,
    movies_img text not NULL ,
    movies_year VARCHAR(500),
    movies_triler text
);
CREATE TABLE diagrama (
    jammi bigint DEFAULT 0,
    sirdaryo bigint DEFAULT 0,
    fargona bigint DEFAULT 0,
    andijon bigint DEFAULT 0,
    namangan bigint DEFAULT 0,
    buxoro bigint DEFAULT 0,
    samarqand bigint DEFAULT 0,
    surxandaryo bigint DEFAULT 0,
    navoi bigint DEFAULT 0,
    jizzax bigint DEFAULT 0,
    xorazim bigint DEFAULT 0,
    qashqadaryo bigint DEFAULT 0,
    Tashkent bigint DEFAULT 0
);