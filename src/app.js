function formatDate(timestamp){
    let date =new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();

    if (minutes < 10) {
        minutes = `0${minutes}`;
        }
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
}


function displayTemperature (response) {
    let temperatureSelector= document.querySelector("#temperature");
    let citySelector =document.querySelector("#city");
    let descriptionSelector = document.querySelector("#description");
    let humiditySelector = document.querySelector("#humidity");
    let windSelector = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");
    let iconElement = document.querySelector("#icon");

    temperatureSelector.innerHTML= Math.round(response.data.main.temp);
    citySelector.innerHTML= response.data.name;
    descriptionSelector.innerHTML= response.data.weather[0].description;
    humiditySelector.innerHTML = response.data.main.humidity;
    windSelector.innerHTML = Math.round(response.data.wind.speed);
    dateElement.innerHTML = formatDate(response.data.dt * 1000);
    iconElement.setAttribute("src", "http://openweathermap.org/img/w/" +
        response.data.weather[0].icon + ".png"
    );
    iconElement.setAttribute("alt", response.data.weather[0].description);
}

function search(city) {
let apiKey = "c0efafb3b4678b54c983a9d3289a0c0a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
}

function submit(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#search-city");
    search(cityInput.value);
}
search("Ibadan")

 let form = document.querySelector("#search-form");
 form.addEventListener("submit", submit)
