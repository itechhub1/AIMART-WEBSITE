import React from "react";
import slider from "../assets/slider-1.jpg";
import { whatWeDo, ourTeams } from "../constants/mock";

const aboutUs = () => {
  const renderCards = () => {
    return whatWeDo.map((item, idx) => (
      <div key={idx} className="bg-white shadow-lg p-12 shadow-lg">
        <div className="bg-blue-100 rounded-full w-32 h-32 flex items-center justify-center">
          <img src={item.image.default} alt="logo" style={{ width: 70 }} />
        </div>
        <h1 className="font-medium text-lg my-6">{item.title}</h1>
        <p className="text-gray-500 font-normal">{item.descriptions}</p>
      </div>
    ));
  };

  const renderOurTeams = () => {
    return ourTeams.map((team, idx) => (
      <div key={idx} className="bg-white shadow-lg p-12 shadow-lg">
        <img
          src={team.image.default}
          alt="logo"
          style={{ width: "100%", height: 300, objectFit: "contain" }}
        />
        <p className="text-gray-700 text-black font-bold text-xl">
          {team.name}
        </p>
        <p className=" text-gray-600 font-medium">{team.role}</p>
      </div>
    ));
  };

  return (
    <div className="flex flex-col  items-center h-auto">
      <div className=" max-w-6xl w-full">
      <h1 className="font-bold text-xl sm:text-4xl text-black ml-4 my-8">
            About Aimart Realtors
          </h1>
        <div className="bg-white">
          <div className="grid-2 w-full p-10">
            <div className=" text-gray-500 tracking-wider leading-loose font-mono">
              <p className="mb-2">
                Aimart Realtors is an indigenous company established in 2004
                with a drive to providing practical solutions towards making
                home ownership accessible and affordable to Nigerians across
                social stratas.
              </p>
              <p className="mb-2">
                With first class research &amp; development approach and a team
                of highly qualified and experienced professionals, Aimart
                Realtors constantly works towards ensuring that the housing
                sector is open and works for all not just as a means to obtain
                shelter but also for security and as an investment tool.
              </p>
              <p>
                We are driven by value addition and filling the massive void in
                our local housing deficit with quality and affordable housing
                solutions. We know the problems. We provide the solutions!
              </p>
            </div>

            <div className="">
              <img alt="" src={slider} style={{ width: 500 }} />
            </div>
          </div>
        </div>

        <div className=" my-20 p">
          <h1 className="text-3xl font-medium mb-6 ">Why Choose Us</h1>
          <div className="grid-3">{renderCards()}</div>
        </div>

        <div className=" my-20 p">
          <h1 className="text-3xl font-medium mb-6 ">Our Teams</h1>
          <div className="grid-3">{renderOurTeams()}</div>
        </div>
      </div>
    </div>
  );
};

export default aboutUs;
