import React, { useState } from 'react'
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { useDispatch } from 'react-redux';

import { getCurrentCityWeather } from '../redux/loading/action';
import '../style/Components/AddCityForm.scss';


export default function AddCityForm() {
   const [location, setLocation] = useState('');
   const dispatch = useDispatch();

   const onFormSubmit = (e) => {
      e.preventDefault();
      /* for normal input */
      if (location.length > 0) {
         dispatch(getCurrentCityWeather(location));
         setLocation('')
      }
      /* for GooglePlacesAutocomplete */
      // if (location.label !== undefined) {
      //    const city = location.label.split(',').shift(),
      //       country = location.label.split(' ').pop()
      //    dispatch(getCurrentCityWeather(city, country));
      // }
   }

   const handleLocation = (value) => {
      setLocation(value)
   }

   return (
      <form className='form' onSubmit={onFormSubmit}>
         <input
            value={location}
            onChange={(e) => { handleLocation(e.target.value) }}
            placeholder='City name...'
            type="text" />
         {/* <GooglePlacesAutocomplete
            // apiKey={`${process.env.REACT_APP_GOOGLE_API_KEY}`}
            apiOptions={{ language: 'en' }}
            autocompletionRequest={{
               // componentRestrictions: {
               //    country: ['ua'],
               // },
               types: ["(regions)"],
            }}
            selectProps={{
               location,
               onChange: setLocation,
               placeholder: 'City name...',
               styles: {
                  control: (provided, state) => ({
                     ...provided,
                     width: '250px',
                     boxShadow: '0px 3px 6px #00000029',
                     border: state.isFocused ? '1px solid #459DE9' : 'none',
                     borderRadius: '5px',
                     cursor: 'pointer'
                  }),
                  indicatorSeparator: (provided) => ({
                     ...provided,
                     display: 'none'
                  }),
                  dropdownIndicator: (provided) => ({
                     ...provided,
                     display: 'none'
                  }),
                  singleValue: (provided) => ({
                     ...provided,
                     fontSize: '14px',
                  }),
                  loadingMessage: (provided) => ({
                     ...provided,
                     fontSize: '14px',
                     padding: '0px'
                  }),
                  noOptionsMessage: (provided) => ({
                     ...provided,
                     fontSize: '14px',
                     padding: '0px'
                  }),
                  option: (provided, state) => ({
                     ...provided,
                     cursor: 'pointer',
                     fontSize: '14px',
                     backgroundColor: state.isFocused ? '#F2F2F2' : null,
                     color: state.isSelected ? '#459DE9' : 'black',
                     padding: '2px 5px'
                  }),
                  placeholder: (provided) => ({
                     ...provided,
                     fontSize: '14px',
                     color: '#BCBCBC'
                  })
               },
            }}
         /> */}
         <button className='form-button' type='submit'>Add</button>
      </form>
   )
}
