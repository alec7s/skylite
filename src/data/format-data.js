'use strict';
import { format } from "date-fns";

export default class FormatData {

    static capitalizeFirstChar = function (alphaStr) {
        return alphaStr.charAt(0).toUpperCase() + alphaStr.slice(1);
    }
    static getDateTime = function(unxVal, tzOffset) {
        const apiDateObj = new Date(unxVal * 1000);
        const apiDateOffset = apiDateObj.getTimezoneOffset() * 60000;
        const apiTime = apiDateObj.getTime();
        const utcUnixDate = apiTime + apiDateOffset;
        const targetUnixDate = utcUnixDate + (1000 * tzOffset);
        const targetDateObj = new Date(targetUnixDate);
        const dateTime = /*#__PURE__*/ format(targetDateObj, 'PPp');
        const timeOnly = /*#__PURE__*/ format(targetDateObj, 'p');

        return { dateTime, timeOnly }
    }

    static hpaToIn = function(hPa) {
        return (hPa * 0.03).toFixed(2);
    }
}