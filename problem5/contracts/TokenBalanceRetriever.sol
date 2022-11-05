// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TokenBalanceRetriever {
    struct TokenBalance {
        address token;
        uint256 balance;
    }

    function getBalances(address holder, address[] memory tokens)
        public
        view
        returns (TokenBalance[] memory)
    {
        TokenBalance[] memory tokenBalances = new TokenBalance[](tokens.length);
        for (uint256 i = 0; i < tokens.length; i++) {
            address currentTokenAddress = tokens[i];
            IERC20 token = IERC20(currentTokenAddress);
            tokenBalances[i] = TokenBalance(
                currentTokenAddress,
                token.balanceOf(holder)
            );
        }
        return tokenBalances;
    }
}
