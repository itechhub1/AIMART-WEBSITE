import React from "react";

import Card from "../components/cards";
import Properties from "./assets/properties";
import { estatesIndex } from "../constants/mock";

// Social icons
import facebook from '../assets/facebook.ico'
import instagram from '../assets/instagram.ico'
import twitter from '../assets/twitter.ico'
import youtube from '../assets/youtube.ico'

const header = () => {
  const renderEstate = () => {
    return estatesIndex.map((itm, idx) => <Card key={idx} item={itm} />);
  };

  const renderSocial = () => {
    return (
      <div
        className="hidden sm:block bg-white w-12 py-2 h-56 rounded-full"
        style={{ top: "25%", position: "sticky" }}
      >
      
        <ul className="flex flex-col justify-evenly items-center px-1">
          <SocialIcon link="https://www.facebook.com" src={facebook}/>
          <SocialIcon link="https://www.twitter.com" src={twitter} className="mt-4" />
          <SocialIcon link="https://www.instagram.com" src={instagram} className="mt-4" />
          <SocialIcon link="https://www.youtube.com" src={youtube} className="mt-4" />
        </ul>
      </div>
    );
  };

  return (
    <div className="relative h-auto">
      <header className="flex">
        <div className=" text-white flex-1 flex flex-col justify-center items-center  h-screen">
          <div className=" mb-64 max-w-6xl w-full ">
            <div className=" ml-4 sm:ml-0 grid-2 ">
              <div className="w-full  ">
                <h1 className=" font-extrabold text-2xl sm:text-6xl animate__animated animate__bounce animate__repeat-2 ">
                  Your dream home{" "}
                </h1>
                <p className="font-medium text-xl sm:text-4xl mb-4">
                  Now within reach.
                </p>
                <a
                  href="https://app.aimartrealtors.com/login"
                  className=" border border-white bg-transparent text-white px-8 w-full p rounded-lg hover:text-white font-bold transform transition  hover:scale-125 duration-150 "
                >
                  Start Here &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
          <div className="relative pr-6">
          {renderSocial()}
          </div>
      </header>
      {/* find more */}
      <div className=" sm:p-4 my-32 flex flex-col justify-center items-center">
        <div className=" max-w-6xl w-full">
          <h1 className="font-medium text-3xl text-center mb-8">
            Your trusted real estate company.
          </h1>
          <div style={{columnGap: "2.3rem"}} className="grid-3">{renderEstate()}</div>
        </div>
      </div>

      {/* properties */}
      <div className="flex flex-col justify-center items-center bg-blue-100 py-12 ">
        <h1 className="text-black my-12 font-bold text-xl sm:text-4xl text-center">
          {" "}
          Discover Our Featured Listings
        </h1>
        <Properties />
      </div>
    </div>
  );
};

const SocialIcon = ({ link, src, className="" }) => {
  return (
    <li style={{backgroundColor: "#010066"}} className={`p rounded-full ${className}`}>
      <a href={link}>
        <img
          src={src}
          style={{ width: "30px" }}
          alt=""
        />
      </a>
    </li>
  );
};

export default header;
