import processAPI from "./weatherData.js";
import {renderWeather} from "./domController.js";

export default async function fetchWeatherAPI(location) {
    const weather = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=TX5Y36RXKQ5C9QQ248Y94DDS5`)
    const weatherData = await weather.json();

    const cleanWeatherData = processAPI(weatherData);

    console.log(cleanWeatherData);

    renderWeather(cleanWeatherData);    
}


