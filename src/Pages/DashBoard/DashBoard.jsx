/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import background from "../../assets/nasa3.png";
import Loading from "../../Common/Loading/Loading";
import { Link } from "react-router-dom";
import { FaCloudDownloadAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const DashBoard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [submittedDate, setSubmittedDate] = useState("2022-10-01");
  const [defaultDate, setDefaultDate] = useState("2022-10-01");
  const [index2, setIndex2] = useState("");
  console.log(error);
  // console.log('last2',submittedDate)
  const handleChange = (e) => {
    setSelectedDate(e.target.value);
  };
  const Articel = [
    {
      ID: 1,
      title:
        "Joint Polar Satellite System STEM Activity: JPSS-2 Paper Spacecraft",
      subtitle:
        "Put your engineering skills to the test by assembling a paper model of JPSS-2 using simple household supplies like tape and glue.",
      audience: "Educators, Students",
      grade_level: "Grades 5-8, Grades 9-12, Informal Education",
      subject:
        "Earth Science, Engineering Design, Technology, Weather and Climate, Satellites",
      type: "Hands-on Activities, Lesson Plans / Activities",
      details:
        "NOAA and NASA’s Joint Polar Satellite System (JPSS) is a series of polar-orbiting environmental satellites. Put your engineering skills to the test by assembling a paper model of JPSS-2 using simple household supplies like tape and glue. Learn more about the JPSS-2 satellite as you fold and attach its components. The step-by-step instructions will help you build the Advanced Technology Microwave Sounder (ATMS), the Cross-Track Infrared Sounder (CrIS), the Visible Infrared Imaging Radiometer Suite (VIIRS), the Ozone Mapping and Profiler Suite (OMPS), the solar panel, the main bus and a stand for displaying your creation.",
      image:
        "https://www.nasa.gov/wp-content/uploads/2023/09/jpss-papermodel.jpg?w=640",
    },

    {
      ID: 2,
      title:
        "Joint Polar Satellite System STEM Activity: Exploring Groundwater",
      subtitle:
        "In this activity, students will experiment with the conditions that affect how much groundwater certain types of soil can absorb",
      audience: "Educators",
      grade_level: "Grades 5-8, Grades 9-12, Informal Education",
      subject: "Earth Science, Geology, Weather and Climate",
      type: "Hands-on Activities, Lesson Plans / Activities, Play and Learn",
      details:
        "Earth-observing satellites like the Joint Polar Satellite System (JPSS) help scientists measure land surface temperature, soil moisture, and precipitation daily – important data for farmers and home gardeners. In this activity, students will experiment with the conditions that affect how much groundwater certain types of soil can absorb. Groundwater is water that is stored in the tiny spaces, called pores that are found in rock. The type of the rock dictates how much water can be stored due to the porosity and permeability of the rock. Porosity is the percentage of the total volume of rock or sediment that consists of pore spaces or open holes. Permeability is the ability of a material to transmit fluid.",
      image:
        "https://www.nasa.gov/wp-content/uploads/2023/08/ground-infiltration.jpg?resize=1024,576",
    },
    {
      ID: 3,
      title: "WeatherSats AR App",
      subtitle:
        "Learn about satellites that monitor extreme weather and climate change with this augmented reality app.",
      audience: "Educators",
      grade_level:
        "Earth Science, Technology, Weather and Climate, Remote Sensing, Satellites",
      subject: "Earth Science, Geology, Weather and Climate",
      type: "Mobile Apps",
      details:
        "Learn about the satellites that monitor extreme weather and climate change in this immersive Augmented Reality (AR) app. Users are challenged to complete a series of missions, which start with an interactive journey into space to see the satellites orbiting Earth and view their instruments up close. See how the satellite instruments work, how they transmit data from space to a system of ground stations on Earth, and end with a personalized weather forecast. Learn about the electromagnetic spectrum and how the satellites see. And explore the powerful weather events and dazzling weather phenomena that they observe across our planet.",
      image:
        "https://www.nasa.gov/wp-content/uploads/2023/01/tdrs-2nd-generation.png",
    },
    {
      ID: 4,
      title: "Sea Level Height Data Set",
      subtitle:
        "This Sea Level Height data set records global mean sea level (GMSL) change since 1993, as observed by satellites.",
      audience: "Educators",
      grade_level:
        "Earth Science, Technology, Weather and Climate, Remote Sensing, Satellites",
      subject: "Earth Science, Geology, Weather and Climate",
      type: "Data Sets",
      details:
        "This Sea Level Height data set records global mean sea level (GMSL) change since 1993, as observed by satellites. GMSL is the average height of the entire ocean surface and is an important climate indicator. GMSL rise is caused primarily by two factors: added water from melting land-based ice sheets and glaciers, and the thermal expansion of seawater as it warms. Global sea levels have been rising for decades in response to a warming climate, and that rise appears to be accelerating.",
      image:
        "https://www.nasa.gov/wp-content/uploads/2023/06/121629main-nsusl-high.jpg?resize=1024,748",
    },
  ];

  // console.log(defaultDate)

  useEffect(() => {
    setLoading(true);
    setError(null); // Reset any previous errors

    fetch(
      `https://api.nasa.gov/EPIC/api/natural/date/${defaultDate}?api_key=FtfiZfngOtmebhriKXOE6gsrt3lCqBr70jWnu57A`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network was not response...");
        }
        return res.json();
      })
      .then((data) => {
        console.log("defoult data: ", data);
        setData(data);
        toast.success("Data found successfully...");
        setLoading(false);
        setDefaultDate("");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);

        setError(error.message); // Set the error state
      });
  }, [defaultDate]);

  const singleData = data?.[count];
  let arrayLength = data?.length;

  const handleImages = (date, image) => {
    setLoading(true);
    let imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${date.slice(
      0,
      4
    )}/${date.slice(5, 7)}/${date.slice(8, 10)}/png/${image}.png`;
    setImgUrl(imageUrl);
    setLoading(false);
  };

  console.log("last function22222", submittedDate);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(selectedDate);
    setSubmittedDate(selectedDate);

    fetch(
      `https://api.nasa.gov/EPIC/api/natural/date/${selectedDate}?api_key=FtfiZfngOtmebhriKXOE6gsrt3lCqBr70jWnu57A`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network was not response...");
        }
        return res.json();
      })
      .then((data) => {
        console.log("data: ", data);
        setData(data);
        toast.success("Data found successfully...", data?.length);
        setLoading(false);
      })
      .catch((error) => {
        // console.error("Error fetching data:", error);
        toast.error("Newtwork error, please try again");
        setLoading(false);
        setError(error.message); // Set the error state
      });
  };

  const handleDownload = () => {
    if (data) {
      // Create a Blob object with the JSON data and a link to trigger the download
      const blob = new Blob([JSON.stringify(data)], {
        type: "application/json",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "NASAs_EPIC.json"; // Specify the filename for the downloaded file
      a.click();
      URL.revokeObjectURL(url);
      toast.success("Download Completed!!!");
    }
  };
  return (
    <div
      style={{ background: `url(${background})` }}
      className="relative h-full !bg-no-repeat !bg-center !bg-cover"
    >
      <section className="max-w-screen-xl mx-auto py-20">
        <div className="bg-black px-10 opacity-90 rounded-t-3xl border-b-[1px] border-das">
          <p className="text-4xl font-semibold py-2 text-white pt-10">
            Earth Data
          </p>

          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-8">
              <div className="md:flex gap-4 text-blue-600 py-5">
                <p className="hover:font-semibold cursor-pointer">EOSDIS</p>
                <p className="hidden md:block border-[1px]"></p>
                <p className="hover:font-semibold cursor-pointer">
                  EOSDIS Worldview
                </p>
                <p className="hidden md:block border-[1px]"></p>
                <p className="hover:font-semibold cursor-pointer">
                  Nasa Earth Observatory
                </p>
              </div>

              <p className="text-justify text-white">
                Earth observations are freely accessible to all, including
                NASA's many partners in the U.S. and international organizations
                and governments, disaster-relief agencies worldwide, scientists
                from academia and the private sector, business, the military,
                and the general public.
              </p>
              <br />
              <p className="text-justify text-white">
                These partners rely on NASA's expertise in developing and
                launching missions, analyzing the data, and calibrating and
                validating results to ensure that the information is accurate.
              </p>

              <p className="text-center cursor-pointer font-semibold py-5 text-white">
                See more
              </p>
            </div>

            <div className="md:col-span-4">
              <p className="text-2xl font-semibold border-b-[1px] border-dashed py-1 text-white">
                Earth Science Focus Areas{" "}
              </p>

              <p className="text-blue-600 cursor-pointer hover:font-semibold">
                <span className="text-green-600 text-2xl">›</span> Atmospheric
                Composition
              </p>
              <p className="text-blue-600 cursor-pointer hover:font-semibold">
                <span className="text-green-600 text-2xl">›</span> Weather and
                Atmospheric Dynamics{" "}
              </p>
              <p className="text-blue-600 cursor-pointer hover:font-semibold">
                <span className="text-green-600 text-2xl">›</span> Climate
                Variability and Change
              </p>
              <p className="text-blue-600 cursor-pointer hover:font-semibold">
                <span className="text-green-600 text-2xl">›</span> Water and
                Energy Cycle
              </p>
              <p className="text-blue-600 cursor-pointer hover:font-semibold">
                <span className="text-green-600 text-2xl">›</span> Carbon Cycle
                and Ecosystems
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black py-20 opacity-90  border-b-[1px] border-das">
          <div>
            <p className="text-4xl font-semibold py-2 text-white pt-10 pl-10">
              EPIC
            </p>

            <p className="text-white pl-10 pr-4 text-justify">
              The EPIC API provides information on the daily imagery collected
              by DSCOVR's Earth Polychromatic Imaging Camera (EPIC) instrument.
              Uniquely positioned at the Earth-Sun Lagrange point, EPIC provides
              full disc imagery of the Earth and captures unique perspectives of
              certain astronomical events such as lunar transits using a
              2048x2048 pixel CCD (Charge Coupled Device) detector coupled to a
              30-cm aperture Cassegrain telescope.
            </p>
            <br />
            <p className="text-white pl-10 pr-4 text-justify">
              Image metadata and key information are provided by the JSON API
              and can be requested by date and for the most recent available
              date. A listing of all available dates can also be retrieved via
              the API for more granular control.
            </p>
          </div>
          {loading === true ? (
            <Loading></Loading>
          ) : data.length > 0 ? (
            <div className="grid lg:grid-cols-12 bg-black">
              <div className=" lg:col-span-3 border-2 border-black bg-gray-600 shadow-lg shadow-slate-800 rounded-lg m-5">
                <p className="font-bold text-2xl p-2 bg-gray-300 rounded-lg text-center">
                  Image Information
                </p>

                <Link
                  target="_blank"
                  className="flex justify-between"
                  to={`https://epic.gsfc.nasa.gov/archive/natural/${singleData?.date.slice(
                    0,
                    4
                  )}/${singleData?.date.slice(5, 7)}/${singleData?.date.slice(
                    8,
                    10
                  )}/png/${singleData?.image}.png`}
                >
                  <p className="my-4 pl-3 text-lg text-green-500 font-semibold hover:font-bold">
                    {singleData?.image}
                  </p>
                  <FaCloudDownloadAlt className="text-green-600 my-auto text-2xl"></FaCloudDownloadAlt>
                </Link>
                <p className="text-white my-4 pl-3 text-lg">
                  Processing Version:{" "}
                  <span className="font-bold">{singleData?.version}</span>
                </p>
                <p className="text-white my-4 pl-3 text-lg">
                  lat: {singleData?.centroid_coordinates?.lat}
                </p>
                <p className="text-white my-4 pl-3 text-lg">
                  lon: {singleData?.centroid_coordinates?.lon}
                </p>
                <p className="text-white my-4 pl-3 text-lg">
                  Date: {singleData?.date.slice(0, 10)}
                </p>
                <p className="text-white my-4 pl-3 text-lg">
                  Showing: {count + 1} of {arrayLength}.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-50 font-bold mb-2"
                      htmlFor="date"
                    >
                      Select a Date:
                    </label>
                    <input
                      type="date"
                      id="date"
                      value={selectedDate}
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Submit
                    </button>
                  </div>
                </form>

                <div
                  onClick={handleDownload}
                  className="cursor-pointer flex justify-around mt-10 p-2 bg-blue-400 hover:bg-blue-600  text-black hover:text-white rounded-md"
                >
                  <p className="font-semibold ">Download all Info.</p>
                  <FaCloudDownloadAlt className=" my-auto text-2xl"></FaCloudDownloadAlt>
                </div>
              </div>
              <div className="lg:col-span-9">
                <div className="carousel w-full">
                  {loading === true ? (
                    <Loading></Loading>
                  ) : data ? (
                    <div className="carousel-item relative w-full">
                      {imgUrl ? (
                        <img
                          className="w-2/3 mx-auto"
                          src={imgUrl}
                          alt="World"
                        />
                      ) : (
                        <img
                          className="w-2/3 mx-auto"
                          src={`https://epic.gsfc.nasa.gov/archive/natural/${singleData?.date.slice(
                            0,
                            4
                          )}/${singleData?.date.slice(
                            5,
                            7
                          )}/${singleData?.date.slice(8, 10)}/png/${
                            singleData?.image
                          }.png`}
                        />
                      )}
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <p
                          onClick={() =>
                            handleImages(singleData?.date, singleData?.image)
                          }
                        >
                          <p
                            onClick={() =>
                              count === 0
                                ? setCount(arrayLength - 1)
                                : setCount(count - 1)
                            }
                            className="btn btn-circle"
                          >
                            ❮
                          </p>
                        </p>

                        <p
                          onClick={() =>
                            handleImages(singleData?.date, singleData?.image)
                          }
                        >
                          <p
                            onClick={() =>
                              count === arrayLength - 1
                                ? setCount(0)
                                : setCount(count + 1)
                            }
                            className="btn btn-circle"
                          >
                            ❯
                          </p>
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="carousel-item relative w-full">
                      {imgUrl ? (
                        <img
                          className="w-2/3 mx-auto"
                          src={imgUrl}
                          alt="World"
                        />
                      ) : (
                        <img
                          className="w-2/3 mx-auto"
                          src={`https://epic.gsfc.nasa.gov/archive/natural/${singleData?.date.slice(
                            0,
                            4
                          )}/${singleData?.date.slice(
                            5,
                            7
                          )}/${singleData?.date.slice(8, 10)}/png/${
                            singleData?.image
                          }.png`}
                        />
                      )}
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <p
                          onClick={() =>
                            handleImages(singleData?.date, singleData?.image)
                          }
                        >
                          <p
                            onClick={() =>
                              count === 0
                                ? setCount(arrayLength - 1)
                                : setCount(count - 1)
                            }
                            className="btn btn-circle"
                          >
                            ❮
                          </p>
                        </p>

                        <p
                          onClick={() =>
                            handleImages(singleData?.date, singleData?.image)
                          }
                        >
                          <p
                            onClick={() =>
                              count === arrayLength - 1
                                ? setCount(0)
                                : setCount(count + 1)
                            }
                            className="btn btn-circle"
                          >
                            ❯
                          </p>
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center py-20">
              <p className="text-center text-3xl  text-white font-semibold">
                No Data Found <br /> Please put the valid date...
              </p>

              <button
                onClick={() => setDefaultDate("2022-10-01")}
                className="text-xl bg-green-500 p-3 font-bold text-white rounded  mt-10"
              >
                Previous Page
              </button>
            </div>
          )}
        </div>

        <div className="bg-black py-20 opacity-90 rounded-b-3xl">
        <p className="text-4xl font-semibold py-2 text-white pt-10 pl-10">
              Article
            </p>
          <div className="grid lg:grid-cols-4 mt-5 gap-2 rounded-md">
            {Articel.map((art, index) => (
              <div
                onClick={() => setIndex2(index)}
                key={art.ID}
                className="cursor-pointer p-2 bg-white rounded-xl"
              >
                <img
                  className=" h-[300px] mx-auto rounded-md"
                  src={`${art?.image}`}
                  alt="logo"
                />
                <div
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                >
                  <p className="text-base text-justify font-bold">
                    {art?.title}
                  </p>
                  <p className="text-justify mt-2">{art?.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <dialog id="my_modal_5" className="modal">
        <div className="modal-box md:w-8/12 max-w-5xl">
          <img
            className="rounded-xl mx-auto"
            src={Articel?.[index2]?.image}
          ></img>
          <h3 className="font-bold text-2xl my-5">
            {Articel?.[index2]?.title}
          </h3>
          <p className="text-base font-semibold  my-2">
            {Articel?.[index2]?.subtitle}
          </p>
          <p className="text-base ">Audience: {Articel?.[index2]?.audience}</p>
          <p className="text-base ">
            Grade Level: {Articel?.[index2]?.grade_level}
          </p>
          <p className="text-base  text-justify">
            Subject: {Articel?.[index2]?.subject}
          </p>
          <p className="text-base font-semibold mt-5 text-justify">
            Type: {Articel?.[index2]?.type}
          </p>
          <p className="text-base  mt-5 text-justify">
            {Articel?.[index2]?.details}
          </p>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={() => setIndex2(0)} className="btn">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DashBoard;
