function first(promises) {
    return new Promise((resolve, reject) => {
        let totalErrors = 0
        promises.forEach(promise => {
            promise
                .then(() => {
                    resolve()
                })
                .catch(() => {
                    totalErrors++
                    if (totalErrors === promises.length) {
                        reject()
                    }
                })
        });
    })
}

if (require.main === module) {
    const test7 = require("../test/test7");
    test7(require("./task0").sleep, first);
} else {
    module.exports = { first };
}
