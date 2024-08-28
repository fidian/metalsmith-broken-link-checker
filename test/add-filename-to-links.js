const addFilenameToLinks = require("../src/add-filename-to-links");
const assert = require("assert");

const FILENAME = "dir/file.html";

describe("addFilenameToLinks", () => {
    const links = [{ foo: "bar" }, { bar: "baz" }];

    let results;
    before(() => {
        results = addFilenameToLinks(links, FILENAME);
    });

    it("should keep all properties of existing links", () => {
        assert.ok(results.length === 2);
        assert.ok(results[0].foo === "bar");
        assert.ok(results[1].bar === "baz");
    });

    it("should add on the filename property", () => {
        assert.ok(results[0].filename === FILENAME);
        assert.ok(results[1].filename === FILENAME);
    });
});
