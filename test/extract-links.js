const extractLinks = require("../src/extract-links");
const assert = require("assert");

describe("extractLinks", () => {
    let links;

    before(() => {
        links = extractLinks(`
      <a href="/my-href/">Link text</a>
      <a name="link-to-me">Anchor text</a>
      <img src="/my-src/" alt="Alt text">
    `);
    });

    it("should extract three links from the given html", () => {
        assert.ok(links.length === 3);
    });

    describe("'a' tags (not anchors)", () => {
        it("should extract the target", () => {
            assert.ok(links[0].target === "/my-href/");
        });

        it("should extract the type", () => {
            assert.ok(links[0].type === "link");
        });

        it("should extract a description", () => {
            assert.ok(links[0].description.includes("/my-href/"));
            assert.ok(links[0].description.includes("Link text"));
        });
    });

    describe("anchor tags ('a' with a name/id attribute)", () => {
        it("should not extract a target", () => {
            assert.ok(!links[1].target);
        });

        it("should extract the type", () => {
            assert.ok(links[1].type === "anchor");
        });

        it("should extract a description", () => {
            assert.ok(links[1].description.includes("link-to-me"));
            assert.ok(links[1].description.includes("Anchor text"));
        });
    });

    describe("'img' tags", () => {
        it("should extract the target", () => {
            assert.ok(links[2].target === "/my-src/");
        });

        it("should extract the type", () => {
            assert.ok(links[2].type === "image");
        });

        it("should extract a description", () => {
            assert.ok(links[2].description.includes("/my-src/"));
            assert.ok(links[2].description.includes("Alt text"));
        });
    });
});
