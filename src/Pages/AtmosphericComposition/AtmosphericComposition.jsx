const AtmosphericComposition = () => {
  const astronomical = {
    id: 1,
    program: "Atmospheric Composition",
    title: "Atmospheric Composition Focus Area",
    subtitle:
      "The Atmospheric Composition focus area (AC) conducts research on Earth’s atmosphere, including its chemical and physical properties, Earth’s energy budget, and air quality.",
    details_1:
      "AC studies the variations in and processes that affect aerosols, clouds, and trace gases, which influence climate, weather, and air quality. AC provides observations and modeling tools to assess the effects of climate change on ozone recovery and future atmospheric composition; improve climate forecasts based on fluctuations in global environmental change; and model past, present, and future air quality, both regionally and globally. This research, combined with observations, data assimilation, and modeling, improves society’s ability to predict how future changes in atmospheric composition will affect climate, weather, and air quality.",

    title2: "Learn more about AC",
    subtitle2: "Research Programs",
    subtitle3: "Upper Atmosphere Research Program",

    details_2:
      "The Upper Atmosphere Research Program (UARP) studies the processes and reactions that control the amount of ozone in the upper troposphere and stratosphere. UARP uses observations from satellites, airborne campaigns, ground networks, and laboratory studies to quantify changes in ozone concentration and to better understand the driving forces behind reactions that can either directly or indirectly destroy or create atmospheric ozone and precursors to ozone-destroying compounds. This research contributes significantly to the World Meteorological Organization and the U.N. Environment Programme quadrennial assessments on ozone depletion, as mandated by the Montreal Protocol.",

    subtitle4: "Tropospheric Composition Program",
    details_3:
      "The Tropospheric Composition Program (TCP) studies global tropospheric ozone and aerosols, including their chemical precursors and the reactions involved in their formation and transformation into other chemical compounds. TCP strives to develop an integrated observing system for tropospheric composition, which includes chemical transport models, as well as satellite, airborne, and ground-based observations of tropospheric composition. This integrated observing system is fundamental to create a better understanding of air quality and climate.",
    subtitle5: "Radiation Sciences Program",
    details_4:
      "The Radiation Sciences Program (RSP) conducts research to better understand and predict how aerosols, clouds, and gases scatter and absorb both solar and terrestrially emitted radiation in the Earth’s atmosphere, especially as it relates to climate variability and change. The program supports studies to improve the theoretical understanding of radiative transfer and to improve field measurements of aerosol and cloud particle concentration, composition, microphysics, and optical properties. These measurements include both airborne and surface-based remote and in situ measurements. The program also supports the analysis of satellite remote sensing and field data as well as the development of process models, which contribute to Earth system modeling.",
    subtitle6: "Atmospheric Composition Modeling and Analysis Program",
    details_5:
      "The Atmospheric Composition Modeling and Analysis Program (ACMAP) uses models to help integrate observations from multiple satellite, airborne- and ground-based instruments in four main areas: air quality and oxidation efficiency in the troposphere, how pollution-sourced aerosols affect cloud properties, stratospheric chemistry and ozone depletion, and interactions between atmospheric chemistry and climate. ACMAP also supports small amounts of research into long-term trends in atmospheric composition.",
  };
  return (
    <div className="max-w-screen-xl mx-auto py-10 px-2">
      <div className="p-4 bg-green-950 text-white">
        <p className="text-2xl font-normal text-green-500">
          {astronomical?.program}
        </p>
        <p className="text-xl font-normal">{astronomical?.title}</p>
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

      <p className="text-xl mt-10 font-bold">{astronomical?.subtitle6}</p>

      <p className="text-base text-justify mt-2">{astronomical?.details_5}</p>
    </div>
  );
};

export default AtmosphericComposition;
