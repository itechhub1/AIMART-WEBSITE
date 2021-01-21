import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ item }) => {
  const  truncate = (str) => {
    return str.split(" ").splice(0, 20).join(" ") + "...";
  };


  return (
    <div className="bg-white   shadow-lg">
      <div className="">
        <img
          src={item.image}
          alt="images"
          className="mb-3"
          style={{ width: "100%", height: 400, objectFit: "cover" }}
        />
      </div>
      <div className="p-8">
        <h1 className="text-black font-bold text-xl mb-3">{item.title}</h1>
       <p className="text-gray-500 tracking-wide mb-3">{truncate(item.descriptions)}</p>

        <Link to={`/read-more/${item.id}`} className="text-blue-800 font-bold">
          Find out more
        </Link>
      </div>
    </div>
  );
};

export default Cards;
