import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from './components/Home/Home';
import Men from "./components/StoreAgeCategory/Men";
import Women from "./components/StoreAgeCategory/Women";
import Child from "./components/StoreAgeCategory/Child";
import CarouselComp from "./components/CarouselComp";

function App() {
  return <div className="App">
    <Home/>
    <Routes>
    <Route path="/" element={<Women/>}/>
      <Route path="/Women" element={<Women/>}/>
      <Route path="/Men" element={<Men/>}/>
      <Route path="/Child" element={<Child/>}/>
    </Routes>
  </div>;
}

export default App;
