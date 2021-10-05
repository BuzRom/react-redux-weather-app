# in progress...
![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## [Demo](https://react-redux-weather-app-demo.herokuapp.com/) :exclamation::exclamation::exclamation:*Google Map Api issue present*:exclamation::exclamation::exclamation:
### Desine: [Adobe XD](https://xd.adobe.com/view/0234cb62-06be-4065-9c9f-4b01488a852b-5767/)

**Must init app with <a href='https://create-react-app.dev/'>Create-React-App</a>**<br>
**Must using <a href='https://openweathermap.org/'>OpenWeatherMap API</a>**

## Task requirements:
<ol>
   <li>Displaying the current weather of the user by his location by default if the user granted location access.</li>
   <li>Adding a city to the list by autocompleting search and save it to application settings.</li>
   <li>Switching from Celsius to Fahrenheit by clicking on the corresponding sign, for each card separately. Should be saved as application settings.</li>
   <li>Language switching globally for all displayed cities. Available languages are English, Ukrainian, and Hebrew (RTL). Should be saved as application settings.</li>
   <li>Displaying an icon from the <a href='https://openweathermap.org/'>OpenWeatherMap</a> service.</li>
   <li>Using this request <code>https://api.openweathermap.org/data/2.5/forecast?q= {city_name }&appid={API_KEY}</code> create a graph of temperature and date dependencies (using any library for plotting).</li>
   <li>The layout of the application must be made according to the design provided.</li>
</ol>

**The application should store settings in LocalStorage.**<br>
**For state management, you should use Redux or MobX.**