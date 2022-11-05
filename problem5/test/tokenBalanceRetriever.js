const TokenBalanceRetriever = artifacts.require("TokenBalanceRetriever");

const ADDRESS = "0x4D496CcC28058B1D74B7a19541663E21154f9c84"; // some wallet address with token balance
const TOKENS = [
  "0x7641d1CBE8aD00b90dc8C4cB48300Dfbd48b548E",
  "0x9816146ec5f29Bb8de6CCFCd2fD5AA10b75E82bA",
];

contract("TokenBalanceRetriever", () => {
  let tokenBalanceRetrieverInstance;

  beforeEach(async () => {
    tokenBalanceRetrieverInstance = await TokenBalanceRetriever.deployed();
  });

  it("Should equal to the balance as of 3 Nov 2022", async () => {
    const network_id = tokenBalanceRetrieverInstance.constructor.network_id;
    // Only run this test on goerli network
    if (network_id !== 5) {
      return;
    }

    const balances = await tokenBalanceRetrieverInstance.getBalances.call(
      ADDRESS,
      TOKENS
    );
    assert.equal(balances[0]["balance"].toString(), "100000000000000000000");
    assert.equal(balances[1]["balance"].toString(), "10000000000000000000");
  });
});
