// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

 import "hardhat/console.sol";

contract UserInfo {
    struct User {
        string id; 
        string name; 
        string email; 
        string postalAddress; 
        string username; 
    }

    mapping(address => User) public users;

    event UserUpdated(address indexed userAddress, string id, string name, string email, string postalAddress, string username);

    // set/update it all here
    function setUser(
        string calldata id,
        string calldata name,
        string calldata email,
        string calldata postalAddress,
        string calldata username
    ) public {
        console.log("Here is the sender: ", msg.sender);
        users[msg.sender] = User(id, name, email, postalAddress, username);
        emit UserUpdated(msg.sender, id, name, email, postalAddress, username);
    }

    // get it by address
    function getUser(address userAddress) public view returns (User memory) {
        return users[userAddress];
    }
}
