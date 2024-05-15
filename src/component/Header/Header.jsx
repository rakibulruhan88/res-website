import { useState } from "react";
import { assets } from "../../assets/assets";
import "./header.css";
import { BiMenu } from "react-icons/bi";
import { BiX } from "react-icons/bi";
import { Link } from "react-router-dom";
function Header({ setlogin }) {
  const [menu, setmenu] = useState("home");
  const [menubtn, setmenubtn] = useState(false);
  return (
    <>
      <div className="header">
        <Link to="/">
          <img src={assets.logo} className="logo" />
        </Link>
        <div className="nav">
          <ul>
            <Link to="/">
              <li>
                <a
                  onClick={() => setmenu("home")}
                  className={menu === "home" ? "active" : ""}
                  href=""
                >
                  Home
                </a>
              </li>
            </Link>
            <Link to="/cart">
              <li>
                <a
                  onClick={() => setmenu("menu")}
                  className={menu === "menu" ? "active" : ""}
                  href=""
                >
                  Cart
                </a>
              </li>
            </Link>
            <Link to="/contact">
              <li>
                <a
                  onClick={() => setmenu("contact")}
                  className={menu === "contact" ? "active" : ""}
                  href=""
                >
                  Contact
                </a>
              </li>
            </Link>
            <Link to="/download">
              <li>
                <a
                  onClick={() => setmenu("mobile app")}
                  className={menu === "mobile app" ? "active" : ""}
                  href="#download-app"
                >
                  Mobile app
                </a>
              </li>
            </Link>
          </ul>
        </div>
        <div
          className={menubtn == false ? "second-nav menu-active" : "second-nav"}
        >
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <Link to="/cart">
              <li>
                <a href="/cart">Cart</a>
              </li>
            </Link>
            <Link to="/contact">
              <li>
                <a href="">Contact</a>
              </li>
            </Link>

            <li>
              <a href="#download-app">Mobile app</a>
            </li>
          </ul>
        </div>
        <div className="cart">
          {/* <img src={assets.search_icon} alt="" /> */}
          <div className="nav_cart">
            <Link to="/cart">
              {" "}
              <img src={assets.basket_icon} alt="" />
            </Link>
            <div className="dot"></div>
          </div>
          {/* <img src={assets.logout_icon} alt="" /> */}
          <div className="login-btn">
            <button onClick={() => setlogin(true)}>Sign in</button>
          </div>
          <div className="menu-open">
            {menubtn ? (
              <button onClick={() => setmenubtn(false)}>
                <BiX />{" "}
              </button>
            ) : (
              <button onClick={() => setmenubtn(true)}>
                <BiMenu />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
