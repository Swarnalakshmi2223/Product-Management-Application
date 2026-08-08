import {
  Routes,
  Route,
} from "react-router-dom";


import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import Home from "./components/Home";

import AddProduct from "./components/AddProduct";


function App() {

  return (

    <div className="
      min-h-screen
      bg-[#090909]
      text-white
    ">

      <Navbar />


      <Routes>

        <Route
          path="/"
          element={<Home />}
        />


        <Route
          path="/add-product"
          element={<AddProduct />}
        />

      </Routes>


      <Footer />

    </div>

  );

}


export default App;