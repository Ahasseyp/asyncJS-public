function addTimeout(task, timeout) {
    return () =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                reject();
            }, timeout);

            task().then((data) => {
                resolve(data);
            });
        });
}

if (require.main === module) {
    const test6 = require("../test/test6");
    test6(require("./task0").sleep, addTimeout);
} else {
    module.exports = { addTimeout };
}
