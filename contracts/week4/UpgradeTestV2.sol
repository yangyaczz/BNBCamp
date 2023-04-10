pragma solidity ^0.8.0;

contract UpgradeTestV2 {
    uint public num;
    /// @custom:oz-upgrades-unsafe-allow state-variable-immutable
    uint immutable public immutableNum;
    uint constant public constantNum = 3;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor(uint _i) {
        immutableNum = _i;
    }

    function setNum(uint _n) external {
        num = _n;
    }
}
