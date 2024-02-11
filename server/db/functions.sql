
DELIMITER //

CREATE FUNCTION contienePalabraClave(texto TEXT, keywords TEXT) RETURNS BOOLEAN DETERMINISTIC
BEGIN
    DECLARE keywordCount INT;
    DECLARE currentKeyword VARCHAR(255);
    DECLARE currentPosition INT;

    SET keywordCount = LENGTH(keywords) - LENGTH(REPLACE(keywords, ' ', '')) + 1;
    SET currentPosition = 1;

    WHILE currentPosition <= keywordCount DO
        SET currentKeyword = TRIM(SUBSTRING_INDEX(SUBSTRING_INDEX(keywords, ' ', currentPosition), ' ', -1));

        IF INSTR(texto, currentKeyword) > 0 THEN
            RETURN TRUE;
        END IF;

        SET currentPosition = currentPosition + 1;
    END WHILE;

    RETURN FALSE;
END //

DELIMITER ;
