import { simulateLoading } from "./utils";

 async function  sanitizeFetch(url: string) {
    return fetch(url).then(result => result.json());
}

export async function fetchAlbum() {
    simulateLoading(1)
    return sanitizeFetch('https://jsonplaceholder.typicode.com/albums');
}


export async function fetchPhoto() {
    simulateLoading(3)
    return sanitizeFetch('https://jsonplaceholder.typicode.com/photos');
}

export async function fetchUser() {
    simulateLoading(1)
    return sanitizeFetch('https://jsonplaceholder.typicode.com/users');
}