// Fetch forecast data for a city
export async function fetchWeatherData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=d7ef0286d9447c8dc45d820d50e97fbd&units=metric`);
        
        // Check if the response is not OK and throw an error with the response
        if (!response.ok) {
            const error = new Error('Error fetching forecast data');
            error.response = response;
            throw error;
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error fetching forecast data:', error);
        throw error; // Re-throw the error to be caught by the caller
    }
}

// Fetch current weather data for a city
export async function fetchCurrentWeatherData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d7ef0286d9447c8dc45d820d50e97fbd&units=metric`);
        
        // Check if the response is not OK and throw an error with the response
        if (!response.ok) {
            const error = new Error('Error fetching current weather data');
            error.response = response;
            throw error;
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error fetching current weather data:', error);
        throw error; // Re-throw the error to be caught by the caller
    }
}
