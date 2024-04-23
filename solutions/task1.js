function vanillaAll(promises) {
    return new Promise(() => {
        for (const promise of promises) {
            promise.then(() => {});
        }
    });
}

if (require.main === module) {
    const test1 = require("../test/test1");
    test1(require("./task0").sleep, vanillaAll);
} else {
    module.exports = { all: vanillaAll };
}
