// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ForgedToken is ERC20 {
    constructor(
        address _initialTokenReceiver
    ) 
        ERC20("ForgedToken", "FT") 
    {
        _mint(_initialTokenReceiver, 1000000 * 10 ** decimals());
    }
}
