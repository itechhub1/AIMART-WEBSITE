import React from "react";
import { Link } from "react-router-dom";

const SingleServices = ({ services }) => {
  /* _id(pin):"6000721ed0ffb60017593baa"
type(pin):"house"
name(pin):"tim"
purpose(pin):"commercial"
address(pin):"ijub"
state(pin):"Adamawa"
lga(pin):"xyzz"
featured_photo(pin):"http://aimart-api.herokuapp.com/assets/gallery/56a085bc7a528b26a48f2bf13f6b90baA_Aanonymous-4k-ok-2880x1800.jpg"
features(pin):
neighbourhoods(pin):
benefits(pin):
description(pin):"lorem"
faqs(pin):
payment_status(pin):"for_rent"
agreement_fee(pin):233444
survey_fee(pin):55555
status(pin):"available"
featured_video(pin):""
purchase_form(pin):""
document(pin):
fake_document(pin): */

  const {
    featured_photo,
    name,
    address,
    no_of_plots,
    _id,
    description,
  } = services;
  const imageRef = React.createRef();
  let truncate = (str) => {
    return str.split(" ").splice(0, 20).join(" ") + "...";
  };

  return (
    <div className="shadow-lg text-white m">
      <div>
        <img
          src={featured_photo}
          ref={imageRef}
          alt="aimart reactores__image"
          style={{ width: "100%", height: 400, objectFit: "cover" }}
        />
      </div>
      <h1 className="text-black font-bold text-xl mt-4 p">{name}</h1>

      <div className="flex items-center p">
        {" "}
        <img
          src="https://img.icons8.com/fluent/48/000000/maps.png"
          className="w-4"
          alt=""
        />
        <p className="text-bold text-gray-600 mr-2 p">{address}</p>
      </div>
      <p className="text-bold text-gray-900  p  font-normal text-sm">
        {truncate(description)}
      </p>

      <div className="flex justify-center items-center p w-full">
        <div className="  text-primary font-bold p-2 ">
          <p>Full-Plot</p>
          <br />
          <p>{no_of_plots.full} sqm</p>
        </div>
        <div className="  text-primary font-bold p-2">
          <p>Half-Plot</p>
          <br />
          <p>{no_of_plots.half} sqm</p>
        </div>
      </div>

      <div className="flex flex-wrap w-full p-4">
        <a
          href={`https://app.aimartrealtors.com/app/properties/view/${_id}`}
          value="Buy Now"
          className="bg-primary hover:bg-white hover:text-blue-800 border border-blue-800  text-white font-bold text-xs rounded p w-auto text-center "
        >
          Buy Now
        </a>

        <a
          href={`/app/properties/view/${_id}`}
          value="Reserve"
          className="bg-grayish border border-gray-500 hover:bg-transparent hover:bg-gray-700 text-white font-bold text-xs rounded w-auto text-center p mx-auto"
        >
          Reserve
        </a>

        <Link
          to={`/details/${_id}`}
          value="Learn More"
          className="text-primary bg-transparent hover:bg-blue-800 hover:text-white border border-blue-800 font-bold text-xs rounded p w-auto text-center "
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default SingleServices;
