'use strict';

//import '../../auth/key';

export const WeatherAPI = (function(){

    async function _fetchForecastData(input) {
        //console.log(OW_KEY)
        const key = '/.netlify/ext-api/key';
        try {
            //const netlifyResponse = '/.netlify/ext-api/key'; 
            //const key = '/.netlify/ext-api/key';

            console.log(key.body);
            //return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=${key}&units=imperial`, {mode: 'cors'});

            return alert(key.body.value)
        }
        catch(error) {
            throw Error('failed to access OpenWeather API');
        }
    }

    function _extractAppData(json) {
        try {
            const appData = {
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

            return appData;
        }
        catch(error) {

            throw Error('Problem accessing OpenWeather API data');
        }
    }

    async function query(input) {
        let data = null;
        const response = await _fetchForecastData(input);
        const status = response.status;

        if(response.ok) {
            const json = await response.json(); 
            data = _extractAppData(json);
        }

        return { data, status };
    } 

    return { query } 
})();