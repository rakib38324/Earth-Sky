// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBoxes, FaChartBar, FaFileInvoice, FaGraduationCap, FaRegArrowAltCircleLeft } from "react-icons/fa";
import Navbar from "../../Common/Navbar/Navbar";


const MainLayout = () => {


  const [drawer, setDrawer] = useState(true);


  return (
    <div className="">

      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Navbar setDrawer={setDrawer}></Navbar>
          <Outlet />

        </div>
        {drawer === true &&
          <div className="drawer-side z-50">
            {/* <label htmlFor="my-drawer" className="drawer-overlay"></label> */}

            <ul className="menu p-4 w-80 min-h-full  text-base-content bg-gray-600">
              {/* Sidebar content here */}


              <div className="flex justify-between">
                <p className="text-2xl font-bold text-white">Earth SkyBridge</p>
                <label htmlFor="my-drawer" className="btn ">
                  <FaRegArrowAltCircleLeft onClick={() => setDrawer(false)} className=" text-4xl "></FaRegArrowAltCircleLeft>
                </label>
              </div>



              <Link to='/dashboard'>
                <label onClick={() => setDrawer(false)} className="flex justify-around text-white text-2xl border-2 p-2 bg-gray-500 rounded-xl cursor-pointer mt-10">
                  <FaBoxes></FaBoxes>
                  <p className="font-semibold">Dash Board</p>
                </label>
              </Link>

              <Link to='/dataAssets'>
                <div onClick={() => setDrawer(false)} className="flex justify-around text-white text-2xl border-2 p-2 bg-gray-500 rounded-xl cursor-pointer my-5">
                  <FaFileInvoice></FaFileInvoice>
                  <p className="font-semibold">Data Assets</p>
                </div>
              </Link>

              <Link to='education'>
                <div onClick={() => setDrawer(false)} className="flex justify-around text-white text-2xl border-2 p-2 bg-gray-500 rounded-xl cursor-pointer mb-5">
                  <FaGraduationCap></FaGraduationCap>
                  <p className="font-semibold">Education</p>
                </div>
              </Link>

              <Link to='analysis'>
                <div onClick={() => setDrawer(false)} className="flex justify-around text-white text-2xl border-2 p-2 bg-gray-500 rounded-xl cursor-pointer">
                  <FaChartBar></FaChartBar>
                  <p className="font-semibold">Analysis</p>
                </div>
              </Link>


            </ul>
          </div>
          
        }
      </div>


    </div>
  );
};

export default MainLayout;
