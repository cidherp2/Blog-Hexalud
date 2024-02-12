USE blog_hexalud_DB;

DELIMITER //

CREATE PROCEDURE CrearEntrada (
    IN p_titulo VARCHAR(255),
    IN p_autor VARCHAR(255),
    IN p_contenido TEXT
)
BEGIN
    INSERT INTO entradas_blog (titulo, autor, contenido)
    VALUES (p_titulo, p_autor, p_contenido);
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE getEntradasCortas()
BEGIN 
    SELECT id, titulo, autor, LEFT(contenido, 70) AS acortado, fecha_publicado
    FROM entradas_blog;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE leerEntradasId (
    IN p_id INT
)
BEGIN 
    SELECT * FROM entradas_blog
    WHERE id = p_id;
END //

DELIMITER ;

DELIMITER //
CREATE PROCEDURE leerEntradas()
BEGIN 
    SELECT * FROM entradas_blog;
END //

DELIMITER ;

DELIMITER //
CREATE PROCEDURE leerEntradasFiltradas(
    IN p_autor VARCHAR(255),
    IN p_titulo VARCHAR(255),
    IN p_keywords TEXT
)
BEGIN 
    SELECT id, titulo, autor, LEFT(contenido, 70) AS acortado, fecha_publicado
    FROM entradas_blog
    WHERE (p_autor IS NULL OR autor LIKE CONCAT('%', p_autor, '%'))
      OR (p_titulo IS NULL OR titulo LIKE CONCAT('%', p_titulo, '%'))
      OR (p_keywords IS NULL OR contienePalabraClave(contenido, p_keywords));
END //
DELIMITER ;

