import React from "react";
import loginImg from "../../assets/img/sign-in.jpg";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
  render() {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-100/70">
        <div className="w-[80%] h-[30rem] rounded-sm bg-white flex flex-col sm:flex-row">
          <div className="basis-[40%] hidden sm:flex items-center justify-center">
            <img src={loginImg} alt="..." />
          </div>
          <div className="basis-[60%] relative flex flex-col items-center justify-center p-3">
            <h1 className="text-gray-700 text-3xl font-kanit">ACCOUNT LOGIN</h1>
            <form className="mt-7">
              <div className="inline-flex items-center w-full">
                <input
                  className="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-300 focus:outline"
                  name="email"
                  placeholder="Email?"
                />
                <input
                  className="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:border-green-300 focus:outline-none focus:shadow-outline"
                  name="pwd"
                  placeholder="Password?"
                />
              </div>
              <button className="w-full bg-green-400 p-3 font-bold text-white hover:bg-green-800 focus:outline-none mt-2">
                SIGN IN
              </button>
            </form>
            <Link
              to="/auth/register"
              className="absolute bottom-3 text-sm cursor-pointer text-green-400 hover:text-green-800"
            >
              SIGN UP
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
