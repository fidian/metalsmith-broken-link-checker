const extractAnchorTargets = require("../src/extract-anchor-targets");
const assert = require("assert");

describe("extractAnchorTargets", () => {
    let targets;

    before(() => {
        targets = extractAnchorTargets(`
      <a name="target1"></a>
      <div id="target2"></div>
    `);
    });

    it("should extract a 'name' attribute", () => {
        assert.ok(targets[0] === 'target1');
    });

    it("should extract an 'id' attribute", () => {
        assert.ok(targets[1] === 'target2');
    });
});
