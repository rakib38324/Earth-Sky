
const Climate = () => {
    const climate = {
        id: 1,
        program: "Climate Variability and Change",
        title:
          "Climate Variability and Change Focus Area",
        subtitle: "CVC measures and models Earth’s dynamic systems and how they change over time.",
        details_1:
          "The Climate Variability and Change focus area (CVC) supports research to better understand the overall state of Earth’s climate and the physical processes that affect it. CVC supports focused and interdisciplinary research to better describe, understand, and predict the ways in which Earth’s ocean, atmosphere, land, and ice will interact and influence Earth’s climate over a wide range of timescales. To do this, CVC supports the development of climate data sets and computer models that leverage observations from relevant NASA and non-NASA platforms, including satellites, aircraft, and ships. These datasets include observations of sea surface height, temperature, and salinity; ocean currents and vector winds; sea ice extent and thickness; glacial topography, motion, and mass change; aerosol and cloud processes that affect Earth’s energy balance; and more. Through this work, CVC hopes to better predict changes in the Earth’s climate from sub-seasonal to multi-decadal time scales.",


      
        title2 :"Learn more about CVC",
        subtitle2: "Research Programs",
        subtitle3: "Cryospheric Sciences Program",

        details_2: "The Cryospheric Sciences Program supports basic research into the Earth’s sea- and land-based ice to understand how and why it is changing. Additionally, the program seeks to understand how changes in polar ice will affect global climate, sea level, and the polar environment. Supported studies use space-based, aircraft-based, and other remote sensing techniques to understand the factors controlling the retreat (shrinking) and advance (growth) of the world’s sea- and land-based ice and how polar ice interacts with the ocean, atmosphere, solid Earth, and solar radiation. The program sponsors several polar initiatives designed to encourage an integrated approach to cryospheric science problems, such as the annual PARCA meeting, NASA-ESA Snow on Sea Ice (NESOSI) initiative, and the West Antarctic Ice Sheet (WAIS) meeting.",

        subtitle4:'Modeling, Analysis, and Prediction Program',
        details_3:"The MAP program supports Earth system modeling and data assimilation to simulate past and present conditions on Earth and help predict them in the future. These models examine all aspects of the Earth at a variety of timescales, including changes that occur over days to months and decades to hundreds of years. The program uses observations from satellites, aircraft, and ground-based instruments and inputs them into models to better understand the atmosphere, hydrosphere, biosphere, geosphere, and cryosphere as individual and integrated systems. This approach helps validate satellite observations and improves current Earth system models. MAP supports this work through both directed funding of the Goddard Institute for Space Studies (GISS) Model E and the Global Modeling and Assimiliation Office’s (GMAO) GEOS 5 models, as well as through annual competed grants as a part of the Research Opportunities in Space and Earth Sciences (ROSES) solicitations.",
        subtitle5:"Physical Oceanography Program",
        details_4:'The Physical Oceanography Program supports research on the ocean’s role in climate variability. The ocean modulates our planet’s climate and weather by storing and transporting large quantities of heat, water, moisture, and carbon dioxide, as well as exchanging these elements with the atmosphere. This continuous exchange influences climate and weather patterns over the globe by releasing the heat that fuels the overlying atmospheric circulation, aerosols that impact cloud cover, and moisture that determines the fate of the global hydrological cycle, and by absorbing and storing atmospheric carbon dioxide for millennia. NASA’s Physical Oceanography program supports basic research and analysis activities that enable development of NASA’s current and future physical oceanography satellite missions and the scientific interpretation of data from them.',
        

      };
    return (
        <div className="max-w-screen-xl mx-auto py-10 px-2">
        <div className="p-4 bg-green-950 text-white">
          <p className="text-xl font-normal text-green-500">
            {climate?.program}
          </p>
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
  
        <p className="text-xl mt-10 font-bold">{climate?.subtitle5}</p>
  
        <p className="text-base text-justify mt-2">{climate?.details_4}</p>
  
      </div>
    );
};

export default Climate;