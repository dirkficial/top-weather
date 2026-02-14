class WeatherData {
    constructor(temp, feelslike, condition, maxtemp, mintemp, date) {
        this.temp = temp;
        this.feelslike = feelslike;
        this.condition = condition;
        this.maxtemp = maxtemp;
        this.mintemp = mintemp;
        this.date = date;
    }
}

export default function processAPI(response) {
    const currentTemp = response.currentConditions.temp;
    const currentFeelsLike = response.currentConditions.feelslike;
    const currentCond = response.currentConditions.conditions;

    const date = response.days[0].datetime;
    const tempmax = response.days[0].tempmax;
    const tempmin = response.days[0].tempmin;

    return new WeatherData(currentTemp, currentFeelsLike, currentCond, tempmax, tempmin, date);
}