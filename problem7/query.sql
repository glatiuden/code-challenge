-- Note that balances is the table that records the **balance change**, not the wallet's current balance. Hence: need to sum up all the balance changes for each address and denom.
-- Approach 1: Nested Query
-- Average Planning Time over 10 attempts: 0.089 ms
-- Average Execution Time over 10 attempts: 0.051 ms
SELECT b.address FROM balances b INNER JOIN trades t
-- Step 1: Join both tables on the address  
ON b.address = t.address
WHERE
-- Step 2: Filter those which the trade's txn block height is > 73000
t.block_height > 730000
GROUP BY b.address
-- Step 3: Sum up all the balance records' amount of the same address which will give us the wallet's current balance, and filter those that total are > 500
HAVING SUM(b.amount *
(CASE
    WHEN b.denom = 'usdc' THEN 0.000001
    WHEN b.denom = 'swth' THEN 0.00000005
    ELSE 0.003
END)) >= 500;
