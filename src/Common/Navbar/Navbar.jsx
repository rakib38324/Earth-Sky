
import { FaRegArrowAltCircleRight, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Navbar = ({ setDrawer }) => {

    // const [data,setData] = useState();

   
    return (
        <div className="navbar bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-40% to-emerald-500 to-80% relative">
            <div className="flex-1">
                <label htmlFor="my-drawer" className="">
                    <FaRegArrowAltCircleRight onMouseEnter={() => setDrawer(true)} className="cursor-pointer rounded-full text-5xl "></FaRegArrowAltCircleRight>
                </label>

                <Link to='/'>
                    <a className="btn btn-ghost normal-case text-2xl font-bold">Earth SkyBridge</a>
                </Link>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="hidden md:block input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="text-3xl">
                            <FaUserCircle></FaUserCircle>
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <Link to='/login'>
                                <a className="font-semibold">LogIn</a>
                            </Link>
                        </li>
                        <li><a className="font-semibold" >Profile</a></li>
                        <li><a className="font-semibold">Settings</a></li>
                        <li><a className="font-semibold">Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;