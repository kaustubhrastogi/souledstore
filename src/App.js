import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Men from "./components/StoreAgeCategory/Men";
import Women from "./components/StoreAgeCategory/Women";
import Child from "./components/StoreAgeCategory/Child";
import SubCategory from "./components/SubCategoryProducts/SubCategory";
import Contactus from "./components/StoreAgeCategory/Contactus";

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/" element={<Women />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Child" element={<Child />} />
        <Route path="/subcategories" element={<SubCategory />} />
        <Route path="/Contactus" element={<Contactus />} />
      </Routes>
    </div>
  );
}
export default App;
