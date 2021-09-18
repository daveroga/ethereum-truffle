const SimpleStorage = artifacts.require("SimpleStorage");

module.exports = function(deployer, network, accounts) {
  // Use deployer to state migration tasks.
  deployer.deploy(SimpleStorage, "123456");
  const simpleStorage = SimpleStorage.deployed();
  console.log('**ADDRESS**', SimpleStorage.address);
};
