/* eslint-disable no-prototype-builtins */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import background from '../../assets/nasa4.jpg'
import Loading from '../../Common/Loading/Loading';
import toast from 'react-hot-toast';


const DataAssets = () => {


    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const [dateWithData, setDateWithData] = useState([]);
    const [singleData, setSingleData] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [buttonActive, setButtonActive] = useState(false);
    const [buttonDate, setButtonDate] = useState('');
    console.log(error)
 


    let closeApproachLength = singleData?.close_approach_data?.length
    let dayLength = endDate.slice(8, 10) - startDate.slice(8, 10);

    let dateArray = [];
    for (const key in dateWithData.near_earth_objects) {
        if (dateWithData.near_earth_objects.hasOwnProperty(key)) {

            dateArray.push(key)
        }
    }



    if (startDate && endDate && buttonActive === false) {
        if (dayLength <= 7) {
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
    
            fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&detailed=false&api_key=FtfiZfngOtmebhriKXOE6gsrt3lCqBr70jWnu57A`)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return res.json();
                })
                .then((data) => {
                    // console.log("data: ", data);
                    setDateWithData(data)
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                    setLoading(false);
                    setError(error.message); // Set the error state
                });
        }



    }



    useEffect(() => {

        setLoading(true);
        setError(null); // Reset any previous errors

        fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?page=0&size=10&api_key=FtfiZfngOtmebhriKXOE6gsrt3lCqBr70jWnu57A`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                // console.log("data: ", data);
                setData(data)
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
                setError(error.message); // Set the error state
            });
    }, [])


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


    const handleSingleData = (link) => {
        console.log('click', link)
        setLoading(true);
        setError(null); // Reset any previous errors

        fetch(link)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                // console.log("data: ", data);
                setSingleData(data)
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
                setError(error.message); // Set the error state
            });
    }



 
    return (
        <div style={{ background: `url(${background})` }}
            className="relative h-content !bg-no-repeat !bg-center !bg-cover "
        >

            <section className='max-w-screen-xl mx-auto py-20 '>
                <div className='bg-gray-900 py-20 px-10 opacity-90 rounded-3xl'>

                    <p className='text-4xl font-bold text-white'>Data Set</p>

                    <p className='mt-10 text-2xl font-bold text-white'>Asteroids - NeoWs</p>
                    <p className='my-5 text-lg text-white'>NeoWs (Near Earth Object Web Service) is a RESTful web service for near earth Asteroid information. With NeoWs a user can: search for Asteroids based on their closest approach date to Earth, lookup a specific Asteroid with its NASA JPL small body id, as well as browse the overall data-set.</p>

                    <p className='text-xl text-center font-bold text-red-500'>Please Select Date. <br />Max 7 Days***</p>
                    <form onSubmit={handleFetchData} className='flex justify-center gap-2'>
                        <div className="mb-4 flex gap-2">

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
                                    <p

                                        className="bg-blue-300 disabled  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        Submit
                                    </p>
                                </div>

                        }
                    </form>


                    {
                        loading === true ?
                            <Loading></Loading>
                            :
                            dateArray?.length > 0 ?

                                <div className='my-10'>

                                    <div className=' grid md:grid-cols-3 gap-4 w-2/3 mx-auto'>
                                        {dateArray?.map((element, index) =>
                                            <div key={index} className='my-1 cursor-pointer rounded-lg hover:border-green-500 hover:bg-green-500'>

                                                <p onClick={() => setButtonDate(element)} className=' text-center text-xl font-semibold p-2 bg-green-300 rounded-lg'>{element}</p>

                                            </div>
                                        )}
                                    </div>


                                    {
                                        buttonDate ?
                                            <div>
                                                {
                                                    dateWithData.near_earth_objects?.[`${buttonDate}`]?.map((element, index) =>
                                                        <div onClick={() => handleSingleData(element?.links?.self)} key={element?.id} className='grid md:grid-cols-6 bg-blue-200 rounded-lg my-1 lg:w-2/3 mx-auto cursor-pointer hover:bg-green-300  '>

                                                            <div className='flex gap-2 md:col-span-2'>
                                                                <p className='pl-2 my-auto font-bold'>{index + 1}.</p>
                                                                <p className='p-2  font-semibold '>Date: {buttonDate}</p>
                                                            </div>
                                                            <p className='md:col-span-3 p-2  font-semibold '>Full Name: {element?.name}</p>

                                                            <button onClick={() => document.getElementById('my_modal_1').showModal()} className='md:col-span-1 p-2 text-center font-semibold text-blue-600 hover:font-bold' >
                                                                Find All Data
                                                            </button>

                                                        </div>)
                                                }
                                                <div onClick={() => handleDownload(dateWithData.near_earth_objects?.[`${buttonDate}`], `${buttonDate} Asteroids - NeoWs`)} className='flex justify-center'>
                                                    <button className='p-2 px-4 font-semibold hover:bg-green-400 bg-blue-300 text-lg my-10 rounded-lg'>Download All Data {startDate} to {endDate}</button>
                                                </div>
                                            </div>
                                            :
                                            <>
                                            </>
                                    }

                                </div>


                                :
                                <div>
                                    {
                                        data?.near_earth_objects?.length && data?.near_earth_objects?.map((element, index) =>
                                            <div onClick={() => handleSingleData(element?.links?.self)} key={element?.id} className='grid md:grid-cols-6 bg-blue-200 rounded-lg my-1 lg:w-2/3 mx-auto cursor-pointer hover:bg-green-300 hover:border-[1px] hover:border-green-600 '>

                                                <div className='flex gap-2 md:col-span-2'>
                                                    <p className='pl-2 my-auto font-bold'>{index + 1}.</p>
                                                    <p className='p-2  font-semibold '>Name: {element?.name_limited}</p>
                                                </div>
                                                <p className='md:col-span-3 p-2  font-semibold '>Full Name: {element?.name}</p>

                                                <button onClick={() => document.getElementById('my_modal_1').showModal()} className='md:col-span-1 p-2 text-center font-semibold text-blue-600 hover:font-bold' >
                                                    Find All Data
                                                </button>

                                            </div>)
                                    }
                                    <div onClick={() => handleDownload(data?.near_earth_objects, "Asteroids - NeoWs")} className='flex justify-center'>
                                        <button className='p-2 px-4 font-semibold hover:bg-green-400 bg-blue-300 text-lg my-10 rounded-lg'>Download All Data</button>
                                    </div>
                                </div>
                    }
                </div>

            </section>

















            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button> */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-2xl">{singleData?.name}</h3>
                    <p className="text-base  my-2"><span className='font-bold'>ID: </span>{singleData?.id}</p>
                    <p className="text-base  my-2"><span className='font-bold'>Total number of close_approach_data: </span>{closeApproachLength}</p>
                    <p className="text-base  my-2"><span className='font-bold'>nasa_jpl_url: </span>{singleData?.nasa_jpl_url}</p>
                    <p className="text-base  my-2"><span className='font-bold'>close approach date Start : </span>{singleData?.close_approach_data?.[0].close_approach_date}</p>
                    <p className="text-base  my-2"><span className='font-bold'>close approach date End : </span>{singleData?.close_approach_data?.[closeApproachLength - 1].close_approach_date}</p>


                    <div onClick={() => handleDownload(singleData, singleData.name)} className='flex justify-center'>
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

export default DataAssets;