'use strict';
import { WeatherAPI } from "../../data/weather-api.js";
import { WeatherWidget } from "../views/weather-widget.js";
import { ScrollFadeInAnimation } from "./scroll-fade.js";
import { DisplayError } from "./display-error.js";

export async function RenderWeather() {
    
    const weatherCntr = document.getElementById('weather-cntr');
    const searchBar = document.getElementById('search-bar');
    const searchValue = searchBar.value;
    const apiResponse = await WeatherAPI.query(searchValue);

    if(apiResponse.data) {
        const weather = new WeatherWidget(apiResponse.data);
        await ScrollFadeInAnimation(weatherCntr, weather.content);
    } else {
        DisplayError(apiResponse.status, searchValue);
    }
}