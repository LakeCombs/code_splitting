import React from "react";
import logo from "../logo.svg";

const Page1 = ({ onRouteChange }) => {
  return (
    <div className="App">
      <header style={{ height: "100px" }}>
        <img src={logo} style={{ height: "50px", width: "50px" }} alt="logo" />
      </header>
      <button
        className="disabled"
        onClick={() => {
          onRouteChange("page2");
        }}
      >
        Page1
      </button>
      <button
        onClick={() => {
          onRouteChange("page2");
        }}
      >
        Page2
      </button>
      <button
        onClick={() => {
          onRouteChange("page3");
        }}
      >
        Page3
      </button>
    </div>
  );
};

export default Page1;
