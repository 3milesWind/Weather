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
      <div className="cards">
        <div className="time">{this.props.item.dt_txt}</div>
        <div className="data">
          <h5>Temperature:{this.props.item.main.temp}</h5>
          <p>maximum Temperature:{this.props.item.main.temp_max}</p>
          <p>minimum Temperature:{this.props.item.main.temp_min}</p>
          <hr />
          <h5>Weather:{this.props.item.weather[0].description}</h5>
          <p>humidity:{this.props.item.main.humidity}</p>
          <p>pressure:{this.props.item.main.pressure}</p>
          <hr />
          <h5>Wind</h5>
          <p>wind speed:{this.props.item.wind.speed}</p>
          <p>wind degree:{this.props.item.wind.deg}</p>
        </div>
      </div>
    );
  }
}
