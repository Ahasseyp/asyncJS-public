function first(promises) {
    return new Promise((resolve, reject) => {
        let errorsCount = 0;

        for (const promise of promises) {
            promise.then(resolve).catch(() => {
                errorsCount++;
                if (errorsCount === promises.length) {
                    reject();
                }
            });
        }
    });
}

if (require.main === module) {
    const test7 = require("../test/test7");
    test7(require("./task0").sleep, first);
} else {
    module.exports = { first };
}
