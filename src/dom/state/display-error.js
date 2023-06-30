'use strict';
import { Dialog } from "../components/dialog.js";

export function DisplayError(apiResponseStatus, searchValue) {
    let errorText = '';
    switch(apiResponseStatus) {

        case 404:
            errorText = `No data found for '${searchValue}'.`;
            break;

        case 401:
            errorText = 'Error connecting to the OpenWeather API. Please try again later.';
            break;
            
        default:
            errorText = `Could not load weather for '${searchValue}'.`;
            break;
    }

    Dialog(errorText);
}