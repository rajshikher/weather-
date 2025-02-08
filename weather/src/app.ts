import express from 'express';
import { WeatherData, Forecast } from './types';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Route to fetch current weather data
app.get('/weather', (req, res) => {
    // Logic to fetch weather data
    const weatherData: WeatherData = {
        temperature: 25,
        description: 'Sunny',
        humidity: 60,
    };
    res.json(weatherData);
});

// Route to fetch weather forecast
app.get('/forecast', (req, res) => {
    // Logic to fetch weather forecast
    const forecast: Forecast[] = [
        { day: 'Monday', temperature: 22, description: 'Partly cloudy' },
        { day: 'Tuesday', temperature: 24, description: 'Sunny' },
    ];
    res.json(forecast);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});