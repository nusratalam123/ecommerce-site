import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Head from "@/components/Head";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head></Head>
      {/* <Header></Header> */}
      <Featured />

      <Footer></Footer>
    </>
  );
}


