pragma solidity >=0.4.0 <0.6.0;

contract SimpleStorageWithTime {
    uint256 public storedValue;
    uint256 public creation_time;

    constructor(uint256 _value) public {
        storedValue = _value;
        creation_time = block.timestamp;
    }

    function setStoredValue(uint256 _value) public {
        require(now > creation_time + 30 days);
        storedValue = _value;
    }
}

contract MockSimpleStorageWithTime is SimpleStorageWithTime {
    constructor(uint256 _value) public SimpleStorageWithTime(_value) {}

    function goForward(uint256 secs) external {
        creation_time -= secs;
    }

    function goBackwards(uint256 secs) external {
        creation_time += secs;
    }
}
