DELIMITER $$

CREATE PROCEDURE TransferFunds(
    IN fromAccount INT,
    IN toAccount INT,
    IN amount DECIMAL(10,2)
)
BEGIN
    DECLARE fromBalance DECIMAL(10,2);

    SELECT Balance INTO fromBalance
    FROM BankAccounts
    WHERE AccountID = fromAccount;

    IF fromBalance >= amount THEN
        UPDATE BankAccounts
        SET Balance = Balance - amount
        WHERE AccountID = fromAccount;

        UPDATE BankAccounts
        SET Balance = Balance + amount
        WHERE AccountID = toAccount;
    END IF;
END$$

DELIMITER ;
