const shouldCheckLink = require("../src/should-check-link");
const assert = require("assert");

describe("shouldCheckLink", () => {
    describe("for a regular link", () => {
        it("should return true when checkLinks is true", () => {
            const link = { type: "link" };
            const options = { checkLinks: true };
            assert.ok(shouldCheckLink(options)(link));
        });

        it("should return false when checkLinks is false", () => {
            const link = { type: "link" };
            const options = { checkLinks: false };
            assert.ok(!shouldCheckLink(options)(link));
        });
    });

    describe("for an anchor", () => {
        it("should return true when allowAnchors is false", () => {
            const link = { type: "anchor" };
            const options = { allowAnchors: false };
            assert.ok(shouldCheckLink(options)(link));
        });

        it("should return false when allowAnchors is true", () => {
            const link = { type: "anchor" };
            const options = { allowAnchors: true };
            assert.ok(!shouldCheckLink(options)(link));
        });
    });

    describe("for an image link", () => {
        it("should return true when checkImages is true", () => {
            const link = { type: "image" };
            const options = { checkImages: true };
            assert.ok(shouldCheckLink(options)(link));
        });

        it("should return false when checkImages is false", () => {
            const link = { type: "image" };
            const options = { checkImages: false };
            assert.ok(!shouldCheckLink(options)(link));
        });
    });

    describe("for an unknown type of link", () => {
        it("should always return false", () => {
            const link = { type: "blah" };
            const options = {};
            assert.ok(!shouldCheckLink(options)(link));
        });
    });
});
