const EOSDIS = () => {
  const EOSDIS = {
    id: 1,
    program: "ESDS Program",
    title: "Earth Observing System Data and Information System (EOSDIS)",
    subtitle: "An Overview of EOSDIS",
    details_1:
      "NASA's Earth Observing System Data and Information System (EOSDIS) is a key core capability in the Earth Science Data Systems (ESDS) Program. It provides end-to-end capabilities for managing NASA Earth science data from various sources—satellites, aircraft, field measurements, and various other programs. For the EOS satellite missions, EOSDIS provides capabilities for command and control, scheduling, data capture and initial (level 0) processing. These capabilities, constituting the EOSDIS Mission Operations, are managed by NASA's Earth Science Mission Operations (ESMO) Project. NASA network capabilities transport the data to the science operations facilities.",
    details_2:
      "The remaining capabilities of EOSDIS constitute the EOSDIS Science Operations, which are managed by NASA's Earth Science Data and Information System (ESDIS) Project. These capabilities include: generation of higher level (levels 1-4) science data products for EOS missions; archiving and distribution of data products from EOS and other satellite missions, as well as aircraft and field measurement campaigns. The EOSDIS science operations are performed within a distributed system of many interconnected nodes Science Investigator-led Processing Systems (SIPS), and distributed, discipline-specific, Earth science Distributed Active Archive Centers (DAACs) with specific responsibilities for production, archiving, and distribution of Earth science data products. The DAACs serve a large and diverse user community (as indicated by EOSDIS performance metrics) by providing capabilities to search and access science data products and specialized services.",
    image:
      "https://www.earthdata.nasa.gov/s3fs-public/imported/Earth_Science_Data_Operations_04292019.jpg?VersionId=z7tNnLu9mu5f2hk0MqXBXAj2.jACGRpF",
  };
  return (
    <div className="max-w-screen-xl mx-auto py-10 px-2">
      <div className="p-4 bg-green-950 text-white">
        <p className="text-2xl font-normal text-green-500">{EOSDIS?.program}</p>
        <p className="text-2xl font-normal">{EOSDIS?.title}</p>
      </div>

      <p className="text-3xl mt-14">{EOSDIS?.subtitle}</p>
      <p className="text-base text-justify mt-2">{EOSDIS?.details_1}</p>

      <img className="my-2" src={`${EOSDIS?.image}`}></img>
      <p className="text-base text-justify mt-2">{EOSDIS?.details_2}</p>
    </div>
  );
};

export default EOSDIS;
