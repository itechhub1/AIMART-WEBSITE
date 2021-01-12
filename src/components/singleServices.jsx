import React, { useState, useEffect } from "react";

const SingleServices = ({ services }) => {
  const { image, name, location, fullPlot, halfPlot } = services;
  const imageRef = React.createRef();

  const [span, setspan] = useState({ spans: 0 });

  let setSpan = () => {
    const height = imageRef.current.clientHeight;
   
    const spans = Math.ceil(height / 10);
    return setspan({ spans });
  };

  useEffect(() => {
    imageRef.current.addEventListener("load", setSpan);
    return () => {};
  }, []);

  return (
    <div className="shadow-lg text-white rounded-l-lg p-2 " style={{gridRowEnd:`span ${span}`}} >
      <div >
        <img src={image.default} ref={imageRef} alt="image" style={{width:"100%", height:400,objectFit:"cover"}} />
      </div>
      <h1 className="text-black font-bold text-xl mt-4">{name}</h1>
      <p className="text-bold text-gray-500 mt-4">{location}</p>
      <div className="grid-2">
        <div className="  text-blue-900 font-bold p-2 ">
          <p>Full-Plot</p>
          <br />
          <p>{fullPlot}</p>
        </div>
        <div className="  text-blue-900 font-bold p-2">
          <p>Full-Plot</p>
          <br />
          <p>{halfPlot}</p>
        </div>
      </div>

      <div className="grid-3">
        <input
          type="button"
          value="Buy Now"
          className="bg-blue-100 border border-blue-900 text-blue-900 font-bold rounded-lg p w-auto"
        />

        <input
          type="button"
          value="Reserve"
          className="bg-orange-100 border border-orange-900 text-orange-900 font-bold rounded-lg w-auto p"
        />

        <input
          type="button"
          value="Learn More"
          className="bg-teal-100 border border-teal-900 text-teal-900 font-bold rounded-lg w-auto p"
        />
      </div>
    </div>
  );
};

export default SingleServices;
