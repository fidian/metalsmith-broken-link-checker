const pickHtmlFiles = require("../src/pick-html-files");
const assert = require("assert");

const htmlPath = "dir/file.html";
const notHtmlPath = "dir/file.nothtml";
const notHtmlPath2 = "html.svg";

describe("pickHtmlFiles", () => {
    let result;

    before(() => {
        result = pickHtmlFiles({
            [htmlPath]: "contents",
            [notHtmlPath]: "foo",
            [notHtmlPath2]: "bar"
        });
    });

    it("should keep html files", () => {
        assert.ok(result[htmlPath] === 'contents');
    });

    it("should omit non-html files", () => {
        assert.ok(!result[notHtmlPath]);
        assert.ok(!result[notHtmlPath2]);
    });
});
