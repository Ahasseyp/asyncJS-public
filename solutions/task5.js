function addRetries(task, numberOfRetries) {
    let currentAttempt = 1

    function attemptTask(task, currentAttempt) {
        if (currentAttempt > numberOfRetries) {
            return
        } else {
            task()
                .then((result) => {
                    console.log(result)
                })
                .catch(() => {
                    attemptTask(task, currentAttempt++)
                })
        }
    }

    attemptTask(task, currentAttempt)
}

if (require.main === module) {
    const test5 = require("../test/test5");
    test5(addRetries);
} else {
    module.exports = { addRetries };
}
