import React from "react";

// social icons
import facebook from "../assets/facebook.ico";
import instagram from "../assets/instagram.ico";
import twitter from "../assets/twitter.ico";
import youtube from "../assets/youtube.ico";

const footer = () => {
  return (
    <div style={{ backgroundColor: "#010066" }} className="text-white p-16">
      <div className="grid-3">
        <div className="">
          <h5 className="font-bold text-lg">Get In Touch!</h5>
          <address>
            <ul>
              <li className="font-sans mt-2">+234 12932213</li>
              <li className="font-sans mt-2">
                9 am to 5pm Monday to Friday House 2, No 7 Majekodunmi street,
                Oshopey Bus stop, Allen Avenue Ikeja
              </li>
              <li className="font-sans mt-2"><a href="mailto:admin@aimartrealtors.com">admin@aimartrealtors.com</a></li>
            </ul>
          </address>
          <ul className="flex border justify-between rounded rounded-full w-48 mt-3 py-1 px-3">
            <li className="w-8 h-8 bg-white rounded-full bg-primary"><a className="" href="https://www.facebook.com"><img src={facebook} className="max-w-full" alt=""/></a></li>
            <li className="w-8 h-8 bg-white rounded-full bg-primary"><a className="" href="https://www.twitter.com"><img src={twitter} className="max-w-full" alt=""/></a></li>
            <li className="w-8 h-8 bg-white rounded-full bg-primary"><a className="" href="https://www.instagram.com"><img src={instagram} className="max-w-full" alt=""/></a></li>
            <li className="w-8 h-8 bg-white rounded-full bg-primary"><a className="" href="https://www.youtube.com"><img src={youtube} className="max-w-full" alt=""/></a></li>
          </ul>
        </div>
        <div className="">
          <h5 className="font-bold text-lg">Additional Resources</h5>
          <ul>
            <li className=" font-sans mt-2">
              <a href="#!">Schedule an inspection</a>
            </li>
            <li className=" font-sans  mt-2">
              <a href="#!">Careers</a>
            </li>
            <li className=" font-sans  mt-2">
              <a href="#!">Term and conditions</a>
            </li>
            <li className=" font-sans  mt-2">
              <a href="#!">Privacy policy</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h5 className="font-bold  text-lg">About us</h5>
          <p className=" font-sans mt-2">
            We offer you simplified, rewarding, and secure real estate
            investing. We make real estate investments accessible to everyone in
            a way that is simple, secure, and profitable
          </p>
          <div className="grid-3"></div>
        </div>
      </div>
    </div>
  );
};

export default footer;
