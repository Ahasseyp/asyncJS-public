function asyncInParallel(work, threads) {
    return new Promise((resolve) => {
        let nextWork = (work) => {
            if (work.length > 0) {
                let currentWork = work.shift();
                if (currentWork) {
                    currentWork().then((data) => {
                        console.log(data);
                        nextWork(work);
                    });
                } else {
                    resolve(currentWork());
                }
            }
        };

        let initialWork = work.splice(0, threads);

        for (const currentWork of initialWork) {
            currentWork().then((data) => {
                console.log(data);
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
