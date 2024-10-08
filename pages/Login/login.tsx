/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { toast } from "react-toastify";
import Context from "@/context";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const userDetails = useContext(Context);

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();

    if (!data.email || !data.password) {
      console.log("Please enter all the fields");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:7000/api/v1/auth/login",
        data,
        {
          withCredentials: true,
          headers: {
            "content-type": "application/json",
          },
        }
      );

      const token = (response.data as { token: string }).token;

      console.log("response", response.data);
      toast.success("Login successful", {
        position: "top-right",
        autoClose: 5000,
      });

      // Redirect to a designated "logged in" page after success
      router.push("/"); // Replace with your intended page
      userDetails?.userDetails();
    } catch (err) {
      console.log("error", err);
      let errorMessage = "Login failed.";

      // Handle specific errors based on API response (if available)
      //  if (err.response?.status === 401) {
      //    errorMessage = "Invalid email or password.";
      //  } else if (err.response?.data?.message) {
      //    errorMessage = err.response.data.message;
      //  }

      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
      });
    }

    //console.log(data);
  };
  return (
    <>
      <section id="login">
        <div className="mx-auto container p-4">
          <div className="bg-white p-5 w-full max-w-sm mx-auto">
            <div className="w-20 h-20 mx-auto">
              <h1>
                Welcome to our website! Please Login
              </h1>
              {/* <img src={loginIcons} alt="login icons" /> */}
            </div>

            <form className="pt-6 flex flex-col gap-2" onSubmit={handleOnSubmit}>
              <div className="grid">
                <label>Email : </label>
                <div className="bg-slate-100 p-2">
                  <input
                    type="email"
                    placeholder="enter email"
                    name="email"
                    value={data.email}
                    onChange={handleOnChange}
                    className="w-full h-full outline-none bg-transparent"
                  />
                </div>
              </div>

              <div>
                <label>Password : </label>
                <div className="bg-slate-100 p-2 flex">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="enter password"
                    value={data.password}
                    name="password"
                    onChange={handleOnChange}
                    className="w-full h-full outline-none bg-transparent"
                  />
                  <div
                    className="cursor-pointer text-xl"
                    onClick={() => setShowPassword((preve) => !preve)}
                  >
                    <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                  </div>
                </div>
                <Link href="/forgot-password" className="block w-fit ml-auto hover:underline hover:text-red-600">
                  Forgot password?
                </Link>
              </div>

              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">
                Login
              </button>
            </form>

            <p className="my-5">
              Don't have account ?{" "}

              <Link href="/Signup/signup" className=" text-red-600 hover:text-red-700 hover:underline">
                Sign up
              </Link> 
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
