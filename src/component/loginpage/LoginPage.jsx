import { useState } from "react";
import { assets } from "../../assets/assets";
import "./loginFrom.css";

function LoginPage({ setlogin }) {
  const [currentstate, setcurrentstate] = useState("Sing Up");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h1>{currentstate}</h1>
          <img onClick={() => setlogin(false)} src={assets.cross_icon} />
        </div>
        <div className="login-popup-inputs">
          {currentstate === "Sing Up" ? (
            <input type="text" name="" id="" placeholder="Your name" required />
          ) : (
            <></>
          )}

          <input type="email" name="" id="" placeholder="Your email" required />
          <input
            type="password"
            name=""
            id=""
            placeholder="password"
            required
          />
        </div>
        <button>
          {currentstate === "Sing Up" ? "Create Account" : "Login"}
        </button>
        {currentstate === "Sing Up" ? (
          <p>
            Already Have a Account{" "}
            <span onClick={() => setcurrentstate("Log In")}>Click Here</span>
          </p>
        ) : (
          <></>
        )}
        {currentstate === "Log In" ? (
          <p>
            Create a Account{" "}
            <span onClick={() => setcurrentstate("Sing Up")}>Click Here</span>
          </p>
        ) : (
          <></>
        )}
      </form>
    </div>
  );
}

export default LoginPage;
