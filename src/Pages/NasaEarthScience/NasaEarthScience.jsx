import ReactPlayer from "react-player";

const NasaEarthScience = () => {
  const science = {
    id: 1,
    program: "Explore Earth Science",
    title:
      "NASA uses the vantage point of space to increase our understanding of our home planet, improve lives, and safeguard our future.",
    subtitle: "Why Does NASA Study Earth?",
    details_1:
      "We live on a dynamic, living planet. Land shifts. Seas rise. Volcanoes erupt. Storms rage. Snow melts. Plants grow. Cities expand. These ever-changing, interconnected systems affect all life on Earth, and the planet itself.",
    details_2:
      "To understand these natural and human-caused changes, NASA uses unique global observations from space, air, sea and on land. This data enables informed decision-making for agriculture, water and food security, urban planning, disaster preparedness and response, transportation, climate and weather, and myriad other things that benefit life on Earth.",
    details_3:
      "Among the Earth systems NASA studies from space are: dust storms, volcanoes, flooding, coral reefs, night lights, sea surface salinity, wildfires, vegetation, urban growth, food production, mosquito tracking and other human health issues, precipitation across the world, hurricanes and typhoons, soil moisture, land and sea ice, and changes to the land and sea surfaces.",
    videoLink: "https://youtu.be/f9F7yDjSdNA",
    details_4:"NASA is designing a new set of Earth-focused missions to provide key information to guide efforts related to climate change, natural hazard mitigation, fighting forest fires, and improving real-time agricultural processes.",
    details_5: "Each uniquely designed satellite in the Earth System Observatory will complement the others, working in tandem to create a 3D, holistic view of Earth, from bedrock to atmosphere.",
    title2 :"NASA's Earth System Observatory",
    subtitle2: "Addressing, Mitigating Climate Change",
    videoLink2: 'https://youtu.be/_aDeRFqZVgA',
  };
  return (
    <div className="max-w-screen-xl mx-auto py-10 px-2">
      <div className="p-4 bg-green-950 text-white">
        <p className="text-2xl font-normal text-green-500">
          {science?.program}
        </p>
        <p className="text-2xl font-normal">{science?.title}</p>
      </div>

      <p className="text-3xl mt-5">{science?.subtitle}</p>
      <p className="text-base text-justify mt-2">{science?.details_1}</p>

      {/* <img className="my-2" src={`${science?.image}`}></img> */}
      <p className="text-base text-justify mt-2">{science?.details_2}</p>
      <p className="text-base text-justify mt-2">{science?.details_3}</p>
      <p className="md:w-10/12 lg:w-1/2 mx-auto mt-4">
        <ReactPlayer url={`${science?.videoLink}`} />
      </p>
      <p className="text-base text-justify mt-10">{science?.details_4}</p>
      <p className="text-base text-justify mt-2">{science?.details_5}</p>

      <p className="text-4xl font-semibold mt-10">{science?.title2}</p>
      <p className="text-2xl mt-5 font-bold">{science?.subtitle2}</p>
      <p className="md:w-10/12 lg:w-1/2 mx-auto mt-4">
        <ReactPlayer url={`${science?.videoLink2}`} />
      </p>
    </div>
  );
};

export default NasaEarthScience;
