DROP DATABASE IF EXISTS blog_hexalud_DB;
CREATE DATABASE  blog_hexalud_DB;

USE blog_hexalud_DB;

CREATE TABLE entradas_blog (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    fecha_publicado DATETIME DEFAULT CURRENT_TIMESTAMP,
    contenido TEXT NOT NULL
);
