import { fetchWeatherData, fetchCurrentWeatherData } from './weather.js';
import { displayForecast, displayCurrentWeather, displayErrorMessage } from './ui.js';



const searchForm = document.getElementById("searchForm");

searchForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const input = document.getElementById("textInput").value;
    const hoursForward = document.getElementById("hourInput").value;

    // Determine which API to call based on the hoursForward input
    if (hoursForward === "") {
        fetchCurrentWeatherData(input)
            .then(displayCurrentWeather)
            .catch(displayError);

    } else {
        const hours = parseInt(hoursForward, 10);
        fetchWeatherData(input)
            .then(data => displayForecast(data, hours))
            .catch(displayError);
    }
});

// Handle and display errors
function displayError(error) {
    console.log("There has been a problem with your fetch operation:", error);
    
    let errorMessage;
    if(error.response) {
        const statusCode = error.response.status;

        switch(statusCode) {
            case 404:
                errorMessage = "City not found. Please check the city name and try again.";
                break;
            case 500:
                errorMessage = "Server error. Please try again later.";
                break;
            default:
                errorMessage = "An unexpected error occurred. Please try again later.";
        }

    } else {
        errorMessage = "Failed to fetch weather data. Please try again later.";
    }

    displayErrorMessage(errorMessage);
}