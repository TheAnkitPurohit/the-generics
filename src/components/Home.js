import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div>
      {/* header  */}
      <header className="text-white h-96 flex flex-col items-center">
        <Navbar />
        {/* divider  */}
        <div className="divider w-full h-0.5 bg-gray-500" />
        {/* bg  */}
        <h1 className="heading-font text-6xl m-6">The Generics</h1>
        <button
          type="button"
          className="border border-blue-500 bg-none p-5 my-2 text-2xl flex items-center hover:bg-blue-300 rounded hover:cursor-pointer"
        >
          <img
            src="/images/icons/red-play-button.svg"
            className="w-10 mx-2"
            alt=""
          />
          <span> Get Our Latest Album</span>
        </button>
      </header>
      {/* home  */}
      <section id="main-section" className="flex flex-col items-center my-6">
        <h1 className="heading-font text-center m-14 text-4xl">tours</h1>
        {/* boxes  */}
        <div className="box flex justify-between w-5/6 text-xs md:text-base lg:w-3/6 border-b-2 py-6">
          <div className="date font-bold">Date</div>
          <div className="city">City</div>
          <div className="area">Avenue</div>
          <button className="text-white rounded p-1" />
        </div>
        <div className="box flex justify-between w-5/6 text-xs md:text-base lg:w-3/6 border-b-2 py-6">
          <div className="date font-bold">JUL 16</div>
          <div className="city">MUMBAI,MH</div>
          <div className="area">WANKHEDE STADIUM</div>
          <button className="text-white bg-blue-400 rounded p-1">
            BUY TICKETS
          </button>
        </div>
        <div className="box flex justify-between w-5/6 text-xs md:text-base lg:w-3/6 border-b-2 py-6">
          <div className="date font-bold">JUL 19</div>
          <div className="city">AHMEDABAD, GJ</div>
          <div className="area">MODI STADIUM</div>
          <button className="text-white bg-blue-400 rounded p-1">
            BUY TICKETS
          </button>
        </div>
        <div className="box flex justify-between w-5/6 text-xs md:text-base lg:w-3/6 border-b-2 py-6">
          <div className="date font-bold">JUL 22</div>
          <div className="city">PUNE, MH</div>
          <div className="area">MATHURAI GARDEN</div>
          <button className="text-white bg-blue-400 rounded p-1">
            BUY TICKETS
          </button>
        </div>
        <div className="box flex justify-between w-5/6 text-xs md:text-base lg:w-3/6 border-b-2 py-6">
          <div className="date font-bold">JUL 29</div>
          <div className="city">KOLKATA, WB</div>
          <div className="area">EDEN GARDEN</div>
          <button className="text-white bg-blue-400 rounded p-1">
            BUY TICKETS
          </button>
        </div>
        <div className="box flex justify-between w-5/6 text-xs md:text-base lg:w-3/6 border-b-2 py-6">
          <div className="date font-bold">AUG 2</div>
          <div className="city">PANJI, GOA</div>
          <div className="area">TOTO'S CLUB</div>
          <button className="text-white bg-blue-400 rounded p-1">
            BUY TICKETS
          </button>
        </div>
        <div className="box flex justify-between w-5/6 text-xs md:text-base lg:w-3/6 border-b-2 py-6">
          <div className="date font-bold">AUG 7</div>
          <div className="city">MUMBAI,MH</div>
          <div className="area">WANKHEDE STADIUM</div>
          <button className="text-white bg-blue-400 rounded p-1">
            BUY TICKETS
          </button>
        </div>
      </section>

      {/* footer  */}
      <Footer />
    </div>
  );
}
