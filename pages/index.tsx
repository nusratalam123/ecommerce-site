import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Head from "@/components/Head";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Context from "@/context";

const inter = Inter({ subsets: ["latin"] });





export default function Home() {

  const [user, setUser] = useState(null);

  // const userDetails = async () => {
  //   try {
      // const response = await axios.get(
      //   "http://localhost:7000/api/v1/auth/current-user",
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //     withCredentials: true, // Send cookies if needed
      //   }
      // );

      // if (response.status === 200) {
      //   setUser(response.data.data); // Set user data
      // }
      // console.log('Response:', response);

      // if (response.ok) {
      //   const data = await response.json();
      //   setUser(data.user);
      // } else {
      //   console.error('Error fetching user data:', response.status, response.statusText);
      // }
  //   } catch (err) {
  //     console.error('Error fetching user data:', err);
  //   }
  // }



const userDetails = async () => {

   try {
     // Making a request to the backend with cookies automatically included
     const token = Cookies.get("token");
     console.log("Token:", token);
     const response = await axios.get(
       "http://localhost:7000/api/v1/auth/current-user",
       {
         headers: {
           authorization: `Bearer ${token}`,
         },
         withCredentials: true, // Ensures the httpOnly cookie is sent with the request
       }
     );

     console.log("User data:", response.data);
   } catch (err) {
     console.error("Error fetching user data:", err);
   }
 };






  useEffect(() => {
    userDetails();
  }, []);

  return (
    <>
      <Context.Provider value={{ userDetails}}>
        <ToastContainer />
        <Head></Head>
        {/* <Header></Header> */}
        <Featured />
        <Footer></Footer>
      </Context.Provider>
    </>
  );
}


