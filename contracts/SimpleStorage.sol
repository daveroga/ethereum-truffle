// SPDX-License-Identifier: MIT
pragma solidity ^0.5.0;

contract SimpleStorage {
  uint256 public storedValue;
  address public owner;
  event StorageModified(uint modifiedStorageValue, address msgSender);

  constructor(uint _value) public {
    storedValue = _value;
    owner = msg.sender;
  }

  modifier isOwner () {
    require(msg.sender == owner, "error, sender is not owner");
    _;
  }

  function setStoredValue(uint256 _value) public isOwner {
    storedValue = _value;
    emit StorageModified(_value, msg.sender);
  }

}
