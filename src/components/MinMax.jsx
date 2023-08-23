export const MinMax = ({ minTemp, maxTemp }) => {
  return (
    <div className="flex h-16 justify-between sm:w-3/5 w-4/5 max-[420px]:mb-5 ">
      <div className="flex flex-col justify-center items-center text-xl max-[420px]:text-sm">
        <h3 className="font-bold text-white">min</h3>
        <p className="text-white">{minTemp} °C</p>
      </div>
      <div className="border-r-2"></div>
      <div className="flex flex-col justify-center items-center text-xl max-[420px]:text-sm">
        <h3 className="font-bold text-white">max</h3>
        <p className="text-white">{maxTemp} °C</p>
      </div>
    </div>
  );
};
