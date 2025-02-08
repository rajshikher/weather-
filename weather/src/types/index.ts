export interface WeatherData {
    temperature: number;
    humidity: number;
    description: string;
    windSpeed: number;
}

export interface Forecast {
    date: string;
    temperature: number;
    description: string;
}