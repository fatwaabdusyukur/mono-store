import paymentImg from "./../assets/img/payment-method.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="flex flex-col sm:flex-row w-full items-start justify-between sm:items-center">
        <div className="w-full sm:basis-[35%] pt-2 pl-3">
          <h1 className="font-mono text-[23px] font-bold text-gray-200">
            About Us
          </h1>
          <div className="pl-3 pr-1">
            <span className="relative inline-flex items-center w-full text-sm font-medium cursor-pointer text-white hover:text-gray-400">
              Lorem Ipsum Dolor antri saya ana antum.
            </span>
            <span className="relative inline-flex items-center w-full text-sm font-medium cursor-pointer text-white hover:text-gray-400">
              Lorem Ipsum Dolor antri saya ana antum.
            </span>
            <span className="relative inline-flex items-center w-full text-sm font-medium cursor-pointer text-white hover:text-gray-400">
              Lorem Ipsum Dolor antri saya ana antum.
            </span>
          </div>
        </div>
        <div className="w-full sm:basis-[25%] pl-3 sm:pt-2">
          <h1 className="font-mono text-[23px] font-bold text-gray-200">
            Categories
          </h1>
          <ul className="pl-3 pr-1">
            <li className="font-medium text-sm text-white">Shoes</li>
            <li className="font-medium text-sm text-white">Shirt</li>
            <li className="font-medium text-sm text-white">Jeans</li>
            <li className="font-medium text-sm text-white">Flanel</li>
          </ul>
        </div>
        <div className="w-full sm:basis-[40%] pl-3 sm:pt-2">
          <h1 className="font-mono text-[23px] font-bold text-gray-200">
            Contact Us
          </h1>
          <input
            type="email"
            className="bg-gray-50 border block border-gray-300 text-gray-900 text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 w-[80%] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
          ></input>
          <button className="bg-blue-600 hover:bg-blue-300 text-white p-2 mt-2 w-[30%]">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center mt-5">
        <h3 className="text-white font-mono font-medium">
          &copy;Copyright Fatwaabdusyukur 2022
        </h3>
        <img src={paymentImg} className="h-10 w-full" />
      </div>
    </footer>
  );
};

export default Footer;
