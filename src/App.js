import AddCityForm from "./Components/AddCityForm";
import CityCardsContainer from "./Components/CityCardsContainer";

import './style/index.scss';

function App() {
  return (
    <div className="container">
      <AddCityForm />
      <CityCardsContainer />
    </div>
  );
}

export default App;
