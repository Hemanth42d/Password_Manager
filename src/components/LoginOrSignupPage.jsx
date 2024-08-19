import { useState } from "react";
import "./main.css";

const LoginOrSignupPage = () => {
  const [activeClass, setActiveClass] = useState("active");

  return (
    <>
      <div className="box">
        <div
          className={`wrapper ${activeClass === "active" ? "active" : "no"} `}
        >
          <div className="form_box login">
            <h2 className="loginName">Login</h2>
            <div className="input-box">
              <input
                type="email"
                required
                placeholder="Enter Your Email address"
              />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" />
            </div>
            <button type="submit" className="loginbtn">
              Login
            </button>
            <div className="login_register">
              <p className="login_register_text">
                Don't have an account ?
                <a
                  href="#"
                  className="register_link"
                  onClick={() => {
                    setActiveClass("active");
                    console.log("CLicked");
                    console.log(activeClass);
                  }}
                >
                  Register
                </a>
              </p>
            </div>
          </div>

          <div className="form_box register">
            <h2 className="registerName">Register</h2>
            <div className="input-box">
              <input type="text" required placeholder="Enter Your UserName" />
            </div>
            <div className="input-box">
              <input
                type="email"
                required
                placeholder="Enter Your Email address"
              />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" />
            </div>
            <button type="submit" className="loginbtn">
              Sign up
            </button>
            <div className="login_register">
              <p className="login_register_text">
                Already have an account ?
                <a
                  href="#"
                  className="register_link"
                  onClick={() => {
                    setActiveClass("no");
                    console.log("clicked");
                    console.log(activeClass);
                  }}
                >
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginOrSignupPage;
