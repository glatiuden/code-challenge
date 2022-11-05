CREATE TABLE balances (
	id INTEGER PRIMARY KEY,
	address VARCHAR(255),
	denom VARCHAR(4),
	amount BIGINT,
	block_height INTEGER
);

CREATE TABLE trades (
	id INTEGER PRIMARY KEY,
	address VARCHAR(255),
	denom VARCHAR(4),
	amount BIGINT,
	block_height INTEGER
);

INSERT INTO balances VALUES (1, '0xabab', 'usdc', 50000000000000, 733755);
INSERT INTO balances VALUES (2, '0x99cc', 'swth', -20000000, 733757);
INSERT INTO balances VALUES (3, '0xabab', 'usdc', -50000000000, 733855);

INSERT INTO trades VALUES (1, '0xabab', 'swth', 400000000000, 733756);
INSERT INTO trades VALUES (2, '0x99cc', 'usdc', 3500000000000, 733757);
INSERT INTO trades VALUES (3, '0x67f3', 'swth', 72000000000000, 733758);