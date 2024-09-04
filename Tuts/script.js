const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const apiKey = "0f932a5f4afde5e76c3b0b1133e55bbf";
const locat = document.getElementById("location");
const searchicon = document.getElementById("searchicon");
const humidity = document.querySelector(".humidity");

async function weatherUpdate(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let weatherData = await response.json();
    console.log(weatherData);
    document.querySelector(".degrees").textContent = weatherData.wind?.deg + "°C";
    document.querySelector(".city").textContent = weatherData.name;
    document.querySelector(".humidity").textContent = "Humidity: " + weatherData.main.humidity;
}

searchicon.addEventListener("click", function() {
    weatherUpdate(locat.value);
    locat.style.width = "200px";
    locat.style.opacity = "1";
    locat.style.left = "100px"; 
    searchicon.style.left = "40px";
})


