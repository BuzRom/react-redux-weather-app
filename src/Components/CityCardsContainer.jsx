import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { } from 'react-redux';

import { getLocalWeather, getCurrentCityWeather } from '../redux/loading/action';
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
   const dispatch = useDispatch();

   const getLocalPosition = useCallback(() => {
      dispatch(getLocalWeather());
   }, [dispatch]);

   React.useEffect(() => {
      getLocalPosition();
   }, [getLocalPosition]);

   const getCityFromStorage = useCallback(() => {
      const cityStorage = JSON.parse(localStorage.getItem('city')) || [];
      cityStorage.forEach(item => dispatch(getCurrentCityWeather(item)));
   }, [dispatch]);

   React.useEffect(() => {
      getCityFromStorage();
   }, [getCityFromStorage]);


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
