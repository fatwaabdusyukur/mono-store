import React from "react";

export default class CategotyDropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      active: true,
    };
  }

  render() {
    return (
      <div className="flex flex-col items-center justify-center">
        <button
          onClick={() => this.setState({ active: !this.state.active })}
          type="button"
          className="inline-flex items-center justify-around bg-black text-white font-bold py-2 w-[20rem] md:w-[15rem] lg:w-[17rem] text-[24px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          Categories
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class={`${
              this.state.active ? "" : "rotate-180"
            } h-6 w-6 duration-300 ease-in-out`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
        <div
          className={`${
            this.state.active
              ? "flex flex-col bg-white rounded-none w-[20rem] md:w-[15rem] lg:w-[17rem] border border-gray-300 p-3"
              : "hidden"
          }`}
        >
          <span className="cursor-pointer my-1 hover:text-gray-400">Shirt</span>
          <span className="cursor-pointer my-1 hover:text-gray-400">Pant</span>
          <span className="cursor-pointer my-1 hover:text-gray-400">
            Jacket
          </span>
          <span className="cursor-pointer my-1 hover:text-gray-400">
            Backpack
          </span>
        </div>
      </div>
    );
  }
}
