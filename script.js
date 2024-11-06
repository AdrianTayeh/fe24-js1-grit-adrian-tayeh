fetch("https://api.openweathermap.org/data/2.5/weather?lat=55.7047&lon=13.1910&appid=d7ef0286d9447c8dc45d820d50e97fbd&units=metric")
.then(function(response)
{
    return response.json();
})
.then(function(data)
{
    console.log(data);
});