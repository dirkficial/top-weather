let currentWeatherData = null; 
let isMetric = false;

const toCelsius = (f) => Math.round((f - 32) * (5 / 9));

export const renderWeather = (weatherData) => {
    currentWeatherData = weatherData;
    
    const container = document.getElementById("weather-container")
    container.innerHTML = "";
    
    const tempUnit = isMetric ? "°C" : "°F";

    const currentTemp = isMetric 
        ? toCelsius(weatherData.temp) 
        : weatherData.temp;
        
    const maxTemp = isMetric 
        ? toCelsius(weatherData.maxtemp) 
        : weatherData.maxtemp;

    const minTemp = isMetric 
        ? toCelsius(weatherData.mintemp) 
        : weatherData.mintemp;

    const feelsLike = isMetric
        ? toCelsius(weatherData.feelslike)
        : weatherData.feelslike;

    const cityName = document.createElement("h2");
    const feelslike = document.createElement('p');
    const condition = document.createElement('p');
    const date = document.createElement('p');

    const temp = document.createElement('p');
    const maxtemp = document.createElement('p');
    const mintemp = document.createElement('p');

    cityName.textContent = weatherData.location;
    container.appendChild(cityName);
    
    temp.textContent = `Current: ${currentTemp}${tempUnit}`;
    feelslike.textContent = `Feels Like: ${feelsLike}${tempUnit}`;
    condition.textContent = weatherData.condition;
    maxtemp.textContent = `Max Temp: ${maxTemp}${tempUnit}`
    mintemp.textContent = `Min Temp: ${minTemp}${tempUnit}`
    date.textContent = weatherData.date;

    container.append(temp, feelslike, condition, maxtemp, mintemp, date);
}

export const toggleTemperature = () => {
    const toggleBtn = document.getElementById("toggle-temperature");

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            isMetric = !isMetric;
            
            if (currentWeatherData) {
                renderWeather(currentWeatherData);
            }
        })
    }
}