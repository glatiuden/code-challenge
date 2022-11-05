# Problem 5: SQL Query

The SQL query written is based on PostgreSQL.

## Set up

The setup can be found in `setup.sql`, which is a script containing the creation of the tables and the insertion of sample data.

A `docker-compose.yaml` is also included to allow spin up of a PostgreSQL server + pgAdmin without the need of installation.

Reference: [https://github.com/khezen/compose-postgres](https://github.com/khezen/compose-postgres)

To spin up the Docker containers, please run

```
docker compose up -d
```

## Task

The actual query can be found in `query.sql`.

There are multiple ways of writing the same query, and I have attempted two different approaches:

```sql
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

-- Approach 2: Using CTE
-- Average Planning Time over 10 attempts: 0.120 ms
-- Average Execution Time over 10 attempts: 0.102 ms
-- Step 1: Sum up all the balance records' amount of the same address which will give us the wallet's current balance, and filter those that total are > 500
WITH b_cte AS (SELECT b.address FROM balances b
GROUP BY b.address
HAVING SUM(b.amount *
(CASE
    WHEN b.denom = 'usdc' THEN 0.000001
    WHEN b.denom = 'swth' THEN 0.00000005
    ELSE 0.003
END)) >= 500)

-- Step 2: Join with the trades table and filter those which the trade's txn block height is > 73000
SELECT b.address FROM b_cte b INNER JOIN trades t ON b.address = t.address
WHERE t.block_height > 730000
GROUP BY b.address;
```

`EXPLAIN ANALYZE` has been run for each query. Over an average of 10 attempts, the nested query approach seems to be a bit faster compared to the CTE approach, as it's able to filter before performing sequential scans.
