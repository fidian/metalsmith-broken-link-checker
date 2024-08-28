const getFileContents = require("../src/get-file-contents");
const assert = require("assert");

describe("getFileContents", () => {
    it("should return the stringified contents property", () => {
        const content = "my content";
        const file = { contents: Buffer.from(content) };
        assert.ok(getFileContents(file) === content);
    });

    it("should default to an empty string", () => {
        const file = {};
        assert.ok(getFileContents(file) === "");
    });
});
