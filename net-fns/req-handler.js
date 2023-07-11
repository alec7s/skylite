'use strict';

export const handler = async(event, context) => {
  try {
    const input = event.queryStringParameters.input;
    const key = process.env.OW_API;
    const apiResp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=${key}&units=imperial`, {
      mode: 'cors', 
      headers: {
        Accept: 'application/json'
      }
    });
    const apiRespJson = await apiResp.json();

    return {
      statusCode: apiResp.status,
      body: JSON.stringify(apiRespJson),
    }
  } catch(e) {
    return {
      statusCode: 422,
      body: e.toString(),
    }
  }
}