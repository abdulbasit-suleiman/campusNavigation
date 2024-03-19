"use client"
import { useState,useEffect } from "react";

import Head from "next/head";
import Splash from "./splash";
import HomePage from "./homePage";
export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="page">
      <Head>
        <title>CAPMUS NAVIGATION APP</title>
        <meta name='description' content='SUN OFFA ATTENDANCE' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className="home">
    {showSplash ? (<Splash />) : <HomePage />}
    </div>
    </div>
  );
}
