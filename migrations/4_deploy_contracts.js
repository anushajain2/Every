var IERC20 = artifacts.require("./IERC20.sol");

module.exports = function(deployer) {
  deployer.deploy(IERC20);
};
