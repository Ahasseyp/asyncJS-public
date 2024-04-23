const HOST = "https://pokeapi.co/api/v2";

async function sleep(time:number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

function fetchResources(amount:number) {
    let resources:Array<Function> = []
    for (let index = 1; index <= amount; index++) {
        resources.push(() => {
            return new Promise(async (resolve) => {
                //await sleep(Math.random()*5000)
                let data = {"page": index, "data": {"name": `My Name ${index}`}}
                resolve(data)
        })})
    }
    return resources
}

const resources = fetchResources(20)

console.log(resources)

const parallelFetchLimit = 3

let currentFetchAmount = 0

function keepFetchingFunction(resources:Array<Function>) {
    if (resources.length > 0) {
        let resource = resources.pop()
        if (resource) {
            resource().then((data:object) => {
                console.log(data)
                keepFetchingFunction(resources)
            })
        }
    } else {
        return
    }
}

function myFetchingFunction(resources:Array<Function>, parallelFetchLimit:number) {
    let startingResources = resources.splice(0, parallelFetchLimit);
    for (const resource of startingResources) {
        resource().then((data:object) => {
            console.log(data)
            keepFetchingFunction(resources)
        })
    }
}

myFetchingFunction(resources, parallelFetchLimit)
