import fetchWeatherAPI from "./weatherAPI.js";
import processAPI from "./weatherData.js";
import { toggleTemperature } from "./domController.js";

const location = document.getElementById("location");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", () => {
    fetchWeatherAPI(location.value);
})


toggleTemperature();