'use strict';

export const WeatherAPI = (function(){

    async function _fetchWeatherJson(input) {
        try {
            const url = `/.netlify/functions/req-handler?input=${input}`;
            const netResp = await fetch(url);
            
            return netResp;
        }
        catch(error) {
            throw Error('failed to access OpenWeather API');
        }
    }

    function _extractAppData(json) {
        try {
            const queryData = {
                //values are property names from OpenWeather API
                loc: json.name,
                unxTimestamp: json.dt,
                timezone: json.timezone,
                currTemp: json.main.temp, 
                feelsLike: json.main.feels_like, 
                highTemp: json.main.temp_max, 
                lowTemp: json.main.temp_min,
                humidity: json.main.humidity,
                pressure: json.main.pressure,
                summary: json.weather[0].description,
                sunrise: json.sys.sunrise,
                sunset: json.sys.sunset,
                windSpeed: json.wind.speed,
                clouds: json.clouds.all,
                icon: json.weather[0].icon,
            };

            return queryData;
        } catch(error) {
            throw Error('Problem accessing OpenWeather API data');
        }
    }

    async function query(input) {
        let data = null;
        const resp = await _fetchWeatherJson(input);
        const status = resp.status;

        if(resp.ok) {
            const respJson = await resp.json();
            data = _extractAppData(respJson);
        }

        return { data, status }; 
    } 

    return { query } 
})();