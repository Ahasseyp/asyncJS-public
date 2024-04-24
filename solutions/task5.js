function addRetries(task, numberOfRetries) {
    return () =>
        new Promise((resolve, reject) => {
            let retryCount = 0;

            const retry = () => {
                if (retryCount < numberOfRetries) {
                    task()
                        .then((data) => {
                            resolve(data);
                        })
                        .catch(() => {
                            retryCount++;
                            retry();
                        });
                } else {
                    reject();
                }
            };
        });
}

if (require.main === module) {
    const test5 = require("../test/test5");
    test5(addRetries);
} else {
    module.exports = { addRetries };
}
