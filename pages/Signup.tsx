import imagetobase from "@/helper/imagetobase";
import Link from "next/link";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import styles from "../styles/signup.module.css";
import axios from "axios";
import summaryAPI from "@/common";
import router from "next/router";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePic: "",
  });
  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();

    try {
      
      setShowConfirmPassword(true)
      if(data.password === data.confirmPassword){
        const dataResponse = await axios.post(
          "http://localhost:7000/api/v1/auth/signup",
          data
        );
        console.log("data", dataResponse.data);
        router.push("/Login");
      }

      else {
        console.log("password or confirm password does not match");
      }
      
    } catch (err) {
      console.error(err);
    }
    // if (data.password === data.confirmPassword) {
      
    //    const dataResponse: Response = await fetch(
    //      "localhost:7000/api/v1/auth/signup",
    //      {
    //        method: summaryAPI.signUP.method,
    //        headers: {
    //          "Content-Type": "application/json",
    //        },
    //        body: JSON.stringify(data),
    //      }
    //    );

    //    const responseData = await dataResponse.json();
    //    console.log(responseData);
    // } else {
    //   console.log("password or confirm password not matched");
    // }


   
  };

  const handleUploadPic = async (e: any) => {
    const file = e.target.files[0];
    const imagePic = await imagetobase(file);
    // console.log("image", imagePic);

    setData((preve) => {
      return {
        ...preve,
        profilePic: imagePic as string,
      };
    });
  };
  console.log("login info", data);
  return (
    <>
      <section id="login" className={styles.login}>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h1 className={styles.title}>
                Welcome to our website! Please Sign up
              </h1>
            </div>

            <form className={styles.form} onChange={handleOnSubmit}>
              <div className="grid">
                <label className={styles.label}>Name:</label>
                <div className={styles.inputContainer}>
                  <input
                    type="text"
                    placeholder="enter your name"
                    name="name"
                    required
                    onChange={handleOnChange}
                    value={data.name}
                    className={styles.input}
                  />
                </div>
              </div>
              <div className="grid">
                <label className={styles.label}>Email:</label>
                <div className={styles.inputContainer}>
                  <input
                    type="email"
                    placeholder="enter email"
                    name="email"
                    required
                    onChange={handleOnChange}
                    value={data.email}
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
                    required
                    value={data.password}
                    name="password"
                    onChange={handleOnChange}
                    className={styles.input}
                  />
                  <div
                    className={styles.eyeIcon}
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                  </div>
                </div>
              </div>

              <div>
                <label className={styles.label}>Confirm Password:</label>
                <div
                  className={`${styles.inputContainer} ${styles.passwordContainer}`}
                >
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="enter confirm password"
                    required
                    value={data.confirmPassword}
                    name="confirmPassword"
                    onChange={handleOnChange}
                    className={styles.input}
                  />
                  <div
                    className={styles.eyeIcon}
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                  >
                    <span>
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </div>
              </div>

              {/* <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
                <form>
                  <label>
                    <div className="text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full">
                      Upload Photo
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      // onChange={handleUploadPic}
                    />
                  </label>
                </form>
              </div> */}

              <div className={styles.uploadContainer}>
                <label className={styles.uploadLabel}>
                  <div className={styles.uploadText}>Upload Photo</div>
                  <input
                    type="file"
                    id="profilePic"
                    name="profilePic"
                    onChange={handleUploadPic}
                    className={styles.uploadInput}
                  />
                </label>
              </div>
              <button className={styles.button}>Sign up</button>
            </form>

            <p className="my-5">
              Already have an account?
              <Link href="/Login" className={styles.signUpLink}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
function imageTobase64(file: any) {
  throw new Error("Function not implemented.");
}
