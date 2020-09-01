/**
 * 显示每一天的weather用的Card
 * 你当然也可以无视这个component，
 * 用别的UI库的Card，
 * 或者自己写别的样子的Card
 */

import React from "react";
import "./Card.css";
export default class Card extends React.Component {
  //uncomment below to use the constructor to set props
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ height: "230px" }} className="cards">
        <div
          className="time"
          style={{ fontSize: "30px", color: "black", fontWeight: "500" }}
        >
          {this.props.item.name}
        </div>
        <div className="data">
          <h5>Temperature:{this.props.item.main.temp}</h5>
          <h5>Weather:{this.props.item.weather[0].description}</h5>
          <p>a city in:{this.props.item.sys.country}</p>
          <p>longitude:{this.props.item.coord.lat}</p>
          <p>latitude:{this.props.item.coord.lon}</p>
        </div>
      </div>
    );
  }
}
