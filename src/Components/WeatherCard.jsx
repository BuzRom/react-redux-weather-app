import React from 'react';
import { useSelector } from 'react-redux';

import Graph from './Graph';
import { date, day, mounth, time } from '../auxiliary/dateFormat'
import '../style/Components/WeatherCard.scss';

export default function WeatherCard() {
   const { weather } = useSelector(state => ({
      weather: state.weather.data
   }));

   const icon = weather.list[0].weather[0].icon;
   const weatherIcon = `https://openweathermap.org/img/wn/${icon}.png`;
   const weatherDescription = weather.list[0].weather[0].description[0].toUpperCase() + weather.list[0].weather[0].description.slice(1);

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
            <Graph />
         </div>

         <div className="card__footer">
            <div className="temperature-block">
               <p className="temp">{
                  (weather.list[0].main.temp >= 1)
                     ?
                     '+' + Math.round(weather.list[0].main.temp)
                     :
                     Math.round(weather.list[0].main.temp)}</p>
               {/* <div className="temp-degree">
                  <input type="radio" name="C" id="C" />
                  <input type="radio" name="F" id="F" />
               </div> */}
               <p className="feels-like">Feels like: {Math.round(weather.list[0].main.feels_like)} °C</p>
            </div>
            <div className="data">
               <p className="data__text">Wind: <span style={{ color: '#459DE9' }}>{weather.list[0].wind.speed} m/s</span></p>
               <p className="data__text">Humidity: <span style={{ color: '#459DE9' }}>{weather.list[0].main.humidity}%</span></p>
               <p className="data__text">Pressure: <span style={{ color: '#459DE9' }}>{weather.list[0].main.pressure}Pa</span></p>
            </div>
         </div>
         <svg className="card__btn" width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
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
