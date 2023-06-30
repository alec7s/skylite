'use strict';

import { RenderWeather } from "./render-weather.js";

export function SearchEvent() {
    document.querySelector('form')
        .addEventListener('submit', function(e){
            e.preventDefault();
            RenderWeather();
    })
}