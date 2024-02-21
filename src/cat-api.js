function fetchBreeds() {
    const BASE_URL = 'https://api.thecatapi.com/v1/';
    const API_KEY = "live_TKjjXr2GgPbCnqpD5xaFXisnw5zvBRHkS1bKgpfdnfvBRLlDafYig6M1SjURvCli";
    fetch(`${BASE_URL}breeds?key=${API_KEY}`)
        .then(resp => console.log(resp))

}

function fetchCatByBreed(breedId) {

}

export { fetchBreeds, fetchCatByBreed }