// We create a helper: test/assertReverts.js
const should = require("chai").should();

async function assertRevert(trp_promise) {
  try {
    await trp_promise;
  } catch (error) {
    // the second argument of the include method is the message if "revert" is not found (e.g. another error like out of gas)
    error.message.should.include(
      "revert",
      `Expected "revert", got ${error} instead`
    );
    return;
  }
  should.fail("Expected revert but was not received");
}

async function assertNoRevert(trp_promise) {
  try {
    await trp_promise;
    return;
  } catch (error) {
    error.message.should.include(
      "revert",
      `Expected "revert", got ${error} instead`
    );
    should.fail("Happened a revert but was not expected");
  }
}
module.exports = { assertRevert, assertNoRevert };
