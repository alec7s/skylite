'use strict';
import FormatData from '../../data/format-data.js';

export class WeatherWidget {

    constructor(dataObj) {
        this._timestamp = FormatData.getDateTime(dataObj.unxTimestamp, dataObj.timezone).dateTime;
        this._summary = FormatData.capitalizeFirstChar(dataObj.summary);
        this._sunrise = FormatData.getDateTime(dataObj.sunrise, dataObj.timezone).timeOnly;
        this._sunset = FormatData.getDateTime(dataObj.sunset, dataObj.timezone).timeOnly;
        this._pressure = FormatData.hpaToIn(dataObj.pressure);

        this._loc = dataObj.loc;
        this._currTemp = Math.round(dataObj.currTemp);
        this._highTemp = Math.round(dataObj.highTemp);
        this._lowTemp = Math.round(dataObj.lowTemp);
        this._feelsLike = Math.round(dataObj.feelsLike);
        this._windSpeed = Math.round(dataObj.windSpeed);

        this._humidity = dataObj.humidity;
        this._clouds = dataObj.clouds;
        this._currWeatherIcon = `https://openweathermap.org/img/wn/${dataObj.icon}.png`;

        this._content = `
            <section class="flex-jst-btwn outer-pad"> 
                <h2 class="flex-algn-ctr">${this._loc}</h2>
                <div class="flex-bx weather-icon-cntr"><img alt='Icon signifying ${this._summary}' src=${this._currWeatherIcon} /></div>
            </section>
            <section class="flex-col weather-dtls">
                <h3 id="date-time" class="outer-pad">${this._timestamp}</h3>
                <div id="dtls-temp">
                    
                    <div id="curr-temp" class="flex-ctr-all">${this._currTemp}<span class="iconify" role="figure" title="Degrees Fahrenheit" data-icon=${this._dataIcons.tempUnit}></span></div>
                    <div id="high" class="flex-ctr-all"><span class="iconify" role="figure" title="Up caret for high temperature" data-icon=${this._dataIcons.high}></span>${this._highTemp}</div>
                    <div id="low" class="flex-ctr-all"><span class="iconify" role="figure" title="Down caret for low temperature" data-icon=${this._dataIcons.low}></span>${this._lowTemp}</div>

                    <div id="summary">Feels like ${this._feelsLike}. ${this._summary}.</div>
                </div>
                <div class="flex-jst-even dtls-tbl">    
                
                    <div class="dtls-col">
                        <div id="sunrise" class="flex-ctr-all"><span class="iconify" data-icon=${this._dataIcons.sunrise}></span></div>
                        <div>${this._sunrise}</div> 
                        <div class="flex-ctr-all"><span class="iconify" data-icon=${this._dataIcons.wind}></span></div>
                        <div>${this._windSpeed} mph</div>
                        <div id="humidity" class="flex-ctr-all"><span class="iconify" data-icon=${this._dataIcons.humidity}></span></div>
                        <div>${this._humidity}%</div>
                    </div>

                    <div class="dtls-col">
                        <div id="sunset" class="flex-ctr-all"><span class="iconify" data-icon=${this._dataIcons.sunset}></span></div>
                        <div>${this._sunset}</div>
                        <div id="clouds" class="flex-ctr-all"><span class="iconify" data-icon=${this._dataIcons.clouds}></span></div>
                        <div>${this._clouds}%</div>
                        <div id="pressure" class="flex-ctr-all"><span class="iconify" data-icon=${this._dataIcons.pressure}></span></div>
                        <div>${this._pressure} in</div>
                    </div>       
                                
                </section>
        `;
    }

    _dataIcons = {
        //props are iconify names to be used in data-icon attr. in spans
        tempUnit: 'streamline:interface-weather-fahrenheit-degrees-temperature-fahrenheit-degree-weather',
        high: 'mdi:caret-up',
        low: 'mdi:caret-down',
        wind: 'ph:wind',
        clouds: 'bi:clouds-fill',
        humidity: 'material-symbols:humidity-mid',
        pressure: 'fluent:gauge-20-filled',
        sunrise: 'mdi:circle-half',
        sunset: 'mdi:circle-half',
    };

    get content() {
        return this._content;
    }
}