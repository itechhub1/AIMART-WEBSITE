import React, { Fragment, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #010066;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    a {
      color: #fff;
    }
  }
`;
// #0c2133
const DropDownUl = styled.ul`
text-align: center;
position: absolute; 
@media (max-width: 768px) {
  text-align: right;
  position: relative;
  background-color: #050458;
  // box-shadow: inset 0px 0px 5px rgba(255, 255, 255, .1);
}
`;

const RightNav = ({ open, setOpen }) => {
  const myRef = useRef([]);
  const [isDropDownShown, setIsDropDownShown] = useState(false);

  // const authenticated = () => {
  //   return (
  //     <Fragment>
  //       <li>
  //         <Link
  //           to="/dashboard/individual"
  //           className="text-green-800 hover:text-orange-300"
  //         >
  //           My Dashboard
  //         </Link>
  //       </li>
  //       <li>
  //         <a className="text-blue-800 bg-white border-gray-400 hover:text-white hover:bg-red-500 rounded-lg p-4 px-4">
  //           logout
  //         </a>
  //       </li>
  //     </Fragment>
  //   );
  // };
  const notAuthenticated = () => {
    return (
      <Fragment>
        <li>
          <Link
            to="/"
            className="text-blue-800 hover:text-gray-500"
            ref={(el) => (myRef.current = el)}
            onClick={() => setOpen()}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className="text-blue-800 hover:text-gray-500"
            ref={(el) => (myRef.current = el)}
            onClick={() => setOpen()}
          >
            Our Properties
          </Link>
        </li>
        <li
          className="relative"
          onMouseOver={() => setIsDropDownShown(true)}
          onMouseLeave={() => setIsDropDownShown(false)}
        >
          <Link
            to="#!"
            className="text-blue-800 hover:text-gray-500 inline-flex items-center"
            ref={(el) => (myRef.current = el)}
          >
            Services{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="ml-2 bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </Link>
          <DropDownUl
            className={`shadow bg-white w-full ${
              isDropDownShown ? "block" : "hidden"
            }`}
          >
            <li>
              <Link
                to="/read-more/1"
                className="text-blue-800 hover:text-gray-500"
                ref={(el) => (myRef.current = el)}
                onClick={() => setOpen()}
              >
                Real Estate
              </Link>
            </li>
            <li>
              <Link
                to="/read-more/2"
                className="text-blue-800 hover:text-gray-500"
                ref={(el) => (myRef.current = el)}
                onClick={() => setOpen()}
              >
                Farm Estate
              </Link>
            </li>
            <li>
              <Link
                to="/read-more/3"
                className="text-blue-800 hover:text-gray-500"
                ref={(el) => (myRef.current = el)}
                onClick={() => setOpen()}
              >
                A-Vest
              </Link>
            </li>
          </DropDownUl>
        </li>
        <li>
          <a
            href="https://blog.aimartrealtors.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:text-gray-500"
            ref={(el) => (myRef.current = el)}
            onClick={setOpen}
          >
            Blog
          </a>
        </li>
        <li>
          <a
            href="#!"
            className="text-blue-800 hover:text-gray-500"
            ref={(el) => (myRef.current = el)}
            onClick={setOpen}
          >
            Faq
          </a>
        </li>

        <li>
          <Link
            to="/about-us"
            href="auth"
            className="text-blue-800 hover:text-gray-500"
            ref={(el) => (myRef.current = el)}
            onClick={setOpen}
          >
            About Us
          </Link>
        </li>
        <li>
          <a
            href="https://app.aimartrealtors.com/login"
            className="bg-primary text-white hover:text-blue-800 hover:bg-transparent bg-white p border-2 border-blue-800 rounded-lg "
          >
            {" "}
            Dashboard login{" "}
          </a>
        </li>
      </Fragment>
    );
  };

  return (
    <Ul open={open} className="z-30 px-5 text-sm capitalize text-right">
      {/*     {isAuth ? authenticated() : notAuthenticated()} */}
      {notAuthenticated()}
    </Ul>
  );
};

export default RightNav;
