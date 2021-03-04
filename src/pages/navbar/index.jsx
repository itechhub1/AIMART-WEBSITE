import React from "react";
import Burger from "./burger";
import "./index.module.css";
import history from "../../history";
const index = () => {
  const onClick = () => {
    history.push("/");
  };

  return (
    <div style={{zIndex: 400}} className="fixed top-0 left-0 flex justify-center bg-white w-full font-bold">
      <div className=" w-full">
        <div className=" select-none flex justify-between items-center w-full ">
          <div className="py-4 pl-2 cursor-pointer" onClick={onClick}>
            <img
              src="https://aimartrealtors.com/wp-content/uploads/2020/01/aimartrealtorslogo1.png"
              alt="logo"
              className="w-20 pl-4"
            />
          </div>
          <Burger />
        </div>
      </div>
    </div>
  );
};

export default index;
