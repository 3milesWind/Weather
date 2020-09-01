/**
 * About Screen
 * 简单写一下这个App是用来干嘛的
 * 要求文字对称，
 * 不能全部顶格排布在最左边
 */
import React from "react";
import "./AboutScreen.css";
export default function AboutScreen() {
  return (
    <form className="textbox">
      <h1
        style={{
          color: "white",
          textAlign: "center",
          fontSize: "45px",
        }}
      >
        Hello, World!
      </h1>
      <hr style={{ backgroundColor: "white", margin: "10px" }} />
      <h4
        style={{
          textAlign: "center",
          color: "white",
          fontWeight: "bold",
          fontSize: "30px",
        }}
      >
        Forcast:
      </h4>
      <h6 className="context">
        This allows you to add a five day forecast info by the interval three
        hours. By the beginning of the each forcast, the system will also
        automatically present you with some basic info on the city you are
        searching. Click the "delete" button to delete any unwanted group of
        predications.
      </h6>
    </form>
  );
}
