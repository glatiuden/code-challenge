const TokenBalanceRetriever = artifacts.require("TokenBalanceRetriever");

module.exports = function (deployer) {
  deployer.deploy(TokenBalanceRetriever);
};
