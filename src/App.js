import logo from './logo.svg';
import './App.css';
import Map from "./components/Map"

function App() {
  return (
    <div className="App">
      <Map latitude = {37.773972} longitude ={-122.431297} />
    </div>
  );
}

export default App;
