const SimpleStorage = artifacts.require("SimpleStorage");

module.exports = function(deployer, network, accounts) {
  // Use deployer to state migration tasks.
  deployer.deploy(SimpleStorage, "12345");
};
