import React from "react";
import { useParams } from "react-router-dom";
import { estatesIndex } from "../constants/mock";
import parser from 'react-html-parser'

const Read__more = () => {
  const { id } = useParams();
  const foundEl = estatesIndex.find((el) => el.id === parseInt(id));
  switch (parseInt(id)) {
    case 1:
      return (
        <ReadMorePage foundEl={foundEl}>
          <div className=" sm:p-8 sm:px-8 my-8">
            <h2 className="text-2xl font-bold text-black text-center">
              THE AIMART AFFORDABLE HOMES SCHEME
            </h2>
            <div className="w-full text-gray-700 my-8">
              <div className=" p-4  leading-loose">
                <div className="flex flex-col md:flex-row justify-center">
                  <div className=" max-w-6xl w-full shadow bg-blue-900">
                    <div className=" leading-loose font-light text-gray-600 p-2">
                      <h3 className="text-xl font-extrabold text-white text-left">
                        Houses
                      </h3>
                      <p className="text-gray-100">
                        Our Affordable Housing Scheme is a program designed to
                        provide solutions to the increasing housing deficit and
                        the rising cost of development & construction; pricing
                        housing out of the reach of most.
                      </p>
                      <p className="text-gray-100">
                        With a people focused model, we are creating housing
                        schemes in select locations which are not only
                        affordable but are modelled to meet current global
                        standards in quality and style in terms of structures
                        and is highly affordable with proper mortgage and
                        structured financing to ensure no one is left out.
                      </p>
                      <p className="text-gray-100">
                        With varying designs and patterns, we create not just
                        homes but a community of like-minded people with a
                        vision towards greater nation building and improved
                        well-being for all.For more information, please fill out
                        the form on our website or you can reach us at
                        (phone)/email.
                      </p>
                    </div>
                  </div>

                  <div className=" max-w-6xl w-full shadow bg-white mt-8 md:mt-0">
                    <div className=" leading-loose font-light text-gray-600 p-2">
                      <h1 className="text-xl font-extrabold text-black ">
                        Land
                      </h1>
                      <p>
                        With housing being key to mankind for safety, a vital
                        tool for human development and enrichment , our serviced
                        plots are deliberately situated in key locations to
                        cater to the need for home ownership and high return
                        investments. we have carefully selected and situated our
                        estates in locations with:
                      </p>
                      <ul className="list-disc">
                        <li>
                          Closeness to key public and private sector
                          developments
                        </li>
                        <li>Rapid property value appreciation</li>
                        <li>
                          Various investment opportunities within and around the
                          estates
                        </li>
                        <li>Access to major roads and infrastructure</li>
                      </ul>
                      <p>
                        Whether residential or commercial properties (including
                        recreational), the journey begins with land, and we are
                        certain that your investment in our estates would be
                        your best investment decision ever made. “The land is
                        the only thing in the world worth working for, worth
                        fighting for, worth dying for, because it’s the only
                        thing that lasts”. – Margaret Mitchell.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ReadMorePage>
      );
    case 3:
      return (
        <ReadMorePage foundEl={foundEl}>
          <div className=" sm:p-8 sm:px-8 my-8">
            <h1 className="text-2xl font-bold text-black text-center">
              AVEST PROPERTIES
            </h1>
            <div className="w-full text-gray-700 my-8">
              <div className=" p-4  leading-loose">
                <div className="flex flex-col md:flex-row justify-center">
                  <div className=" max-w-6xl w-full shadow bg-blue-900">
                    <div className=" leading-loose font-light text-gray-600 p-2">
                      <h1 className="text-xl font-extrabold text-white">
                        Portfolio Investment Scheme – PIS
                      </h1>
                      <div className="text-gray-300">
                        <p>
                          The Portfolio Investment Scheme (PIS) is a pool where
                          investors put in funds from a minimum of 6 months to
                          maximum of 18 months. Returns on Investment (ROI)
                          under the PIS are paid monthly on pro rata basis. The
                          various investment portfolios under this scheme are as
                          below;
                        </p>
                        <ul className="list-disc ml-5 font-bold">
                          <li>Gold Basic</li>
                          <li>Gold Executive</li>
                          <li>Platinum Executive</li>
                        </ul>
                        {/* <h3 className="font-bold text-gray-100 text-lg mt-2">
                          Minimum Investment
                        </h3>
                        At Aimart, the minimum capital investment for Platinum
                        Executive is 
                        <span className="font-normal text-gray-100">
                          N5,000,000.00
                        </span>{" "}
                        (Five Million Naira only) which can be increased in two
                        million multiples. For
                        <span className="font-bold text-gray-100 text-lg">
                          Gold Executive
                        </span>
                        , the minimum capital investment is
                        <span className="font-normal text-gray-100">
                          N1,000,000.00
                        </span>{" "}
                        (One Million Naira only) which can also be increased to a
                        maximum of
                        <span className="font-normal text-gray-100 ">
                          N5,000,000.00.
                        </span>
                        Investors may equally increase their portfolio in one
                        million multiples In all of the investment portfolios we
                        have at Aimart, Gold Basic runs ONLY for six (6) with an
                        8 percent Return on Investment – ROI. Both Platinum
                        Executive and Gold Executive run for six (6), twelve
                        (12) and eighteen (18) months with Returns on Investment
                        – ROI going for 8 percent, 17.5 percent and 35 percent
                        on both.
                       
                        <p>Our Strategic Investment Scheme is a special scheme
                        where prospective investors co-own whatever investment
                        or business such funds are expended on. It is a
                        long-term scheme that guarantees steady returns on
                        investment. The investment here is subject to available
                        project at every point in time and returns are also
                        negotiable.</p> */}
                      </div>
                    </div>
                  </div>

                  <div className=" max-w-6xl w-full shadow bg-white mt-8 md:mt-0">
                    <div className=" leading-loose font-light text-gray-600 p-2">
                      <h1 className="text-xl font-extrabold text-blue-800 ">
                        Strategic Investment Scheme – SIS
                      </h1>
                      <div>
                        <p>
                        Our Strategic Investment Scheme is a special scheme
                        where prospective investors co-own whatever investment
                        or business such funds are expended on. It is a
                        long-term scheme that guarantees steady returns on
                        investment. The investment here is subject to available
                        project at every point in time and returns are also
                        negotiable.
                        </p>
                        {/* <h3 className="font-bold text-blue-800 text-lg mt-2">
                          Minimum Investment
                        </h3>
                        <p>At Aimart, the minimum capital investment for Platinum
                        Executive is{" "}
                        <span className="font-normal text-black">
                          N5,000,000.00
                        </span>{" "}
                        (Five Million Naira only) which can be increased in two
                        million multiples.For{" "}
                        <span className="font-bold text-blue-800 text-lg">
                          Gold Executive
                        </span>
                        , the minimum capital investment is{" "}
                        <span className="font-normal text-black">
                          N1,000,000.00
                        </span>{" "}
                        (One Million Naira only) In all of the
                        investment portfolios we have at Aimart, Gold Basic runs
                        ONLY for six (6) with an 8 percent Return on Investment
                        – ROI. Both Platinum Executive and Gold Executive run
                        for six (6), twelve (12) and eighteen (18) months with
                        Returns on Investment – ROI going for 8 percent, 17.5
                        percent and 35 percent on both.</p> */}
                        
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ReadMorePage>
      );
    default:
      return <ReadMorePage foundEl={foundEl}>
      </ReadMorePage>;
  }
};

const ReadMorePage = ({ foundEl, children }) => {
  return (
    <>
      <div>
        <h1 className="font-bold text-black text-lg sm:text-5xl p-2">
          {foundEl.title}
        </h1>
        <div className=" flex justify-center h-auto">
          <div className=" max-w-6xl w-full bg-white p-4 sm:p-16">
            <div className="grid-2 items-center">
              <div className=" text-gray-600 leading-loose font-mono">
                {parser(foundEl.description)}
              </div>
              <img
                src={foundEl.image}
                alt="estate Images"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
      {children}
      <div
        className="relative w-full md:w-4/5 mx-auto max-w-screen-md px-5 md:px-0"
        style={{ height: 350 }}
      >
        <iframe
          title="aimart property"
          className="w-full h-full"
          src="https://www.youtube.com/embed/cBzLh69OPPU"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className=" p-8 px-8 my-8">
        <h1 className="text-2xl font-bold text-black text-center">
          {foundEl.plan.plan_title}
        </h1>
        <div className="grid-3 w-full text-gray-700 my-8">
          {foundEl.plan.plan_type.map((planItem, idx) => (
            <Plan key={idx} title={planItem.title} details={planItem.desc} />
          ))}
        </div>
      </div>
    </>
  );
};

const Plan = ({ title, details }) => {
  return (
    <div className=" flex flex-col justify-center items-center p-4 shadow-lg leading-loose bg-white">
      <h1 className="text-xl font-extrabold text-black ">{title}</h1>
      <p className=" leading-loose font-light text-gray-500 text-sm sm:p-10">
        {parser(details)}
      </p>
      <button
        type="submit"
        className="bg-blue-100 border border-blue-900 text-blue-900 p   hover:bg-orange-500 hover:text-white font-bold my-4 rounded-lg"
        onClick={() => console.log()}
      >
        Subscribe Now
      </button>
    </div>
  );
};

export default Read__more;
