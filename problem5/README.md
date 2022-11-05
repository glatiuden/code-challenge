# Problem 5: Utility Contract

## Set up

To read the token balance, `@openzeppelin/contracts` - `IERC20` is used. This allows retrieval of token balance without the need of writing custom contract.
Reference: [https://docs.openzeppelin.com/contracts/2.x/api/token/erc20](https://docs.openzeppelin.com/contracts/2.x/api/token/erc20).

To install the required dependencies:

```
yarn
```

## Contract

The contract has been deployed to Goerli testnet using Infura.
You may view the contract [here](https://goerli.etherscan.io/tx/0xca1cad4d9aafa9812cb1a993a18025f4f12f659051603b998ecdb628c6974227).

## Test

The test script has been copied and put into the `utils` folder (in order to avoid conflict with the automated testing framework that comes with Truffle).

To test the contract, please run:

```
yarn test
```
