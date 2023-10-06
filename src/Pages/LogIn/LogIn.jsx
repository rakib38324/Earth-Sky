import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import background from '../../assets/nasa5.jpg'
import signUp from '../../assets/logIn.png'
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";
import SmallLoading from "../../Common/SmallLoading/SmallLoading";

const LogIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const [signUpError, setSignUPError] = useState("");



    const { signIn,  signUpWitGoogle, loading, setLoading } = useContext(AuthContext);

    const handleLogIn = (data) => {
        // console.log(data);
        setLoading(true);

        setSignUPError("");
        signIn(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success(`LogIn Successfully...`);
                navigate('/');
                
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                setSignUPError(error.message);
            });
    };


    const handleSignUpnWithGoogle = () => {
        setLoading(true);

        signUpWitGoogle()
            .then((result) => {
                const user = result.user;
                // console.log(user.email)

                // setCreatedUserEmail(user.email);
                setLoading(false);
                toast.success("Login Successfully!!!");
                navigate('/');

                
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            });
    };
    return (
        <div
            style={{ background: `url(${background})` }}
            className="relative h-full md:h-screen !bg-no-repeat !bg-center !bg-cover"
        >
            <div className="grid lg:grid-cols-2  max-w-screen-xl mx-auto">


                <div className="md:w-1/2 lg:w-full mx-auto bg-white p-7 my-10 rounded-3xl opacity-80">

                    <img src={signUp}></img>
                </div>

                <div className="lg:w-96 mx-auto bg-white p-7 my-10 opacity-90 rounded-3xl">
                    <h2 className="text-2xl text-black font-semibold text-center">
                        Please put your information
                    </h2>
                    <form className="w-full mx-auto" onSubmit={handleSubmit(handleLogIn)}>
                        
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                {" "}
                                <span className="label-text  font-bold">Email</span>
                            </label>
                            <input
                                type="text"
                                {...register("email", {
                                    required: "Email Address is required",
                                })}
                                placeholder="Your email..."
                                className="input input-bordered w-full max-w-xs"
                            />
                            {errors.email && (
                                <p className="text-red-600">{errors.email?.message}</p>
                            )}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                {" "}
                                <span className="label-text font-bold">
                                    Password
                                </span>
                            </label>
                            <input
                                type="password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be 6 characters long",
                                    },
                                    pattern: {
                                        value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                                        message:
                                            "Password must have uppercase, number and special characters",
                                    },
                                })}
                                placeholder="Your password..."
                                className="input input-bordered w-full max-w-xs"
                            />
                            {errors.password && (
                                <p className="text-red-500">{errors.password.message}</p>
                            )}
                        </div>





                        <div className="text-center my-5">
                            <button className="btn btn-primary bg-gradient-to-r from-blue-600 to-violet-600 hover:bg-gradient-to-r  hover:from-violet-600 hover:to-blue-600 text-white w-full mt-2 ">
                                {" "}
                                {loading ? <SmallLoading></SmallLoading> : "Sign Up"}{" "}
                            </button>

                            <div>
                                {signUpError && <p className="text-red-600">{signUpError}</p>}
                            </div>
                        </div>

                        {/* <input className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-full mt-2' value="SignUp" type="submit" /> */}
                    </form>


                    <p className="pt-2">
                        Are you first in here?{" "}
                        <Link className="font-bold" to="/signup">
                            Please create account
                        </Link>
                    </p>
                    <div className="divider  font-bold">OR</div>
                    <button
                        onClick={handleSignUpnWithGoogle}
                        className="btn btn-primary bg-gradient-to-r from-blue-600 to-violet-600 hover:bg-gradient-to-r  hover:from-violet-600 hover:to-blue-600 text-white w-full "
                    >
                        {loading ? <SmallLoading></SmallLoading> : "SIGN UP WITH GOOGLE"}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default LogIn;