/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { toast } from "react-toastify";
import styles from "../styles/login.module.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

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
        { withCredentials: true }
      );

      const token = (response.data as { token: string }).token;

     // console.log("response", response.data);
      toast.success("Login successful", {
        position: "top-right",
        autoClose: 5000,
      });

      // Redirect to a designated "logged in" page after success
        router.push("/"); // Replace with your intended page
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
      <section id="login" className={styles.login}>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h1 className={styles.title}>
                Welcome to our website! Please Login
              </h1>
            </div>

            <form className={styles.form} onSubmit={handleOnSubmit}>
              <div className="grid">
                <label className={styles.label}>Email:</label>
                <div className={styles.inputContainer}>
                  <input
                    type="email"
                    placeholder="enter email"
                    name="email"
                    required
                    value={data.email}
                    onChange={handleOnChange}
                    className={styles.input}
                  />
                </div>
              </div>

              <div>
                <label className={styles.label}>Password:</label>
                <div
                  className={`${styles.inputContainer} ${styles.passwordContainer}`}
                >
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="enter password"
                    value={data.password}
                    name="password"
                    required
                    onChange={handleOnChange}
                    className={styles.input}
                  />
                  <div
                    className={styles.eyeIcon}
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                    {/* <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span> */}
                  </div>
                </div>
                <Link href="/forgot-password" className={styles.forgotPassword}>
                  Forgot password?
                </Link>
              </div>

              <button className={styles.button}>Login</button>
            </form>

            <p className="my-5">
              Don't have account?{" "}
              <Link href="/Signup" className={styles.signUpLink}>
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
