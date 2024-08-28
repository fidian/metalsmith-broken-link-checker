const handleLinks = require("../src/handle-links");
const assert = require("assert");

describe("handleLinks", () => {
    describe("when the warn option is set", () => {
        const links = [
            { broken: true, description: "brokenLink1" },
            { broken: false, description: "workingLink2" },
            { broken: true, description: "brokenLink3" }
        ];

        let logResults = "";
        before(() => {
            function log(...args) {
                logResults += args.join();
            }
            handleLinks({ warn: true }, log)(links);
        });

        it("should log the description of every broken link", () => {
            assert.ok(logResults.includes("brokenLink1"));
            assert.ok(logResults.includes("brokenLink3"));
        });

        it("should not log the descriptions of any non broken links", () => {
            assert.ok(!logResults.includes("workingLink2"));
        });
    });

    describe("when the warn option is not set", () => {
        describe("when there are no broken links", () => {
            const links = [{ broken: false }];

            function check() {
                handleLinks({ warn: false })(links);
            }

            try {
                check();
            } catch (e) {
                assert.fail("should not throw an error");
            }
        });

        describe("when there are broken links", () => {
            const links = [{ broken: true, description: "brokenLink1" }];

            function check() {
                handleLinks({ warn: false })(links);
            }

            try {
                check();
                assert.fail("should throw an error");
            } catch (e) {
                assert.ok(e.message.includes("brokenLink1"));
            }
        });
    });
});
