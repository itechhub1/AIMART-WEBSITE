import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { estatesIndex } from "../constants/mock";
import parser from "react-html-parser";

const Read__more = () => {
  const [state, setstate] = useState(null);
  const { id } = useParams();
  const estateDetails = (id) => {
    const foundEl = estatesIndex.find((el) => el.id === parseInt(id));

    if (foundEl) {
      return (
        <div className="">
          <h1 className="font-bold text-black text-lg sm:text-5xl p-2">
            {foundEl.title}
          </h1>
          <div className=" flex justify-center h-auto ">
            <div className=" max-w-6xl w-full bg-white p-4 sm:p-16">
              <div className="grid-2 items-center">
                <div className=" text-gray-600 leading-loose font-mono">
                  {foundEl.descriptions}
                </div>
                <img
                  src={foundEl.image}
                  alt="estate Images"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>

          {/* properties category */}
          {/* Show the subtitles section except for the farm estate which has an id of 2 */}
          {foundEl.id === 1 && (
            <div className=" sm:p-8 sm:px-8 my-8">
              <h1 className="text-2xl font-bold text-black text-center">
                {foundEl.sub_details.title}
              </h1>
              <div className="w-full text-gray-700 my-8">
                <div className=" p-4  leading-loose">
                  <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className=" max-w-6xl w-full shadow bg-blue-900">
                      <div className=" leading-loose font-light text-gray-600 p-2">
                        <h1 className="text-xl font-extrabold text-white">
                          {foundEl.sub_details.sub_title.title1}
                        </h1>
                        <p className="text-gray-100"> {parser(foundEl.full_desc)}</p>
                      </div>
                    </div>

                    <div className=" max-w-6xl w-full shadow bg-white mt-8 md:mt-0">
                      <div className=" leading-loose font-light text-gray-600 p-2">
                        <h1 className="text-xl font-extrabold text-black ">
                          {foundEl.sub_details.sub_title.title2}
                        </h1>
                        <p> {parser(foundEl.full_desc)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {foundEl.id === 3 && (
            <div className=" sm:p-8 sm:px-8 my-8">
            <h1 className="text-2xl font-bold text-black text-center">
              {foundEl.sub_details.title}
            </h1>
            <div className="w-full text-gray-700 my-8">
              <div className=" p-4  leading-loose">
                <div className="flex flex-col md:flex-row justify-center items-center">

                  <div className=" max-w-6xl w-full shadow bg-blue-900">
                    <div className=" leading-loose font-light text-gray-600 p-2">
                      <h1 className="text-xl font-extrabold text-white">
                        {foundEl.sub_details.sub_title.title1}
                      </h1>
                      <p className="text-gray-100"> {parser(foundEl.full_desc)}</p>
                    </div>
                  </div>

                  <div className=" max-w-6xl w-full shadow bg-white mt-8 md:mt-0">
                    <div className=" leading-loose font-light text-gray-600 p-2">
                      <h1 className="text-xl font-extrabold text-black ">
                        {foundEl.sub_details.sub_title.title2}
                      </h1>
                      <p> {parser(foundEl.full_desc)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}
        </div>
      );
    }
  };

  let planTitle1;
  let planTitle2;
  let planTitle3;
  let heading;
  switch (parseInt(id)) {
    case 1:
      planTitle1 = "Not Too Young";
      planTitle2 = "Kolo Quarter";
      planTitle3 = "Legacy";
      heading = "Installment Plans";
    break;
    case 2:
      planTitle1 = "Cassava";
      planTitle2 = "Maize";
      planTitle3 = "Pumpkin (Ugwu)";
      heading = "Farming Schemes";
      break;
    default:
      planTitle1 = "Gold Basic";
      planTitle2 = "Gold Executive";
      planTitle3 = "Platinum Executive";
      heading = "Investment Plans";
  }


  return (
    <>
      {estateDetails(id)}

      <div className=" p-8 px-8 my-8">
        <h1 className="text-2xl font-bold text-black text-center">
         {heading}
        </h1>
        <div className="grid-3 w-full text-gray-700 my-8">
          <Plan
            title={planTitle1}
            details=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              inventore et sint dignissimos dolorem esse nulla corrupti
              voluptatem totam alias dolorum dicta nemo, ut, quis qui,
              temporibus assumenda voluptatum sapiente. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Sunt inventore et sint"
          />
          <Plan
            title={planTitle2}
            details=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              inventore et sint dignissimos dolorem esse nulla corrupti
              voluptatem totam alias dolorum dicta nemo, ut, quis qui,
              temporibus assumenda voluptatum sapiente. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Sunt inventore et sint"
          />
          <Plan
            title={planTitle3}
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              inventore et sint dignissimos dolorem esse nulla corrupti
              voluptatem totam alias dolorum dicta nemo, ut, quis qui,
              temporibus assumenda voluptatum sapiente. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Sunt inventore et sint"
          />
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
        {details}
      </p>
      <button
        type="submit"
        className="bg-blue-100 border border-blue-900 text-blue-900 p   hover:bg-orange-500 hover:text-white font-bold my-4 rounded-lg"
      >
        Subscribe Now
      </button>
    </div>
  );
};

export default Read__more;
