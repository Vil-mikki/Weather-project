const axios = require('axios');

const baseUrl = 'https://api.openweathermap.org';
const APIKey = '93aa52c57869ba3bd03746c55f6a1e9f';

export function getWeather(city) {
  return axios.get(`${baseUrl}/data/2.5/weather?q=${city}&APPID=${APIKey}`);
}
