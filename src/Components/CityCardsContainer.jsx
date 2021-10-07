import React from 'react'
import { useSelector } from 'react-redux';

import LoadingSpinner from '../Components/LoadingSpinner'
import CityCard from './CityCard'

export default function CityContainer() {
   const { isFetching, isError, weather } = useSelector(state => ({
      isFetching: state.weather.isFetching,
      isError: state.weather.isError,
      weather: state.weather.data
   }));

   if (isFetching) {
      return <LoadingSpinner />
   }
   if (weather) {
      return <CityCard />
   }
   if (isError) {
      alert('Something went wrong! Probobly wrong city name or access to your position is denied!')
   }
   return <h1 style={{ textAlign: 'center' }}>Tab city name to display weather data.</h1>;
}
