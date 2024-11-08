// Create the elements for the forecast
function createForecastElement(time, icon, city, temp, desc, wind) { // Create the elements for the forecast
    const forecastElement = document.createElement("div");
    forecastElement.classList.add("forecast");

    const timeElement = document.createElement("p");
    timeElement.innerText = `Time: ${time}`;
    forecastElement.appendChild(timeElement);

    const iconElement = document.createElement("img");
    iconElement.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    forecastElement.appendChild(iconElement);

    const cityElement = document.createElement("p");
    cityElement.innerText = `City: ${city}`;
    forecastElement.appendChild(cityElement);

    const tempElement = document.createElement("p");
    tempElement.innerText = `Temperature: ${temp}°C`;
    forecastElement.appendChild(tempElement);

    const descElement = document.createElement("p");
    descElement.innerText = `Description: ${desc}`;
    forecastElement.appendChild(descElement);

    const windElement = document.createElement("p");
    windElement.innerText = `Wind speed: ${wind} m/s`;
    forecastElement.appendChild(windElement);

    // Set background based on temperature
    if(temp > 20){
        forecastElement.style.background = "rgb(242,242,241)";
        forecastElement.style.background = "linear-gradient(0deg, rgba(242,242,241,1) 0%, rgba(236,110,76,1) 80%)";
    }
    else {
        forecastElement.style.background = "rgb(242,242,241)";
        forecastElement.style.background = "linear-gradient(0deg, rgba(72,72,74,1) 0%, rgba(242,242,241,1) 80%)";
    }

    return forecastElement;
}

// Display the forecast with the hours from the input
export function displayForecast(data, hoursForward) { 
    const content = document.getElementById("content");
    content.innerHTML = "";
    const forecastCount = Math.floor(hoursForward / 3)+1;

    for (let i = 0; i < forecastCount; i++) {
        const forecast = data.list[i];
        const forecastTime = new Date(forecast.dt * 1000).toLocaleString();
        const forecastElement = createForecastElement(
            forecastTime,
            forecast.weather[0].icon,
            data.city.name,
            forecast.main.temp,
            forecast.weather[0].description,
            forecast.wind.speed
        );
        content.appendChild(forecastElement);
    }

    content.style.display = "flex";
}

// Display the current weather
export function displayCurrentWeather(data) { 
    const content = document.getElementById("content");
    content.innerHTML = "";

    const currentTime = new Date().toLocaleString();
    const forecastElement = createForecastElement(
        currentTime,
        data.weather[0].icon,
        data.name,
        data.main.temp,
        data.weather[0].description,
        data.wind.speed
    );
    content.appendChild(forecastElement);

    content.style.display = "flex";
}