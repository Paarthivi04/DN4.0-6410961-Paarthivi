BEGIN
    FOR rec IN (SELECT CustomerID, LoanID, DueDate FROM Loans WHERE DueDate <= SYSDATE + 30) LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Loan ' || rec.LoanID || ' for Customer ' || rec.CustomerID || ' is due on ' || rec.DueDate);
    END LOOP;
END;
/
