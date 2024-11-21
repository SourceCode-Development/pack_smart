import React, { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import Register from "./Register";
// import { useSelector } from "react-redux";

const Login = () => {
  const locator = useLocation();
  const stateFromLocator = locator?.state;
  const [activeTab, setActiveTab] = useState(
    stateFromLocator === "signup" ? "signup" : "signin"
  );
  //   const loginData = useSelector((state) => state.AuthReducerData.loginUser);
  //   const navigate = useNavigate();

  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobileScreen(mediaQuery.matches);

    const handleResize = () => {
      setIsMobileScreen(mediaQuery.matches);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //   useEffect(() => {
  //     if (loginData?.token) {
  //       navigate("/my-account");
  //     }
  //   }, []);

  return (
    <section className="login">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-6 col-md-8">
            <div className="login-sec">
              <div className="login-tabs">
                <span
                  className={activeTab === "signin" ? "active" : ""}
                  onClick={(e) => setActiveTab("signin")}
                >
                  Sign In
                </span>
                <span
                  className={activeTab === "signup" ? "active" : ""}
                  onClick={(e) => setActiveTab("signup")}
                >
                  Sign Up
                </span>
              </div>
              {activeTab === "signin" ? (
                <LoginForm
                  path={stateFromLocator}
                  isMobileScreen={isMobileScreen}
                />
              ) : (
                <Register
                  setActiveTab={setActiveTab}
                  isMobileScreen={isMobileScreen}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
