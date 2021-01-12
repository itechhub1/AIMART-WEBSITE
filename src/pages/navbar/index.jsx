import React from "react";
import Burger from "./burger";
import "./index.module.css";
import history from '../../history'
const index = () => {
  const onClick = ()=>{
    history.push('/')
  }

  return (
    <div className='flex justify-center bg-white text-green-800   w-full font-bold  '>
      <div className=' w-full'>
        <div className=' select-none flex justify-between items-center  w-full '>
          <div className='py-4 pl-2 cursor-pointer' onClick={onClick}>
            <img src='' alt="logo" className="  w-24"/>
          </div>
          <Burger />
        </div>
      </div>
    </div>
  );
};

export default index;
