function sleep(timeout) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, timeout);
    });
}

if (require.main === module) {
    const test0 = require("../test/test0");
    test0(sleep);
} else {
    module.exports = { sleep };
}
