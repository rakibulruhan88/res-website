import { Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import "./index.css";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/place_order/PlaceOrder";
import Footer from "./component/Footer/Footer";
import { useState } from "react";
import LoginPage from "./component/loginpage/LoginPage";
import Download_app from "./component/Download app/Download_app";
import Explore from "./component/Explore-menu/Explore";
import Contact from "./pages/Contact/Contact";

function App() {
  const [login, setlogin] = useState(false);
  return (
    <>
    {login?<LoginPage setlogin={setlogin}/>:''}
      <div className="app">
        <Header setlogin={setlogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/download" element={<Download_app />} />
          <Route path="/menu" element={<Explore />}/>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
