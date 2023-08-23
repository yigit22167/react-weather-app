import { useState } from "react";
import { SearchForm } from "./components/SearchForm";
import { WeatherCard } from "./components/WeatherCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function App() {
  const [data, setData] = useState({
    // *  data object which contains all the data of the weather in searched city
    // * dummy data
    name: "Adana",
    temp: 35.2,
    minTemp: 34.3,
    maxTemp: 36.1,
    weatherType: "clouds",
  });

  const fetchWeatherData = async (location) => {
    // * fetch func
    const res = axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2e9a71b6b34c4a49f1955106bc4c6be2&units=metric`
      )
      .then((res) => {
        setData({
          ...data,
          name: res.data.name.split(" ")[0],
          temp: res.data.main.temp,
          minTemp: res.data.main.temp_min,
          maxTemp: res.data.main.temp_max,
          weatherType: res.data.weather[0].main,
        }); // * set the entered city's weather data to object

        // ! console.log(res);
        // ! console.log(data);
      });
  };

  return (
    <div className="App font-pop bg-background h-screen justify-center flex">
      <div className="container p-8 max-w-screen-sm my-auto mx-6 bg-container rounded-md shadow border-2 border-borderColor h-4/5 overflow-hidden">
        <SearchForm fetchWeatherData={fetchWeatherData} />
        <WeatherCard cityData={data} />
      </div>
    </div>
  );
}

export default App;
