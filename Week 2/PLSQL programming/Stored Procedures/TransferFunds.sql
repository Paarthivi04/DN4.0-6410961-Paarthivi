CREATE OR REPLACE PROCEDURE TransferFunds(
    p_from_account IN NUMBER,
    p_to_account   IN NUMBER,
    p_amount       IN NUMBER
) IS
    v_balance NUMBER;
BEGIN
    
    SELECT balance INTO v_balance
    FROM BankAccounts
    WHERE account_id = p_from_account;

    IF v_balance < p_amount THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance in source account.');
    END IF;

   
    UPDATE BankAccounts
    SET balance = balance - p_amount
    WHERE account_id = p_from_account;

    
    UPDATE BankAccounts
    SET balance = balance + p_amount
    WHERE account_id = p_to_account;

    COMMIT;
END;
/
