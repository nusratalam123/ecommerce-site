import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import styles from "../styles/login.module.css";
import { useEffect, useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
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

            <form className={styles.form}>
              <div className="grid">
                <label className={styles.label}>Email:</label>
                <div className={styles.inputContainer}>
                  <input
                    type="email"
                    placeholder="enter email"
                    name="email"
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
                    // value={data.password}
                    name="password"
                    // onChange={handleOnChange}
                    className={styles.input}
                  />
                  <div
                    className={styles.eyeIcon}
                    // onClick={() => setShowPassword((prev) => !prev)}
                  >
                    <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                  </div>
                </div>
                <Link href="/forgot-password" className={styles.forgotPassword}>
                  Forgot password?
                </Link>
              </div>

              <button className={styles.button}>Login</button>
            </form>

            <p className="my-5">
              {/* Don't have account?{" "} */}
              <Link href="/signup" className={styles.signUpLink}>
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
