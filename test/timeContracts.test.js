const {time, expectRevert} = require("@openzeppelin/test-helpers");

const MockTimeContract = artifacts.require("MockSimpleStorageWithTime");
const TimeContract = artifacts.require("SimpleStorageWithTime");

const BN = web3.utils.BN; //exists a global instance of web3 in truffle
const chai = require('chai')
const should = chai.should();
const bnChai = require('bn-chai');
chai.use(bnChai(BN));  // we inform that we will use Chai

contract("Test a simple storage with time", function (accounts) {
  describe("time tests", function() {
    it ("(mock) checks that we can modify after 30 days", async function () {
      const newInstance = await MockTimeContract.new("12345", {from: accounts[0]});
      const deployed = newInstance.contract; //web3 instance
      await deployed.methods.goForward(60*60*24*30+1).send({from: accounts[0]});
      await deployed.methods.setStoredValue("321").send({from: accounts[0]});
    })

    it ("(final) checks that we can modify after 30 days", async function () {
      const newInstance = await TimeContract.new("12345", {from: accounts[0]});
      const deployed = newInstance.contract; //web3 instance
      await time.increase(60*60*24*30-1);
      await expectRevert.unspecified(deployed.methods.setStoredValue("321").send({from: accounts[0]}));
    })
  })
});