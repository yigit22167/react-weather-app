import { useState } from "react";

export const SearchForm = ({ fetchWeatherData }) => {
  const [location, setLocation] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetchWeatherData(location); // * fetch entered citys data
    setLocation("");
  }; // handle submit

  return (
    <form onSubmit={handleSubmit} className="w-full text-center">
      <input
        className="border-borderColor px-5 py-3 border-b-2 mr-6 text-xl text-white bg-transparent outline-none placeholder-placeholder"
        id="username"
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter your city"
      />
      <button className="text-xl px-5 py-3 my-6 text-buttonText bg-white rounded-md">
        Search
      </button>
    </form>
  );
};
