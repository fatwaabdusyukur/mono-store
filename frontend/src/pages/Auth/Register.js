import React from "react";
import regisImg from "../../assets/img/sign-up.jpg";
import { Link } from "react-router-dom";

export default class Register extends React.Component {
  render() {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-100/70">
        <div className="w-[80%] h-[30rem] rounded-sm bg-white flex flex-col sm:flex-row">
          <div className="basis-[40%] hidden sm:flex items-center justify-center">
            <img src={regisImg} alt="..." />
          </div>
          <div className="basis-[60%] relative flex flex-col items-center justify-center p-3">
            <h1 className="text-gray-700 text-3xl font-kanit">
              ACCOUNT REGISTRATION
            </h1>
            <form className="mt-7">
              <input
                className="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-300 focus:outline mb-4"
                name="email"
                placeholder="Email..."
              />
              <input
                className="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-300 focus:outline mb-4"
                name="name"
                placeholder="Name..."
              />
              <div className="inline-flex items-center w-full">
                <input
                  className="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-300 focus:outline"
                  name="pwd1"
                  placeholder="Password..."
                />
                <input
                  className="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:border-green-300 focus:outline-none focus:shadow-outline"
                  name="pwd2"
                  placeholder="Confirm password..."
                />
              </div>
              <button className="w-full bg-green-400 p-3 font-bold text-white hover:bg-green-800 focus:outline-none mt-2">
                SIGN UP
              </button>
            </form>
            <Link
              to="/auth/login"
              className="absolute bottom-3 text-sm cursor-pointer text-green-400 hover:text-green-800"
            >
              ALREADY HAVE AN ACCOUNT?
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
