import React from "react";
import { Link } from "react-router-dom";
import parser from 'react-html-parser'

const Cards = ({ item }) => {
  const  truncate = (str) => {
    return str.split(" ").splice(0, 20).join(" ") + "...";
  };


  return (
    <div className="bg-white shadow hover:shadow-lg">
      <div className="">
        <img
          src={item.image}
          alt="images"
          className="mb-3"
          style={{ width: "100%", height: 250, objectFit: "cover", objectPosition: "50% 0"  }}
        />
      </div>
      <div className="px-8 py-4">
        <h1 className="text-black font-bold text-xl mb-3">{item.title}</h1>
       <div className="text-gray-900 tracking-wide mb-3">{parser(truncate(item.description))}</div>

        <Link to={`/read-more/${item.id}`} className="text-blue-800 font-bold">
          Find out more
        </Link>
      </div>
    </div>
  );
};

export default Cards;
