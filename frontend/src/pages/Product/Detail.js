import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Rating from "../../components/Rating";
import QuantityInput from "../../components/QuantityInput";

const Detail = () => {
  const [data, setData] = useState({});
  const [qty, setQty] = useState(0);
  const loc = useLocation();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/${loc.state.id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  });

  const handleQuantity = (qty) => {
    setQty(qty);
  };

  return (
    <div className="wrapper">
      <div className="side-content basis-[35%] w-full">
        <img
          className="w-full max-h-[40rem]"
          src="https://lzd-img-global.slatic.net/g/p/a44cec48e9da8debbde1ac51f44315e9.png_720x720q80.jpg_.webp"
          alt="Sunset in the mountains"
        />
      </div>
      <div className="main-content p-3 self-start basis-[60%] w-full block">
        <h1 className="text-3xl mb-3">{data.title}</h1>
        <Rating rate={data.rating?.rate} reviewer={data.rating?.count} />
        <h3 class="text-4xl font-medium mt-6">${data.price}</h3>
        <p class="ml-2 text-sm font-medium w-[80%] text-gray-600 dark:text-gray-500 mt-3">
          {data.description}.
        </p>
        <div className="inline-flex items-center mt-5">
          <QuantityInput onHandleQuantity={handleQuantity} />
          <button className="bg-green-400 sm:w-36 py-4 px-2 hover:bg-green-300 text-white font-bold ml-3">
            Add to chart
          </button>
          <button className="bg-red-400 py-4 px-2 sm:px-4 hover:bg-red-300 text-white font-bold ml-3">
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
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
