
const CarbonCycleandEcosystems = () => {
    const climate = {
        id: 1,
        program: "Carbon Cycleand Ecosystems",
        title:
          "Carbon Cycleand Ecosystems Focus Area",
        
        details_1:
          "Carbon is a fundamental part of the Earth system. It is one of the primary building blocks of all organic matter on Earth and a key element in setting Earth’s temperature.  Carbon moves from the atmosphere to the land, ocean, and life through biological, chemical, geological and physical processes in a cycle called the carbon cycle. Because some carbon gases are greenhouse gases, changes in the carbon cycle that put more carbon in the atmosphere also warm Earth’s climate.",


      
        
       
        subtitle3: "Terrestrial Hydrology Program",
        details_3: "Terra’s five instruments provide measurements of plant (vegetation) composition, structure, extent, and change. All four measurements are necessary to estimate how much carbon plants take up as they grow, and how much is being released to the atmosphere over time. Terra also measures concentrations of carbon monoxide in the atmosphere. Since Terra measurements begin in 2000, they provide a record of the rate and extent of change for more than a decade.",

        details_2: "On the short time scale, the carbon cycle is most visible in life. Plants on land and in the ocean convert carbon dioxide to biomass (like leaves and stems) through photosynthesis. The carbon returns to the atmosphere when the plants decay, are eaten and digested by animals, or burn in fires. Because plants and animals are an integral part of the carbon cycle, the carbon cycle is closely connected to ecosystems. As ecosystems change under a changing climate, the carbon cycle will also change. For example, plants may bloom earlier in the year and grow for more months (assuming sufficient water is present) as the growing season gets longer, altering the food supply for animals in the ecosystem. If more plants grow, they will take more carbon out of the atmosphere and cool temperatures. If, on the other hand, warming slows plant growth, habitats will shift and more carbon will go into the atmosphere where it can cause additional warming.",

        subtitle4:'Ocean',
        details_4:"MODIS measures chlorophyll concentrations and fluorescence at the ocean surface to assess the concentration and health of photosynthesizing organisms like phytoplankton. Such measurements indicate how much carbon is taken up by ocean biology. MODIS also measures particulate organic carbon and particulate inorganic carbon, which can be used to gauge how much carbon the ocean exchanges with the atmosphere directly. See The Ocean’s Carbon Balance on the Earth Observatory.",
        subtitle5:'Land vegetation',
        details_5: "MISR collects data on the general height and structure of broad areas of vegetation (the canopy structure), the area covered by photosynthesizing leaves, and the amount of energy absorbed by leaves. Such measurements provide insight into carbon flux. MODIS collects a variety of measurements that indicate how much plants are growing, including vegetation indices, leaf area index, primary productivity, and evapotranspiration. See Measuring Vegetation on the Earth Observatory."
        
      };
    return (
        <div className="max-w-screen-xl mx-auto py-10 px-2">
      <div className="p-4 bg-green-950 text-white">
        <p className="text-xl font-normal text-green-500">{climate?.program}</p>
        <p className="text-2xl font-normal">{climate?.title}</p>
      </div>

     
      <p className="text-base text-justify mt-2">{climate?.details_1}</p>
      <p className="text-base text-justify mt-2">{climate?.details_2}</p>

    

      <p className="text-xl mt-3 font-bold">{climate?.subtitle3}</p>

      <p className="text-base text-justify mt-2">{climate?.details_3}</p>

      <p className="text-xl mt-10 font-bold">{climate?.subtitle4}</p>

      <p className="text-base text-justify mt-2">{climate?.details_4}</p>

      <p className="text-xl mt-10 font-bold">{climate?.subtitle5}</p>

      <p className="text-base text-justify mt-2">{climate?.details_5}</p>
    </div>
    );
};

export default CarbonCycleandEcosystems;