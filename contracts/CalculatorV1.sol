// SPDX-License-Identifier: MIT
pragma solidity >=0.8.17;

import "hardhat/console.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract CalculatorV1 is Initializable {
    uint public value;

    function initialize(uint256 _val) external initializer {
        value = _val;
    }

    function addition(uint num1, uint num2) public pure returns (uint) {
        return num1 + num2;
    }

    function getVal() public view returns (uint) {
        return value;
    }
}
