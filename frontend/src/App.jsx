
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

import AboutPage from "./landing_page/about/AboutPage";
import HomePage from "./landing_page/home/HomePage";
import PricingPage from "./landing_page/pricing/PricingPage";
import ProductPage from "./landing_page/products/ProductsPage";
import Login from "./landing_page/signup/Login";
import Signup from "./landing_page/signup/Signup";
import SupportPage from "./landing_page/support/SupportPage";


import Footer from "./landing_page/Footer";
import Navbar from "./landing_page/Navbar";
import NotFound from "./landing_page/NotFound";

function App(){
  return(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/login" element={<Login/>} />
      <Route path="*" element={<NotFound />} />
      {/* <Route path="/dashboard" element={<Home/>} /> */}
    </Routes>
    <Footer />
  </BrowserRouter>
  )
}  

export default App;