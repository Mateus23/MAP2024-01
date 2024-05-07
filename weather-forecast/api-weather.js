import axios from "axios";

const baseUrl = 'https://api.open-meteo.com/v1/forecast'

// https://api.open-meteo.com/v1/forecast?latitude=-23.5475&longitude=-46.6361&hourly=temperature_2m,precipitation_probability

const defaultLocation = {
    lat: '-23.5475',
    long: '-46.6361'
};

const defaultPredictions = ['temperature_2m', 'precipitation_probability'];

const defaultDays = 3;

const buildUrl = (location, predictions, forecastDays) => {
    return `${baseUrl}?latitude=${location.lat}&longitude=${location.long}` +
     `&hourly=${predictions.toString()}&forecast_days=${forecastDays}`
}

export const getForecast = () => {
    const weatherUrl = buildUrl(defaultLocation, defaultPredictions, defaultDays)
    return axios.get(weatherUrl);
}