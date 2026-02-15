class WeatherData {
    constructor(location, temp, feelslike, condition, maxtemp, mintemp, date) {
        this.location = location;
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
    const location = response.resolvedAddress;
    return new WeatherData(location, currentTemp, currentFeelsLike, currentCond, tempmax, tempmin, date);
}