"use client"
import { useState,useEffect } from "react";

import Head from "next/head";
import Splash from "./splash";
export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
 
  return (
    <div className="page">
      <Head>
        <title>CAPMUS NAVIGATION APP</title>
        <meta name='description' content='SUN OFFA ATTENDANCE' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className="home">
   <Splash />

    </div>
   
    </div>
  );
}
