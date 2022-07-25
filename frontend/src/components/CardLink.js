import React from "react";

export default class CardLink extends React.Component {
  render() {
    return (
      <div
        className={`absolute flex justify-center w-full duration-700 ease-in-out ${
          this.props.hover ? "top-44" : "-top-20"
        }`}
      >
        <button className="bg-gray-200/70 rounded-full border border-black/30 p-3 mr-7 fill-black hover:bg-green-300 hover:fill-white hover:border-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button className="bg-gray-200/70 rounded-full border border-black/30 p-3 fill-black hover:bg-red-300 hover:fill-white hover:border-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    );
  }
}
