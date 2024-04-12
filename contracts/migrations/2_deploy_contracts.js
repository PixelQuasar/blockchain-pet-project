const mainContract = artifacts.require("../contracts/main.sol");

module.exports = function (deployer) {
  deployer.deploy(mainContract);
};
