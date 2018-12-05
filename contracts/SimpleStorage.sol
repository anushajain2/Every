pragma solidity ^0.4.17;

contract SimpleStorage {
  uint count;

  function set(uint x) public {
    count = x;
  }

  function increment() public view returns (uint) {
    count = count + 1;
    return count
  }


  function get() public view returns (uint) {
    return count;
  }
}
