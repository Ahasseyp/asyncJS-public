const HOST = "https://pokeapi.co/api/v2";

const resource1 = fetch(`${HOST}/type/1`);
const resource2 = fetch(`${HOST}/type/2`);
const resource3 = fetch(`${HOST}/type/3`);

const resources = [resource1, resource2, resource3]

function asyncFetch(resourcesArray) {
    resourcesArray.forEach(resource => {
        resource
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                console.log(response)
            })
    });
}

asyncFetch(resources)


let toJson = resource => resource.then(response => response.json())


const jsonResponsePromiseArray = resources.map(toJson)


Promise.all(jsonResponsePromiseArray)
    .then((responses) => {
        responses.forEach(console.log);
    })
