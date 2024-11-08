import { fetchWeatherData, fetchCurrentWeatherData } from './weather.js';
import { displayForecast, displayCurrentWeather } from './ui.js';

// Get the search form element
const searchForm = document.getElementById("searchForm");

// Add an event listener for form submission
searchForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    // Get the input values
    const input = document.getElementById("textInput").value;
    const hoursForward = document.getElementById("hourInput").value;

    if (hoursForward === "") {
        // Fetch current weather data if hourInput is empty
        const data = await fetchCurrentWeatherData(input);
        displayCurrentWeather(data);
    } else {
        // Fetch forecast data if hourInput is not empty
        const hours = parseInt(hoursForward, 10);
        const data = await fetchWeatherData(input);
        displayForecast(data, hours);
    }
});