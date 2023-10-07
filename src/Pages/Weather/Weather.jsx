

const Weather = () => {

    const astronomical = {
        id: 1,
        program: "Weather and Atmospheric Dynamics",
        title:
          "Weather and Atmospheric Dynamics Focus Area",
        subtitle: "WAD researches the dynamics of the atmosphere to improve our understanding of the fundamental processes that drive weather",
        details_1:
          "The Weather and Atmospheric Dynamics focus area (WAD) supports research to obtain accurate measurements of the atmosphere that help improve short-term, subseasonal, and seasonal weather predictions at local, regional, and global scales. Weather includes everything from localized microphysical processes that occur in minutes, to global-scale phenomena that can occur for an entire season. WAD helps improve our knowledge of the fundamental processes that drive these systems and inform the operational infrastructure upon which other federal agencies rely, including the National Oceanic and Atmospheric Administration (NOAA), the Federal Aviation Administration (FAA), and the Department of Defense (DOD). WAD further supports research into profiling winds, temperature, humidity, pressure, and aerosols; air-sea and land-atmosphere interactions; and lightning occurrences.",


      
        title2 :"Learn more about WAD",
        subtitle2: "Research Programs",
        subtitle3: "Atmospheric Dynamics and Precipitation Science",

        details_2: "WAD studies the dynamics of the atmosphere, precipitation, and wind to better understand the conditions that drive specific weather events. This research improves computer models, algorithms, and data assimilation that support short-term to seasonal weather prediction and understanding. To do this, WAD observes atmospheric phenomena associated with the water cycle – including precipitation, severe storms, lightning, and tropical cyclones – to determine the relationship between atmospheric thermodynamics, dynamics, storm structure, and convection; ocean surface properties; and radiation within weather systems. Ultimately, WAD hopes to improve process models in these areas, provide initial conditions and assimilation of data to better characterize and understand weather systems, and develop long-term time series of atmospheric analyses to support weather and climate studies.",

        subtitle4:'Satellite Data Assimilation',
        details_3:"WAD supports research in two areas to help advance satellite data assimilation. The Global Modeling and Assimilation Office (GMAO) uses comprehensive global models and data assimilation techniques to maximize the impact of satellite observations in climate, weather, and atmospheric composition prediction. To achieve this goal, GMAO develops models and assimilation systems for the atmosphere, ocean, and land surface; generates products to support NASA instrument teams for field campaigns and the NASA Earth Science Research and Analysis program; and undertakes scientific research to inform modeling system development pathways. The Joint Center for Satellite Data Assimilation (JCSDA) is a partnership among NASA, NOAA, and DoD. Its mission is to accelerate and improve the quantitative use of research and operational satellite data in weather, ocean, and environmental analysis and prediction models.",
        subtitle5:"Short-term Prediction Research and Transition",
        details_4:'The Short-term Prediction Research and Transition Center (SPoRT) takes the data products and algorthims from NASA research satellites and transitions them to NOAA’s National Weather Service (NWS) Weather Forecast Offices (WFOs). SPoRT aims to improve short-term forecasts on a regional scale.',
        

      };
    return (
        <div className="max-w-screen-xl mx-auto py-10 px-2">
        <div className="p-4 bg-green-950 text-white">
          <p className="text-xl font-normal text-green-500">
            {astronomical?.program}
          </p>
          <p className="text-2xl font-normal">{astronomical?.title}</p>
        </div>
  
        <p className="text-xl font-bold mt-5">{astronomical?.subtitle}</p>
        <p className="text-base text-justify mt-2">{astronomical?.details_1}</p>
  
        <p className="text-4xl font-semibold mt-16">{astronomical?.title2}</p>
  
        <p className="text-2xl mt-14 font-bold">{astronomical?.subtitle2}</p>
        <p className="text-xl mt-3 font-bold">{astronomical?.subtitle3}</p>
  
        <p className="text-base text-justify mt-2">{astronomical?.details_2}</p>
  
        <p className="text-xl mt-10 font-bold">{astronomical?.subtitle4}</p>
  
        <p className="text-base text-justify mt-2">{astronomical?.details_3}</p>
  
        <p className="text-xl mt-10 font-bold">{astronomical?.subtitle5}</p>
  
        <p className="text-base text-justify mt-2">{astronomical?.details_4}</p>
  
      </div>
    );
};

export default Weather;