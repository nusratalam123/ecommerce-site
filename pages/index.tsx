import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Head from "@/components/Head";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });





export default function Home() {

  const userDetails = async () => {
    const response = await axios.get(
      "http://localhost:7000/api/v1/auth/current-user",
      { withCredentials: true }
    );
    const responsedata = await response.data;
    console.log("data", responsedata);
  };

  useEffect(() => {
    userDetails();
  });
  return (
    <>
      <ToastContainer />
      <Head></Head>
      {/* <Header></Header> */}
      <Featured />

      <Footer></Footer>
    </>
  );
}


