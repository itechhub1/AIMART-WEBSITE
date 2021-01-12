import React from "react";
import slider from "../assets/slider-1.jpg";
import { whatWeDo, ourTeams } from "../constants/mock";

const aboutUs = () => {
  const renderCards = () => {
    return whatWeDo.map((item) => (
      <div className="bg-white shadow-lg p-12 shadow-lg">
        <div className="bg-blue-100 rounded-full w-32 h-32">
          <img
            src={item.image.default}
            alt="logo"
            className=" ml-auto mr-auto items-center"
            style={{ width: 70 }}
          />
        </div>
        <h1 className="font-medium text-lg my-8">{item.title}</h1>
        <p className="text-gray-500 font-normal">{item.descriptions}</p>
      </div>
    ));
  };

  const renderOurTeams = () => {
    return ourTeams.map((team) => (
      <div className="bg-white shadow-lg p-12 shadow-lg">
        <img
          src={team.image.default}
          alt="logo"
          style={{ width: "100%", height: 350 }}
        />
        <h1 className="font-medium text-lg my-8">Development</h1>
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
        <div className="bg-white mt-16">
          <span className="font-bold text-xl sm:text-4xl text-black ml-4">
            Our Mission Is To Find House
          </span>
          <div className="grid-2 w-full p-10">
            <div className=" text-gray-500 tracking-wider leading-loose font-mono">
              Aimart Realtors is a real estate management and development firm
              with years of experience in providing excellent housing/shelter
              solution to a wide spectrum of clientele or prospective property
              owners. At Aimart Realtors, we build homes, offices and shopping
              malls that meet the best standard obtained across the globe for
              individuals and corporate concerns who have also continued to
              build greater confidence in our products and services. Since the
              inception of our company, we have successfully provide end-to-end,
              client oriented mortgage finance solutions and real estate
              portfolio that offer optimized shelters for both individuals and
              businesses. Overtime, our company has remained consistent to it's
              vision as a " a one stop solution provider in the global real
              estate business" and thus continues to design, conceptualize,
              build and manage decent and affordable residental/
              office/commercial accomdations that are execllent for habitation
              and investment.
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
