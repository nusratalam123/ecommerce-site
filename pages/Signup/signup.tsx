import imagetobase from "@/helper/imagetobase";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";



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
    <section id="signup">
      <div className="mx-auto container p-4">
        <div className="bg-white p-5 w-full max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
            <div>
              <h1>Welcome to our website! Please Sign up // </h1>
              {/* <img src={data.profilePic || loginIcons} alt="login icons" /> */}
            </div>
          </div>

          <form className="pt-6 flex flex-col gap-2" onSubmit={handleOnSubmit}>
            <div className="grid">
              <label>Name : </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="text"
                  placeholder="enter your name"
                  name="name"
                  value={data.name}
                  onChange={handleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="grid">
              <label>Email : </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  placeholder="enter email"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  required
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
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((preve) => !preve)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
            </div>

            <div>
              <label>Confirm Password : </label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="enter confirm password"
                  value={data.confirmPassword}
                  name="confirmPassword"
                  onChange={handleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent"
                />

                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowConfirmPassword((preve) => !preve)}
                >
                  <span>
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <div>
                  <form></form>
                </div>
              </div>
            </div>
             <div >
               <label >
                <div>
                 <input
                   type="file"
                   id="profilePic"
                   name="profilePic"
                   onChange={handleUploadPic}
                  />
                  </div>
              </label>
             </div>

            <div>
              <label>
                <div className="text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full">
                  Upload Photo
                </div>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleUploadPic}
                />
              </label>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">
              Sign Up
            </button>
          </form>

          <p className="my-5">
            Already have account ?{" "}
            <Link
              href={"/Login/login"}
              className=" text-red-600 hover:text-red-700 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}


    {/* // <section id="login" className={styles.login}>
    //   <div className={styles.container}>
    //     <div className={styles.card}>
    //       <div className={styles.cardHeader}>
    //         <h1 className={styles.title}>
    //           Welcome to our website! Please Sign up
    //         </h1>
    //       </div>
    //       <form className={styles.form} onSubmit={handleOnSubmit}>
    //         <div className="grid">
    //           <label className={styles.label}>Name:</label>
    //           <div className={styles.inputContainer}>
    //             <input */}
    {/* //               type="text"
    //               placeholder="Enter your name"
    //               name="name"
    //               required
    //               onChange={handleOnChange}
    //               value={data.name}
    //               className={styles.input}
    //             />
    //           </div> */}
    //         </div>
    //         <div className="grid">
    //           <label className={styles.label}>Email:</label>
    //           <div className={styles.inputContainer}>
    //             <input
    //               type="email"
    //               placeholder="Enter email"
    //               name="email"
    //               required
    //               onChange={handleOnChange}
    //               value={data.email}
    //               className={styles.input}
    //             />
    //           </div>
    //         </div>
    //         <div>
    //           <label className={styles.label}>Password:</label>
    //           <div
    //             className={`${styles.inputContainer} ${styles.passwordContainer}`}
    //           >
    //             <input
    //               type={showPassword ? "text" : "password"}
    //               placeholder="Enter password"
    //               required
    //               value={data.password}
    //               name="password"
    //               onChange={handleOnChange}
    //               className={styles.input}
    //             />
    //             <div
    //               className={styles.eyeIcon}
    //               onClick={() => setShowPassword((prev) => !prev)}
    //             >
    //               <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
    //             </div>
    //           </div>
    //         </div>
    //         <div>
    //           <label className={styles.label}>Confirm Password:</label>
    //           <div
    //             className={`${styles.inputContainer} ${styles.passwordContainer}`}
    //           >
    //             <input
    //               type={showConfirmPassword ? "text" : "password"}
    //               placeholder="Confirm password"
    //               required
    //               value={data.confirmPassword}
    //               name="confirmPassword"
    //               onChange={handleOnChange}
    //               className={styles.input}
    //             />
    //             <div
    //               className={styles.eyeIcon}
    //               onClick={() => setShowConfirmPassword((prev) => !prev)}
    //             >
    //               <span>
    //                 {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //         <div className={styles.uploadContainer}>
    //           <label className={styles.uploadLabel}>
    //             <div className={styles.uploadText}>Upload Photo</div>
    //             <input
    //               type="file"
    //               id="profilePic"
    //               name="profilePic"
    //               onChange={handleUploadPic}
    //               className={styles.uploadInput}
    //             />
    //           </label>
    //         </div>
    //         <button className={styles.button}>Sign up</button>
    //       </form>
    //       <p className="my-5">
    //         Already have an account?
    //         <Link href="/Login" className={styles.signUpLink}>
    //           Login
    //         </Link>
    //       </p>
    //     </div>
    //   </div>
    // </section>

