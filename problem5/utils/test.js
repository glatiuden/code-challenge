const { ethers } = require("ethers");
const { abi } = require("../build/contracts/TokenBalanceRetriever.json");

const ADDR = "0x9ba2103e965a6d3670c93c4c96b706420d2a2cf7"; // your contract address
const ABI = [...abi]; // your contract ABI

const ADDRESS = "0x4D496CcC28058B1D74B7a19541663E21154f9c84"; // some wallet address with token balance
const TOKENS = [
  "0x7641d1CBE8aD00b90dc8C4cB48300Dfbd48b548E",
  "0x9816146ec5f29Bb8de6CCFCd2fD5AA10b75E82bA",
];

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = ethers.providers.getDefaultProvider("goerli");

const test = async () => {
  const contract = new ethers.Contract(ADDR, ABI, provider);
  const balances = await contract.getBalances(ADDRESS, TOKENS);
  const formattedBalances = balances.map(({ token, balance }) => ({
    token,
    balance: balance.toString(),
  }));
  return formattedBalances;
};

const main = async () => {
  try {
    const result = await test();
    console.log(result);
    process.exit(0);
  } catch (error) {
    console.error("Error encountered:", error);
    process.exit(1);
  }
};

main();
