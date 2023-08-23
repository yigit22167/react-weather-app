import { MinMax } from "./MinMax";
import { WeatherType } from "./WeatherType";
export const WeatherCard = ({ cityData }) => {
  return (
    <div className="w-3/5 mx-auto my-6 flex h-4/5 flex-col justify-around md:justify-between max-[420px]:my-0 items-center ">
      <h1 className=" text-5xl mt-6 max-[420px]:text-3xl  max-[420px]:mt-0 text-white font-semibold tracking-wide">
        {cityData.name}
      </h1>

      <WeatherType weatherType={cityData.weatherType} />

      <p className=" text-7xl font-medium text-white max-[420px]:text-4xl">
        {cityData.temp}°C
      </p>

      <MinMax minTemp={cityData.minTemp} maxTemp={cityData.maxTemp} />
    </div>
  );
};
