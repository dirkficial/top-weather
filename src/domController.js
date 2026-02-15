export default function renderWeather(weatherData) {
    const container = document.getElementById("weather-container")
    
    const cityName = document.createElement("h2");
    const temp = document.createElement('p');
    const feelslike = document.createElement('p');
    const condition = document.createElement('p');
    const maxtemp = document.createElement('p');
    const mintemp = document.createElement('p');
    const date = document.createElement('p');

    cityName.textContent = weatherData.location;
    container.appendChild(cityName);
    
    temp.textContent = weatherData.temp;
    feelslike.textContent = weatherData.feelslike;
    condition.textContent = weatherData.condition;
    maxtemp.textContent = weatherData.maxtemp;
    mintemp.textContent = weatherData.mintemp;
    date.textContent = weatherData.date;

    container.append(temp, feelslike, condition, maxtemp, mintemp, date);
}