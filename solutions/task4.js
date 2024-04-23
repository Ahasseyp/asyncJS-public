function asyncInParallel(work, threads) {
    return new Promise((resolve) => {
        let initalLength = work.length;
        let finalData = [];

        let nextWork = (work) => {
            if (work.length > 0) {
                let currentWork = work.shift();
                if (currentWork) {
                    currentWork().then((data) => {
                        finalData.push(data);
                        nextWork(work);
                    });
                }
            } else {
                if (initalLength === finalData.length) {
                    resolve(finalData);
                }
            }
        };

        let initialWork = work.splice(0, threads);

        for (const currentWork of initialWork) {
            currentWork().then((data) => {
                finalData.push(data);
                if (work.length > 0) {
                    nextWork(work);
                }
            });
        }
    });
}

if (require.main === module) {
    const test4 = require("../test/test4");
    test4(require("./task0").sleep, asyncInParallel);
} else {
    module.exports = { asyncInParallel };
}
