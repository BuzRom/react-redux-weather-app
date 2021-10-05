
import AddCityForm from "./Components/AddCityForm";
import WeatherCardsContainer from "./Components/WeatherCardsContainer";

import './style/index.scss';

function App() {
  return (
    <div className="container">
      <AddCityForm />
      <WeatherCardsContainer />
    </div>
  );
}

export default App;
