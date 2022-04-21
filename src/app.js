function displayTemperature (response) {
    let temperatureSelector= document.querySelector("#temperature");
    let citySelector =document.querySelector("#city");
    let descriptionSelector = document.querySelector("#description");
    let humiditySelector = document.querySelector("#humidity");
    let windSelector = document.querySelector("#wind")

    temperatureSelector.innerHTML= Math.round(response.data.main.temp);
    citySelector.innerHTML= response.data.name;
    descriptionSelector.innerHTML= response.data.weather[0].description;
    humiditySelector.innerHTML = response.data.main.humidity;
    windSelector.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "c0efafb3b4678b54c983a9d3289a0c0a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Ibadan&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
