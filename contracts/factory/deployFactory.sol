// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

contract DeployFactory {
    event Deploy(address tokenContractAddress);

    function deploy(bytes memory bytecode, uint _salt) external {
        address tokenContractAddress;
        assembly {
            tokenContractAddress := create2(
                0,
                add(bytecode, 0x20),
                mload(bytecode),
                _salt
            )
            if iszero(extcodesize(tokenContractAddress)) {
                revert(0, 0)
            }
        }

        emit Deploy(tokenContractAddress);
    }
}
