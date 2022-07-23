import React from "react";

export default class Card extends React.Component {
  render() {
    return (
      <div className="max-w-full md:max-w-[17rem] lg:max-w-[19rem] rounded overflow-hidden bg-transparent hover:shadow-lg hover:shadow-gray-500/40">
        <a className="cursor-pointer">
          <img
            className="w-full"
            src="https://lzd-img-global.slatic.net/g/p/a44cec48e9da8debbde1ac51f44315e9.png_720x720q80.jpg_.webp"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 truncate ">
              {this.props.item.title}
            </div>
            <p className="text-gray-700 text-base font-bold dark:bg-gray-700 rounded-full w-32">
              ${this.props.item.price}
            </p>
          </div>
        </a>
      </div>
    );
  }
}
