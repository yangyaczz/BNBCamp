//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BCT is ERC20 {
    constructor() ERC20 ("BNBCampToken", "BCT") {
    }

    function mint(uint _n) public {
        _mint(msg.sender,_n);
    }
}