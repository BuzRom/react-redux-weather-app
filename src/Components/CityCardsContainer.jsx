import React from 'react'
import { useSelector } from 'react-redux';

import LoadingSpinner from '../Components/LoadingSpinner'
import CityCard from './CityCard'
import '../style/Components/CityCardContainer.scss';

export default function CityContainer() {
   const { isFetching, isError, isSuccess } = useSelector(state => ({
      isFetching: state.loading.isFetching,
      isSuccess: state.loading.isSuccess,
      isError: state.loading.isError
   }));
   const city = useSelector(({ city }) => city.items);

   if (isFetching) {
      return <LoadingSpinner />
   }
   if (isSuccess) {
      return <div className='city-card-container'>
         {(city.map((item) => <CityCard key={item.city.id} weather={item} />))}
      </div>
   }
   if (isError) {
      alert('Something went wrong! Probobly wrong city name or access to your position is denied!')
   }
   return <h1 style={{ textAlign: 'center' }}>Tab city name to display weather data.</h1>;
}
