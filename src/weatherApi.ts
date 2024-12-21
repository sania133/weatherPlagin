import axios from 'axios';

const API_KEY = 'b2fca70cf7c2fbc6a65249a1fb1ddc87';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function getWeather(city: string) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric',
                lang: 'ru',
            }
        });

        const data = response.data;
        return {
            temperature: data.main.temp,
            description: data.weather[0].description,
            city: data.name,
            country: data.sys.country,
        };
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}
