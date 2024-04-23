const HOST = "https://pokeapi.co/api/v2";

async function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

async function sequentialFetch(url) {
    await sleep(3000)
    return fetch(url)
        .then((response) => {
            return response.json()
        })}

let urls = [
    `${HOST}/type/1`,
    `${HOST}/type/2`,
    `${HOST}/type/3`,
]

for (const url of urls) {
    let response = await sequentialFetch(url)
    console.log(response.id)
}
