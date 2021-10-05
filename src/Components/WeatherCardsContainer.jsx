import React from 'react'
import { useSelector } from 'react-redux';

import LoadingSpinner from '../Components/LoadingSpinner'
import WeatherCard from './WeatherCard'

export default function WeatherContainer() {
   const { isFetching, isError, weather } = useSelector(state => ({
      isFetching: state.weather.isFetching,
      isError: state.weather.isError,
      weather: state.weather.data
   }));

   if (isFetching) {
      return <LoadingSpinner />
   }
   if (weather) {
      return <WeatherCard />
   }
   if (isError) {
      alert('Something went wrong! Probobly wrong city name or access to your position is denied!')
   }
   return <h1 style={{ textAlign: 'center' }}>Tab city name to display weather data.</h1>;
}
