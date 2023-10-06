import { useEffect, useState } from "react";
import background from "../../assets/nasa4.jpg";
import toast from "react-hot-toast";
import SmallLoading from "../../Common/SmallLoading/SmallLoading";

const Analysis = () => {
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

  console.log(Articel);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [buttonActive, setButtonActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState("");
  const [index2, setIndex2] = useState("");
  const [dateWithData, setDateWithData] = useState([]);
  console.log(error);

  console.log(dateWithData);
  let dayLength = endDate.slice(8, 10) - startDate.slice(8, 10);

  if (startDate && endDate && buttonActive === false) {
    if (dayLength <= 7 && dayLength > 0) {
      setButtonActive(true);
    }
  }
  if (startDate && endDate && buttonActive === true) {
    if (dayLength > 7) {
      setButtonActive(false);
    }
  }

  const handleChange1 = (e) => {
    setStartDate(e.target.value);
  };
  const handleChange2 = (e) => {
    setEndDate(e.target.value);
  };

  const handleFetchData = (e) => {
    setLoading(true);
    e.preventDefault();
    setStartDate(startDate);
    setEndDate(endDate);
    setError(null); // Reset any previous errors

    if (startDate && endDate) {
      setLoading(true);
      setError(null);

      fetch(
        `https://api.nasa.gov/planetary/apod?start_date=${startDate}&end_date=${endDate}&api_key=FtfiZfngOtmebhriKXOE6gsrt3lCqBr70jWnu57A`
      )
        .then((res) => {
          if (!res.ok) {
            toast.error("Please try again. Network does not response.");
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => {
          console.log("data: ", data);
          setDateWithData(data);
          setLoading(false);
          toast.success("Found Data Successfully!!!!");
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
          setError(error.message); // Set the error state
        });
    }
  };

  const handleDownload = (data, name) => {
    if (data) {
      // Create a Blob object with the JSON data and a link to trigger the download
      const blob = new Blob([JSON.stringify(data)], {
        type: "application/json",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${name}.json`; // Specify the filename for the downloaded file
      a.click();
      URL.revokeObjectURL(url);
      toast.success("Download Completed!!!");
    }
  };

  // const [selectedDate, setSelectedDate] = useState(new Date());
 // Get the current date
const currentDate = new Date();

// Calculate the date 5 days in the future
const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() - 5);

// Format the dates as strings (in "YYYY-MM-DD" format)
const currentDateString = formatDate(currentDate);
const futureDateString = formatDate(futureDate);

console.log("Current Date:", currentDateString);
console.log("Future Date (5 days from now):", futureDateString);

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

  useEffect(() => {
    
    if (!startDate && !endDate) {
      setLoading(true);
      setError(null);

      fetch(
        `https://api.nasa.gov/planetary/apod?start_date=${futureDateString}&end_date=${currentDateString}&api_key=FtfiZfngOtmebhriKXOE6gsrt3lCqBr70jWnu57A`
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => {
          console.log("data: ", data);
          setDateWithData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
          setError(error.message); // Set the error state
        });
    }
  }, [startDate, endDate,currentDateString,futureDateString]);

  
  return (
    <div
      style={{ background: `url(${background})` }}
      className="relative h-content !bg-no-repeat !bg-center !bg-cover"
    >
      <section className="max-w-screen-xl mx-auto py-20">


        <div className="bg-white px-10 opacity-90 rounded-lg py-10 mb-1">
          <p className="text-4xl font-bold text-white">Education</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 mt-5 rounded-md">
            {
            Articel.map((art,index) => (
              <div 
                onClick={()=> setIndex2(index)}
               key={art.ID} 
               className="cursor-pointer p-2">
                <img
                  className=" h-[300px] rounded-md"
                  src={`${art?.image}`}
                  alt="logo"
                />
                <div onClick={() =>
                document.getElementById("my_modal_5").showModal() 
                
              }>
                <p className="text-base text-justify font-bold">{art?.title}</p>
                <p className="text-justify mt-2">{art?.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>




        <div className="bg-gray-600 px-10 opacity-90 rounded-lg py-10">
          <p className="mt-10 text-2xl font-bold text-white">APOD</p>
          <p className="my-5 text-lg text-white text-justify">
            One of the most popular websites at NASA is the Astronomy Picture of
            the Day. In fact, this website is one of the most popular websites
            across all federal agencies. It has the popular appeal of a Justin
            Bieber video. This endpoint structures the APOD imagery and
            associated metadata so that it can be repurposed for other
            applications. In addition, if the concept_tags parameter is set to
            True, then keywords derived from the image explanation are returned.
            These keywords could be used as auto-generated hashtags for twitter
            or instagram feeds; but generally help with discoverability of
            relevant imagery.
          </p>

          <p className='text-xl text-center font-bold text-white'>Please Select Date. <br />Max 7 Days***</p>
          <form
            onSubmit={handleFetchData}
            className="md:flex justify-center gap-2"
          >
            <div className="mb-4 md:flex gap-2">
              <div>
                <p className="text-lg font-semibold my-2 text-white">
                  Start Date
                </p>
                <input
                  type="date"
                  id="date"
                  name="start"
                  value={startDate}
                  onChange={handleChange1}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div>
                <p className="text-lg font-semibold my-2 text-white">
                  End Date
                </p>
                <input
                  type="date"
                  id="date"
                  name="end"
                  value={endDate}
                  onChange={handleChange2}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
            </div>
            {buttonActive === true ? (
              <div className="mb-4 my-auto">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            ) : (
              <div className="mb-4 my-auto">
                <p className="bg-blue-300 disabled  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Submit
                </p>
              </div>
            )}
          </form>

          {loading === true ? (
            <p className="flex flex-col justify-end items-center">
              <SmallLoading></SmallLoading>
            </p>
          ) : dateWithData?.length > 0 ? (
            <div>
              <p className="text-center text-3xl text-white my-20 font-bold">{startDate} Astronomy Picture to {endDate}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {dateWithData?.length &&
                  dateWithData?.map((element, index) => (
                    <div
                      onClick={() => setIndex(index)}
                      key={index}
                      className="text-white bg-gray-700 md:h-[650px] lg:h-[560px] relative rounded-lg"
                    >
                      <img
                        className="w-full h-1/2 mx-auto rounded-lg"
                        src={element?.url}
                      ></img>
                      <div className="px-2">
                        <p className="text-lg font-bold mt-4">
                          {element?.title}
                        </p>
                        <p className="text-lg font-bold mt-4">
                          {element?.date}
                        </p>
                        <p className="text-lg my-4">
                          Version: {element?.service_version}
                        </p>
                        <p className="hidden lg:block text-lg text-justify">
                          {(element?.explanation?.length > 100 &&
                            element?.explanation?.slice(0, 80) + "...") ||
                            element?.explanation}
                        </p>
                        <p className="lg:hidden text-base text-justify">
                          {(element?.explanation?.length > 50 &&
                            element?.explanation?.slice(0, 35) + "...") ||
                            element?.explanation}
                        </p>
                      </div>

                      <p
                        onClick={() =>
                          document.getElementById("my_modal_4").showModal()
                        }
                        className=" p-3 bg-blue-500 hover:bg-green-600 cursor-pointer rounded-lg text-center font-semibold text-white hover:font-bold absolute bottom-0 w-full"
                      >
                        Read More
                      </p>
                    </div>
                  ))}
              </div>
              {dateWithData?.length > 0 && startDate && (
                <div
                  onClick={() => handleDownload(dateWithData, `APOD`)}
                  className="flex justify-center"
                >
                  <button className="p-2 px-4 font-semibold hover:bg-green-400 bg-blue-300 text-lg my-10 rounded-lg">
                    Download All Data {startDate} to {endDate}
                  </button>
                </div>
              )}
            </div>
          ) : (
            dateWithData?.length === 0 && (
              <div className="flex flex-col justify-center items-center py-20">
                <p className="text-center text-3xl  text-white font-semibold">
                  No Data Found <br /> Please put the valid date...
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_4" className="modal">
        <div className="modal-box md:w-11/12 max-w-5xl">
          <img className="rounded-xl" src={dateWithData?.[index]?.hdurl}></img>
          <h3 className="font-bold text-2xl my-5">
            CopyRight: {dateWithData?.[index]?.copyright}
          </h3>
          <p className="text-base font-semibold  my-2">
            Date: {dateWithData?.[index]?.date}
          </p>
          <p className="text-base font-semibold my-2">
            Media Type: {dateWithData?.[index]?.media_type}
          </p>
          <p className="text-base font-semibold my-2">
            Title: {dateWithData?.[index]?.title}
          </p>
          <p className="text-base  mt-5 text-justify">
            {dateWithData?.[index]?.explanation}
          </p>

          <div
            onClick={() =>
              handleDownload(
                dateWithData?.[index],
                `${dateWithData?.[index]?.date}`
              )
            }
            className="flex justify-center"
          >
            <button className="p-2 px-4 font-semibold hover:bg-green-400 bg-blue-300 text-lg my-5 rounded-lg">
              Download{" "}
            </button>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={()=> setIndex('')} className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>





      <dialog id="my_modal_5" className="modal">
        <div className="modal-box md:w-8/12 max-w-5xl">
          <img className="rounded-xl mx-auto" src={Articel?.[index2]?.image}></img>
          <h3 className="font-bold text-2xl my-5">
            {Articel?.[index2]?.title}
          </h3>
          <p className="text-base font-semibold  my-2">
          {Articel?.[index2]?.subtitle}
          </p>
          <p className="text-base ">
            Audience: {Articel?.[index2]?.audience}
          </p>
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
              <button onClick={()=>setIndex2('')} className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Analysis;
