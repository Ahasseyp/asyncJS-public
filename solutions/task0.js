function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

const time = 10000;

sleep(time).then(() => {
    console.log(`This is executd after ${time/1000} second`)
})
