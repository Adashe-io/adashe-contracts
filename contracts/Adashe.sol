// SPDX-License-Identifier: MIT
/*
───────────────────────────────────────────────────────────────────────────────────────────
─██████████████─████████████───██████████████─██████████████─██████──██████─██████████████─
─██░░░░░░░░░░██─██░░░░░░░░████─██░░░░░░░░░░██─██░░░░░░░░░░██─██░░██──██░░██─██░░░░░░░░░░██─
─██░░██████░░██─██░░████░░░░██─██░░██████░░██─██░░██████████─██░░██──██░░██─██░░██████████─
─██░░██──██░░██─██░░██──██░░██─██░░██──██░░██─██░░██─────────██░░██──██░░██─██░░██─────────
─██░░██████░░██─██░░██──██░░██─██░░██████░░██─██░░██████████─██░░██████░░██─██░░██████████─
─██░░░░░░░░░░██─██░░██──██░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─
─██░░██████░░██─██░░██──██░░██─██░░██████░░██─██████████░░██─██░░██████░░██─██░░██████████─
─██░░██──██░░██─██░░██──██░░██─██░░██──██░░██─────────██░░██─██░░██──██░░██─██░░██─────────
─██░░██──██░░██─██░░████░░░░██─██░░██──██░░██─██████████░░██─██░░██──██░░██─██░░██████████─
─██░░██──██░░██─██░░░░░░░░████─██░░██──██░░██─██░░░░░░░░░░██─██░░██──██░░██─██░░░░░░░░░░██─
─██████──██████─████████████───██████──██████─██████████████─██████──██████─██████████████─
───────────────────────────────────────────────────────────────────────────────────────────
*/
import "./extensions/draft-ERC20Permit.sol";

pragma solidity ^0.8.0;

contract Adashe is ERC20Permit {
    uint256 private tSupply = 5000000000 * 10 ** decimals();

    constructor(address owner) ERC20("Adashe", "ADSE") ERC20Permit("Adashe") {
        _mint(msg.sender, tSupply);
        _transferOwnership(owner);
    }
}
