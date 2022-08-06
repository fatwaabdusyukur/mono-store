import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Rating from "../../components/Rating";
import QuantityInput from "../../components/QuantityInput";
import { setQuantity, showProduct } from "../../store/reducers/productReducer";

const Detail = () => {
  const data = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const loc = useLocation();

  useEffect(() => {
    dispatch(showProduct(loc.state.id));
  });

  const handleQuantity = (qty) => {
    dispatch(setQuantity(qty));
  };

  return (
    <div className="wrapper md:flex-col lg:flex-row">
      <div className="side-content basis-[35%] w-full">
        <img
          className="w-full max-h-[40rem]"
          src="https://lzd-img-global.slatic.net/g/p/a44cec48e9da8debbde1ac51f44315e9.png_720x720q80.jpg_.webp"
          alt="Sunset in the mountains"
        />
      </div>
      <div className="main-content md:mt-3 lg:mt-0 self-start basis-[60%] w-full block">
        <h1 className="text-3xl mb-3 font-kanit">{data?.response.title}</h1>
        <Rating
          rate={data?.response.rating?.rate}
          reviewer={data?.response.rating?.count}
        />
        <h3 class="text-4xl font-medium mt-6 font-signika">
          ${data?.response.price}
        </h3>
        <p class="ml-2 text-sm font-medium w-[80%] text-gray-600 dark:text-gray-500 mt-3 font-monserat">
          {data?.response.description}
        </p>
        <div className="inline-flex items-center mt-5 pb-7 border-b border-gray-300/90 w-full">
          <QuantityInput onHandleQuantity={handleQuantity} />
          <button className="bg-green-400 sm:w-36 py-4 px-2 hover:bg-green-300 text-white font-bold ml-3">
            Add to chart
          </button>
          <button className="bg-red-400 py-4 px-2 sm:px-4 hover:bg-red-300 text-white font-bold ml-3 ">
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
        <ul className="mt-1 p-3">
          <li>
            <span className="inline-flex items-center">
              <strong>Available</strong>
              <p className="indent-8 text-gray-400">In Stock</p>
            </span>
          </li>
          <li>
            <span className="inline-flex items-center">
              <strong>Category</strong>
              <p className="indent-8 text-gray-400">
                {data?.response.category}
              </p>
            </span>
          </li>
          <li>
            <span className="inline-flex items-center">
              <strong>Share</strong>
              <div className="ml-14 inline-flex items-center w-full">
                <span className="mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,17.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z"></path>
                  </svg>
                </span>
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="17"
                    height="17"
                    viewBox="0 0 27 27"
                  >
                    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                  </svg>
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.077,4.928c-2.082-2.083-4.922-3.134-7.904-2.894C7.164,2.356,3.65,5.144,2.474,8.99 c-0.84,2.748-0.487,5.617,0.881,7.987L2.059,21.28c-0.124,0.413,0.253,0.802,0.67,0.691l4.504-1.207 c1.459,0.796,3.101,1.215,4.773,1.216h0.004c4.195,0,8.071-2.566,9.412-6.541C22.728,11.563,21.762,7.616,19.077,4.928z M16.898,15.554c-0.208,0.583-1.227,1.145-1.685,1.186c-0.458,0.042-0.887,0.207-2.995-0.624c-2.537-1-4.139-3.601-4.263-3.767 c-0.125-0.167-1.019-1.353-1.019-2.581S7.581,7.936,7.81,7.687c0.229-0.25,0.499-0.312,0.666-0.312c0.166,0,0.333,0,0.478,0.006 c0.178,0.007,0.375,0.016,0.562,0.431c0.222,0.494,0.707,1.728,0.769,1.853s0.104,0.271,0.021,0.437s-0.125,0.27-0.249,0.416 c-0.125,0.146-0.262,0.325-0.374,0.437c-0.125,0.124-0.255,0.26-0.11,0.509c0.146,0.25,0.646,1.067,1.388,1.728 c0.954,0.85,1.757,1.113,2.007,1.239c0.25,0.125,0.395,0.104,0.541-0.063c0.146-0.166,0.624-0.728,0.79-0.978 s0.333-0.208,0.562-0.125s1.456,0.687,1.705,0.812c0.25,0.125,0.416,0.187,0.478,0.291 C17.106,14.471,17.106,14.971,16.898,15.554z"></path>
                  </svg>
                </span>
              </div>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Detail;
