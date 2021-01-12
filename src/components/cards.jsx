import React from "react";


const Cards = ({ item }) => {
  return (
    <div className="bg-white   shadow-lg">
      <div className="">
        <img
          src={item.image.default}
          alt="images"
          className="mb-3"
          style={{ width: "100%", height: 400, objectFit: "cover" }}
        />
      </div>
      <div className="p-8">
        <h1 className="text-black font-bold text-xl mb-3">{item.title}</h1>
        <p className="text-gray-500 tracking-wide mb-3">{item.descriptions}</p>

        <button className="text-blue-800 font-bold">Find out more</button>
      </div>
    </div>
  );
};

export default Cards;
