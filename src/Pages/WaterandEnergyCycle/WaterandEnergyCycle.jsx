const WaterandEnergyCycle = () => {
  const climate = {
    id: 1,
    program: "Water and Energy Cycle",
    title: "Water and Energy Cycle Focus Area",
    subtitle:
      "WEC supports focused and crosscutting research to improve our understanding of the global water cycle.",
    details_1:
      "The Water and Energy Cycle focus area (WEC) works to define, quantify, and model the different components of the water cycle that take place on land, including precipitation, snow, soil moisture, surface water and groundwater, and their interactions with other Earth systems. This research helps improve our understanding of how much water exists on Earth, how it’s changing over time, and what quality it’s in. It also helps us understand the energy that is transferred when water moves around the Earth and changes phase from liquid water to water vapor to snow. WEC uses observations from satellites and aircraft to help inform this research, and they partner with other Research and Analysis Program focus areas on crosscutting topics like ocean dynamics and cloud formation.",

    title2: "Learn more about WEC",
    subtitle2: "Research Programs",
    subtitle3: "Terrestrial Hydrology Program",

    details_2:
      "The Terrestrial Hydrology Program (THP) helps develop new remote sensing techniques to improve global water measurements that take into account natural variations in the water cycle and water resource management. These measurements help us understand how much water is stored on land and where, as well as how global water interacts with the atmosphere. Particular emphasis is placed on the application of satellite-based data for characterizing and predicting the terrestrially linked components of the water cycle and the dynamics of large-scale river basins. This research will help improve future measurements and inform future satellite and field experiments.",

    subtitle4: "NASA Energy and Water Cycle Study",
    details_3:
      "The NASA Energy and Water Cycle Study (NEWS) seeks to improve our ability to predict how the global water and energy cycle behaves. NEWS supports advanced global observation, data assimilation, and improved representation of the water and energy cycles in climate models, better prediction systems to more effectively quantity the hydrologic consequences of climate change, and produce useful seasonal and longer-range hydrologic predictions.",
  };
  return (
    <div className="max-w-screen-xl mx-auto py-10 px-2">
      <div className="p-4 bg-green-950 text-white">
        <p className="text-xl font-normal text-green-500">{climate?.program}</p>
        <p className="text-2xl font-normal">{climate?.title}</p>
      </div>

      <p className="text-xl font-bold mt-5">{climate?.subtitle}</p>
      <p className="text-base text-justify mt-2">{climate?.details_1}</p>

      <p className="text-4xl font-semibold mt-16">{climate?.title2}</p>

      <p className="text-2xl mt-14 font-bold">{climate?.subtitle2}</p>
      <p className="text-xl mt-3 font-bold">{climate?.subtitle3}</p>

      <p className="text-base text-justify mt-2">{climate?.details_2}</p>

      <p className="text-xl mt-10 font-bold">{climate?.subtitle4}</p>

      <p className="text-base text-justify mt-2">{climate?.details_3}</p>
    </div>
  );
};

export default WaterandEnergyCycle;
