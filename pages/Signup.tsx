import imagetobase from "@/helper/imagetobase";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import styles from "../styles/signup.module.css";


// Custom type guard to check if the error is an AxiosError

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

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (data.password !== data.confirmPassword) {
      console.log("Passwords do not match");
      toast.error("Passwords do not match", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:7000/api/v1/auth/signup",
        data
      );
      const responseData = response.data as { message: string };
      console.log("response", response.data);
      toast.success(responseData.message, {
        position: "top-right",
        autoClose: 5000,
      });
      router.push("/Login");
    } catch (err) {
      console.log("error", err);
    }
  };

  const handleUploadPic = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const imagePic = await imagetobase(file);
        setData((prev) => ({
          ...prev,
          profilePic: imagePic as string,
        }));
      } catch (error) {
        console.error("Error converting image to base64:", error);
        toast.error("Error uploading image", {
          position: "top-right",
          autoClose: 5000,
        });
      }
    }
  };

  return (
    <section id="login" className={styles.login}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h1 className={styles.title}>
              Welcome to our website! Please Sign up
            </h1>
          </div>
          <form className={styles.form} onSubmit={handleOnSubmit}>
            <div className="grid">
              <label className={styles.label}>Name:</label>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  placeholder="Enter your name"
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
                  placeholder="Enter email"
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
                  placeholder="Enter password"
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
                  placeholder="Confirm password"
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
  );
}
