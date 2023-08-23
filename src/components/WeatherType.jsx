import { WiCloudy } from "weather-icons-react";
import { WiDaySunny } from "weather-icons-react";
import { WiRain } from "weather-icons-react";
import { WiThunderstorm } from "weather-icons-react";

export const WeatherType = ({ weatherType }) => {
  if (weatherType === "Clear")
    return (
      <div className="flex flex-col items-center">
        <WiDaySunny size={72} color="white" />
        <p className="md:text-4xl text-3xl font-medium text-white">
          {weatherType}
        </p>
      </div>
    );
  if (weatherType === "Clouds")
    return (
      <div className="flex flex-col items-center">
        <WiCloudy size={72} color="white" />
        <p className="md:text-4xl text-3xl font-medium text-white">
          {weatherType}
        </p>
      </div>
    );
  if (weatherType === "Rain")
    return (
      <div className="flex flex-col items-center">
        <WiRain size={72} color="white" />
        <p className="md:text-4xl text-3xl font-medium text-white">
          {weatherType}
        </p>
      </div>
    );
  if (weatherType === "Thunderstorm")
    return (
      <div className="flex flex-col items-center">
        <WiThunderstorm size={72} color="white" />
        <p className="md:text-4xl text-3xl font-medium text-white">
          {weatherType}
        </p>
      </div>
    );
  return (
    <div className="flex flex-col items-center">
      <p className="md:text-4xl text-3xl font-medium text-white">
        {weatherType}
      </p>
    </div>
  );
};
