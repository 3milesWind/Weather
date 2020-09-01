/**
 * 显示各种城市当前天气的screen
 *
 * 要求：
 * 像ForcastScreen一样，在右上角添加searchBar，
 * 输入城市名字并点add之后，add一张有被搜索城市的天气的card到当前屏幕
 *
 * Extra Credit：
 * 当前被搜索城市名不存在时用alert() 报错
 */

import React from "react";
import axios from "axios";
import { Menu, Segment, Container } from "semantic-ui-react";
import "./WeatherScreen.css";
import WeatherCard from "../components/WeatherCard";
const API = "https://api.openweathermap.org/data/2.5/weather?q=";
const APPID = "&APPID=eda439d629165a345559e6e9043cf085&units=";
const UNIT = "metric";

export default class WeatherScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "chengdu",
      info: [],
      query: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { city } = this.state;

    axios
      .get(API + city + APPID + UNIT)
      .then((res) => {
        const data = res.data;
        const NewInfo = this.state.info.concat(data);
        this.setState({
          city: data.name,
          info: NewInfo,
        });
        // console.log("weather data:  ", res);
      })
      .catch((error) => {
        alert("The city does not exist-----");
        console.log(error);
      });
  }
  //get the infor from the search bar
  handleChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  };
  //process request for weather card
  handleSubmit() {
    this.setState(
      {
        city: this.state.query,
      },
      () => {
        this.componentDidMount();
      }
    );
  }
  render() {
    const { info } = this.state;
    return (
      <div>
        <Segment inverted>
          <Container>
            <Menu inverted secondary>
              <Menu.Item position="left">
                <h1>Weather</h1>
              </Menu.Item>
              <Menu.Item>
                <h1>Get Current Weather</h1>
              </Menu.Item>
              <Menu.Item position="right">
                <input type="text" onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Add</button>
              </Menu.Item>
            </Menu>
          </Container>
        </Segment>

        <Container>
          {info
            .filter((el, index) => index >= 1)
            .map((item, index) => (
              <WeatherCard key={index} item={item} />
            ))}
        </Container>
      </div>
    );
  }
}
