pragma solidity ^0.4.17;

contract SimpleStorage {
  uint8 public count = 18;

  function set(uint8 x) public {
    count = x;
  }

  function increment() public view returns (uint8) {
    count = count + 1;
    return count;
  }


  function get() public view returns (uint8) {
    return count;
  }
}
