import React, { Fragment, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open, setOpen }) => {
  const myRef = useRef([]);

  const autenticated = () => {
    return (
      <Fragment>
        <li>
          <Link
            to="/dashboard/individual"
            className="text-green-800 hover:text-orange-300"
          >
            My Dashboard
          </Link>
        </li>
        <li>
          <a className="text-blue-800 bg-white border-gray-400 hover:text-white hover:bg-red-500 rounded-lg p-4 px-4">
            logout
          </a>
        </li>
      </Fragment>
    );
  };
  const notAuthenticated = () => {
    return (
      <Fragment>
        <li>
          <Link
            to="/"
            className="text-blue-800 hover:text-orange-300"
            ref={(el) => (myRef.current = el)}
            onClick={() => setOpen()}
          >
            Home
          </Link>
        </li>
        <li>
          <div className="">
          <Link
            to="/services"
            className="text-blue-800 hover:text-orange-300"
            ref={(el) => (myRef.current = el)}
            onClick={() => setOpen()}
          >
            Service
          </Link>
          </div>
        </li>
        <li>
          <a
            href="https://blog.aimartrealtors.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:text-orange-300"
            ref={(el) => (myRef.current = el)}
            onClick={setOpen}
          >
            Blog
          </a>
        </li>
        <li>
          <a
            href="#!"
            className="text-blue-800 hover:text-orange-300"
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
            className="text-blue-800 hover:text-orange-300"
            ref={(el) => (myRef.current = el)}
            onClick={setOpen}
          >
            About Us
          </Link>
        </li>
        <li>
          <a
            href="https://app.aimartrealtors.com/login"
            className="bg-blue-400 text-white hover:text-orange-800 hover:bg-white bg-white p  border-2 border-green-400 rounded-lg "
          >
            {" "}
            Dashboard login{" "}
          </a>
        </li>
      </Fragment>
    );
  };

  return (
    <Ul open={open} className="z-30 px-5 text-sm  capitalize text-right">
      {/*     {isAuth ? autenticated() : notAuthenticated()} */}
      {notAuthenticated()}
    </Ul>
  );
};

export default RightNav;
