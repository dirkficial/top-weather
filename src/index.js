import fetchWeatherAPI from "./weatherAPI.js";
import processAPI from "./weatherData.js";


const location = document.getElementById("location");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", () => {
    fetchWeatherAPI(location.value);
})


