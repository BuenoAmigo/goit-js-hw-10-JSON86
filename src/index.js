import axios from "axios";

// import { fetchBreeds } from "./cat-api";
// import { fetchCatByBreed } from "./cat-api";

const selectBreed = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');

const API_KEY = "live_TKjjXr2GgPbCnqpD5xaFXisnw5zvBRHkS1bKgpfdnfvBRLlDafYig6M1SjURvCli";
axios.defaults.headers.common["x-api-key"] = API_KEY;



function fetchBreeds() {
    const BASE_URL = 'https://api.thecatapi.com/v1/';
    const API_KEY = "live_TKjjXr2GgPbCnqpD5xaFXisnw5zvBRHkS1bKgpfdnfvBRLlDafYig6M1SjURvCli";
    return fetch(`${BASE_URL}breeds?key=${API_KEY}`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json();
        });

}

// fetchBreeds().then(data => data.filter(function (item) {
//     selectBreed.innerHTML += `<option value="${item.name}" id="${item.id}">${item.name}</option>`

// }))
fetchBreeds().then(data => console.log(data.filter(function (item) {
    console.log(`Item Breed: ${item.name}, Item id: ${item.id}`)

})))

// fetchBreeds().then(data => data.map(({ name, id }) => selectBreed.innerHTML += `<option value="${name}" id="${id}">${name}</option>`))
// console.log(data)


// function fetchCatByBreed() {
//     selectBreed.addEventListener("click", onInfo);
// }

// function onInfo(evt) {
//     evt.preventDefault();
//     let currentId = 0;
//     const currentBreed = evt.currentTarget.dataset;
//     console.log(currentBreed)
// }

// fetchCatByBreed()