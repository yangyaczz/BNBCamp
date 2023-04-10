pragma solidity ^0.8.0;

contract UpgradeTest {
    uint public num;

    /// @custom:oz-upgrades-unsafe-allow state-variable-immutable
    uint immutable public immutableNum;
    uint constant public constantNum = 2;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor(uint _i) {
        immutableNum = _i;
    }
}
