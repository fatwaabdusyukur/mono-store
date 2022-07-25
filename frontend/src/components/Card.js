import React from "react";
import { Link } from "react-router-dom";
import CardLink from "./CardLink";

export default class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      hover: false,
    };
  }

  render() {
    let name = this.props.item.title.toLowerCase().replace(/ /g, "-");
    return (
      <div
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
        className="max-w-full md:max-w-[17rem] lg:max-w-[19rem] rounded overflow-hidden bg-transparent"
      >
        <Link
          to={`/product/${name}`}
          state={{ id: this.props.item._id }}
          className="cursor-pointer"
        >
          <div className="relative w-full">
            <img
              src="https://lzd-img-global.slatic.net/g/p/a44cec48e9da8debbde1ac51f44315e9.png_720x720q80.jpg_.webp"
              alt="Sunset in the mountains"
            />
            <CardLink hover={this.state.hover} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 font-kanit truncate">
              {this.props.item.title}
            </div>
            <p className="text-gray-700 font-signika text-base font-bold dark:bg-gray-700 rounded-full w-32">
              ${this.props.item.price}
            </p>
          </div>
        </Link>
      </div>
    );
  }
}
