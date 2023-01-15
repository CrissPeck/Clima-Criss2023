import React from 'react';
import Weather from './Weather';


export default{
    tittle: "Weather",
    component: Weather
}

export const WeatherExample = () => <Weather temperature={10} />
