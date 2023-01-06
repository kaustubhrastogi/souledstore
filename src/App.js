import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Men from "./components/StoreAgeCategory/Men";
import Women from "./components/StoreAgeCategory/Women";
import Child from "./components/StoreAgeCategory/Child";
import SubCategory from "./components/SubCategoryProducts/SubCategory";
import Contactus from "./components/StoreAgeCategory/Contactus";
import ProductComponent from "./components/ProductComponent/ProductComponent";
import { WishListComp } from "./components/WishListComp";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import CartComponent from "./components/CartComponent/CartComponent";
import Signin from "./components/StoreAgeCategory/Signin";
import Signup from "./components/StoreAgeCategory/Signup";


function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <Home />
      <Routes>
        <Route path="/" element={<Men />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Women/:id" element={<Women/>} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Child" element={<Child />} />
        <Route path="/subcategory" element={<SubCategory />} />
        <Route path="/subcategory/:id" element={<SubCategory />} />
        <Route path="/subcategory/:women/:id" element={<SubCategory />} />
        <Route path="/cart" element={<CartComponent/>} />
        <Route path="/ProductComponent" element={<ProductComponent />} />
        <Route path="/ProductComponent/:id" element={<ProductComponent/>} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/WishListComp" element={<WishListComp />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup/>} />

      </Routes>
      </Provider>
    </div>
  );
}
export default App;
