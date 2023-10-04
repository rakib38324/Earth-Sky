
import { useEffect, useState } from 'react';
import background from '../../assets/nasa4.jpg'
import toast from 'react-hot-toast';
import SmallLoading from '../../Common/SmallLoading/SmallLoading';


const Analysis = () => {

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [buttonActive, setButtonActive] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [index, setIndex] = useState('');
    const [dateWithData, setDateWithData] = useState([]);
    console.log(error);


    console.log(dateWithData)
    let dayLength = endDate.slice(8, 10) - startDate.slice(8, 10);
    
    if (startDate && endDate && buttonActive === false) {
        if (dayLength <= 7 && dayLength > 0) {
            setButtonActive(true)
        }
    }
    if (startDate && endDate && buttonActive === true) {
        if (dayLength > 7) {
            setButtonActive(false)
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

            fetch(`https://api.nasa.gov/planetary/apod?start_date=${startDate}&end_date=${endDate}&api_key=FtfiZfngOtmebhriKXOE6gsrt3lCqBr70jWnu57A`)

                .then((res) => {
                    if (!res.ok) {
                        toast.error('Network response was not ok!!!')
                        throw new Error('Network response was not ok');
                    }
                    return res.json();
                })
                .then((data) => {
                    console.log("data: ", data);
                    setDateWithData(data)
                    setLoading(false);
                    toast.success("Found Data Successfully!!!!")
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                    setLoading(false);
                    setError(error.message); // Set the error state
                });
        }


    }


    const handleDownload = (data, name) => {
        if (data) {
            // Create a Blob object with the JSON data and a link to trigger the download
            const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${name}.json`; // Specify the filename for the downloaded file
            a.click();
            URL.revokeObjectURL(url);
            toast.success("Download Completed!!!")
        }
    };


    useEffect(() => {
        if (!startDate && !endDate) {
            setLoading(true);
            setError(null);

            fetch(`https://api.nasa.gov/planetary/apod?start_date=2023-01-01&end_date=2023-01-05&api_key=FtfiZfngOtmebhriKXOE6gsrt3lCqBr70jWnu57A`)

                .then((res) => {
                    if (!res.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return res.json();
                })
                .then((data) => {
                    console.log("data: ", data);
                    setDateWithData(data)
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                    setLoading(false);
                    setError(error.message); // Set the error state
                });
        }
    }, [startDate,endDate])

    return (
        <div style={{ background: `url(${background})` }}
            className="relative h-content !bg-no-repeat !bg-center !bg-cover"
        >
            <section className='max-w-screen-xl mx-auto py-20'>

                <div className='bg-black px-10 opacity-90 rounded-t-3xl py-10'>

                    <p className='text-4xl font-bold text-white'>Data Analysis</p>

                    <p className='mt-10 text-2xl font-bold text-white'>APOD</p>
                    <p className='my-5 text-lg text-white text-justify'>One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video. This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other applications. In addition, if the concept_tags parameter is set to True, then keywords derived from the image explanation are returned. These keywords could be used as auto-generated hashtags for twitter or instagram feeds; but generally help with discoverability of relevant imagery.</p>




                    <form onSubmit={handleFetchData} className='md:flex justify-center gap-2'>
                        <div className="mb-4 md:flex gap-2">

                            <div>
                                <p className='text-lg font-semibold my-2 text-white'>Start Date</p>
                                <input
                                    type="date"
                                    id="date"
                                    name='start'
                                    value={startDate}
                                    onChange={handleChange1}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div>
                                <p className='text-lg font-semibold my-2 text-white'>End Date</p>
                                <input
                                    type="date"
                                    id="date"
                                    name='end'
                                    value={endDate}
                                    onChange={handleChange2}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>

                        </div>
                        {
                            buttonActive === true ?
                                <div className="mb-4 my-auto">
                                    <button

                                        type="submit"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        Submit
                                    </button>
                                </div>
                                :
                                <div className="mb-4 my-auto">
                                    <button

                                        className="bg-blue-300 disabled  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        Submit
                                    </button>
                                </div>

                        }
                    </form>

                    {
                        loading === true ?
                            <p className='flex flex-col justify-end items-center'>
                                <SmallLoading></SmallLoading>
                            </p>
                            :
                            dateWithData?.length > 0 ?
                                <div>
                                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                                        {
                                            dateWithData?.length && dateWithData?.map((element, index) =>
                                                <div onClick={() => setIndex(index)} key={index} className='text-white bg-gray-700 md:h-[650px] lg:h-[700px] relative rounded-lg'>
                                                    <img className='h-3/5 mx-auto rounded-lg' src={element?.url}></img>
                                                    <div className='px-2'>
                                                        <p className='text-lg font-bold mt-4'>{element?.title}</p>
                                                        <p className='text-lg font-bold mt-4'>{element?.date}</p>
                                                        <p className='text-lg my-4'>Version: {element?.service_version}</p>
                                                        <p className='hidden lg:block text-lg text-justify'>{element?.explanation?.length > 100 && element?.explanation?.slice(0, 80) + ("...") || element?.explanation}</p>
                                                        <p className='lg:hidden text-base text-justify'>{element?.explanation?.length > 50 && element?.explanation?.slice(0, 35) + ("...") || element?.explanation}</p>
                                                    </div>


                                                    <p onClick={() => document.getElementById('my_modal_4').showModal()} className=' p-3 bg-blue-500 hover:bg-green-600 cursor-pointer rounded-lg text-center font-semibold text-white hover:font-bold absolute bottom-0 w-full' >
                                                        Read More
                                                    </p>

                                                </div>

                                            )
                                        }
                                    </div>
                                    {
                                        dateWithData?.length > 0 &&

                                        <div onClick={() => handleDownload(dateWithData, `APOD`)} className='flex justify-center'>
                                            <button className='p-2 px-4 font-semibold hover:bg-green-400 bg-blue-300 text-lg my-10 rounded-lg'>Download All Data {startDate} to {endDate}</button>
                                        </div>
                                    }
                                </div>
                                :
                                dateWithData?.length === 0 &&
                                <div className='flex flex-col justify-center items-center py-20'>
                                    <p className='text-center text-3xl  text-white font-semibold'>No Data Found <br /> Please put the valid date...</p>


                                </div>

                    }
                </div>

            </section>





















            {/* You can open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_4" className="modal">
                <div className="modal-box md:w-11/12 max-w-5xl">

                    <img className='rounded-xl' src={dateWithData?.[index]?.hdurl}></img>
                    <h3 className="font-bold text-2xl my-5">CopyRight: {dateWithData?.[index]?.copyright}</h3>
                    <p className="text-base  my-2">Date: {dateWithData?.[index]?.date}</p>
                    <p className="text-base  my-2">Media Type: {dateWithData?.[index]?.media_type}</p>
                    <p className="text-base  my-2">Title: {dateWithData?.[index]?.title}</p>
                    <p className="text-base  mt-5">{dateWithData?.[index]?.explanation}</p>



                    <div onClick={() => handleDownload(dateWithData?.[index], `${dateWithData?.[index]?.date}`)} className='flex justify-center'>
                        <button className='p-2 px-4 font-semibold hover:bg-green-400 bg-blue-300 text-lg my-5 rounded-lg'>Download </button>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Analysis;