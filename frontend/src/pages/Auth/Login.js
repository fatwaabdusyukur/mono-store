import React from "react";
import loginImg from "../../assets/img/sign-in.jpg";
import { Link } from "react-router-dom";
import { login } from "./Action";
import { NotificationManager } from "react-notifications";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: {},
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    login({
      email: form[0].value,
      password: form[1].value,
    })
      .then((res) => {
        if (!res.status) {
          this.setState({ errors: res.data });
        } else {
          if (typeof res.data === "object") {
            console.log(res.data);
          } else {
            NotificationManager.error(res.data, "Failed", 2000, true);
          }
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-100/70">
        <div className="w-[80%] h-[30rem] rounded-sm bg-white flex flex-col sm:flex-row">
          <div className="basis-[40%] hidden sm:flex items-center justify-center">
            <img src={loginImg} alt="..." />
          </div>
          <div className="basis-[60%] relative flex flex-col items-center justify-center p-3">
            <h1 className="text-gray-700 text-3xl font-kanit">ACCOUNT LOGIN</h1>
            <form
              onSubmit={(e) => this.handleSubmit(e)}
              className="mt-7"
              method="post"
            >
              <div className="inline-flex items-center w-full">
                <input
                  className={`appearance-none bg-gray-50 focus:bg-white border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
                    this.state.errors?.email?.fail
                      ? "border-red-300 text-red-300 bg-red-50/90"
                      : ""
                  } focus:outline focus:border-green-300`}
                  name="email"
                  type="text"
                  placeholder="Email?"
                />
                <input
                  className={`appearance-none bg-gray-50 focus:bg-white border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
                    this.state.errors?.password?.fail
                      ? "border-red-300 text-red-300 bg-red-50/90"
                      : ""
                  } focus:outline focus:border-green-300`}
                  name="pwd"
                  type="password"
                  placeholder="Password?"
                />
              </div>
              <div className="inline-flex items-center w-full">
                <p class="pl-1 basis-1/2 text-red-500 text-xs italic">
                  {this.state.errors?.email?.msg}
                </p>
                <p class="pl-1 basis-1/2 text-red-500 text-xs italic">
                  {this.state.errors?.password?.msg}
                </p>
              </div>
              <button
                type="submit"
                className="w-full bg-green-400 p-3 font-bold text-white hover:bg-green-800 focus:outline-none mt-2"
              >
                SIGN IN
              </button>
            </form>
            <Link
              to="/auth/register"
              className="absolute -bottom-44 sm:bottom-3 text-sm cursor-pointer text-green-400 hover:text-green-800"
            >
              SIGN UP
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
