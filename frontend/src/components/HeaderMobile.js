import React from "react";
import logo from "../assets/img/monostore-logo.png";

export default class HeaderMobile extends React.Component {
  render() {
    return (
      <div
        className={`${this.props.show ? "left-0" : "-left-[300px]"} nav-mobile`}
      >
        <div className="inline-flex justify-between items-center w-full">
          <img className="w-[8rem] h-[4rem]" src={logo} alt="logo" />
          <button
            type="button"
            onClick={() => this.props.onHandleShow(!this.props.show)}
            className="outline-none cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-start w-full mt-4">
          <a className="inline-flex items-center font-medium text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 mr-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                clipRule="evenodd"
              />
            </svg>
            Shoping Cart
          </a>
          <a className="inline-flex items-center font-medium text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 mr-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            Wishlist
          </a>
        </div>
        <div className="flex flex-col items-center w-full mt-7">
          <a className="bg-black/60 border border-gray-300 rounded-md w-[80%] text-center hover:bg-black/20 p-3">
            Home
          </a>
          <a className="bg-black/60 border border-gray-300 rounded-md w-[80%] text-center hover:bg-black/20 p-3 mt-4">
            Blog
          </a>
          <a className="bg-black/60 border border-gray-300 rounded-md w-[80%] text-center hover:bg-black/20 p-3 mt-4">
            Contact
          </a>
          <a className="bg-black/60 border border-gray-300 rounded-md w-[80%] text-center hover:bg-black/20 p-3 mt-4">
            Login
          </a>
        </div>
      </div>
    );
  }
}
