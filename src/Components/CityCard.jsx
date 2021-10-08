import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Graph from './Graph';
import { date, day, mounth, time } from '../auxiliary/dateFormat';
import { getCelsius, getFahrenheit, getMilesPerHour } from '../auxiliary/measurementConversion';
import { removeFromCityList } from '../redux/city/action';
import '../style/Components/CityCard.scss';

export default function CityCard({ weather }) {
   const dispatch = useDispatch();

   const celsius = Math.round(getCelsius(weather.list[0].main.temp));
   const fahrenheit = Math.round(getFahrenheit(weather.list[0].main.temp));
   const filesLikeCelsius = Math.round(getCelsius(weather.list[0].main.feels_like));
   const filesLikeFahrenheit = Math.round(getFahrenheit(weather.list[0].main.feels_like));
   const milesPerHour = Math.round(getMilesPerHour(weather.list[0].wind.speed) * 10) / 10;
   const icon = weather.list[0].weather[0].icon;
   const weatherIcon = `https://openweathermap.org/img/wn/${icon}.png`;
   const weatherDescription = weather.list[0].weather[0].description[0].toUpperCase() + weather.list[0].weather[0].description.slice(1);

   const [isCelsius, setIsCelsius] = useState(true);

   const handlMainTempValue = () => {
      setIsCelsius(!isCelsius);
   }
   const handlDeleteCity = () => {
      dispatch(removeFromCityList(weather.city.id));
   }

   return (
      <div className='card'>
         <div className="card__header">
            <div className="location">
               <p className="city">{`${weather.city.name}, ${weather.city.country}`}</p>
               <div className="icone">
                  <img src={weatherIcon} alt="weather-icone" />
                  <p className="icone__text">{weatherDescription}</p>
               </div>
            </div>
            <p className="date">{`${day}, ${date} ${mounth}, ${time}`}</p>
         </div>
         <div className="chart">
            <Graph activeValue={isCelsius} weather={weather} />
         </div>
         <div className="card__footer">
            <div className="temperature-block">
               <p className="temp">{
                  (!isCelsius)
                     ?
                     fahrenheit
                     :
                     (celsius >= 1)
                        ?
                        '+' + celsius
                        :
                        celsius
               }</p>
               <div className="temp-badge-toggle">
                  <div className="badge-item item-1">
                     <input onChange={handlMainTempValue} defaultChecked id={weather.city.id + "C"} type="radio" name={weather.city.id} />
                     <label htmlFor={weather.city.id + "C"}>°C</label>
                  </div>
                  <div className="badge-item item-2">
                     <input onChange={handlMainTempValue} id={weather.city.id + "F"} type="radio" name={weather.city.id} />
                     <label htmlFor={weather.city.id + "F"}>°F</label>
                  </div>
               </div>
               <p className="feels-like">Feels like: {
                  (!isCelsius)
                     ?
                     filesLikeFahrenheit + ' °F'
                     :
                     (filesLikeCelsius >= 1)
                        ?
                        '+' + filesLikeCelsius + ' °C'
                        :
                        filesLikeCelsius + ' °C'
               }</p>
            </div>
            <div className="data">
               <p className="data__text">Wind: <span className='data-measurements'>{
                  (!isCelsius)
                     ?
                     milesPerHour + ' mph'
                     :
                     Math.round(weather.list[0].wind.speed * 10) / 10 + ' m/s'
               }</span></p>
               <p className="data__text">Humidity: <span className='data-measurements'>{weather.list[0].main.humidity}%</span></p>
               <p className="data__text">Pressure: <span className='data-measurements'>{weather.list[0].main.pressure}hPa</span></p>
            </div>
         </div>
         <svg onClick={handlDeleteCity} className="card__btn" width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
            <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round">
               <g id="24-px-Icons" transform="translate(-364.000000, -124.000000)" stroke="#000000">
                  <g id="ic_cancel" transform="translate(360.000000, 120.000000)">
                     <g id="cross">
                        <g transform="translate(5.000000, 5.000000)" strokeWidth="3">
                           <path d="M0,0 L14.1421356,14.1421356" id="Line"></path>
                           <path d="M14,0 L1.77635684e-15,14" id="Line"></path>
                        </g>
                     </g>
                  </g>
               </g>
            </g>
         </svg>
      </div>
   )
}
