import React from "react";

const Cards = () => {
  return (
    <div className="bg-white   shadow-lg">
      <img
        src="https://landwey.ng/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-29-at-5.42.12-PM.jpeg"
        alt="images"
        className="mb-3"
        style={{ height: 400, objectFit: "cover" }}
      />
     <div className="p-8">
     <h1 className="text-black font-bold text-xl mb-3">Real Estate</h1>
      <p className="text-gray-500 tracking-wide mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolores
        distinctio asperiores officiis dolor in quam dignissimos reiciendis ad
        eaque!I
      </p>

      <button className="text-blue-800 font-bold">Find out more</button>
     </div>
    </div>
  );
};

export default Cards;
