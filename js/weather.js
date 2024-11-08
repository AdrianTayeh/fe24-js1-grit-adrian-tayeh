// Fetch forecast data for a city
export async function fetchWeatherData(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=d7ef0286d9447c8dc45d820d50e97fbd&units=metric`);
    
    // Handle different response status
    if (response.status === 404) { // Invalid city
        alert("City not found");
        throw new Error('City not found');
    }
    else if(response.status >= 500 && response.status < 600){ // Server error
        alert("Server error");
        throw new Error('Server error');
    }
    return response.json();
}

// Fetch current weather data for a city
export async function fetchCurrentWeatherData(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d7ef0286d9447c8dc45d820d50e97fbd&units=metric`);
    
    // Handle different response status
    if (response.status === 404) { // Invalid city
        alert("City not found");
        throw new Error('City not found');
    }
    else if(response.status >= 500 && response.status < 600){ // Server error
        alert("Server error");
        throw new Error('Server error');
    }
    return response.json();
}