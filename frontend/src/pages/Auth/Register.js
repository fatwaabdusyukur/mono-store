import React from "react";
import regisImg from "../../assets/img/sign-up.jpg";
import { Link } from "react-router-dom";
import { regis } from "./Action";
import { NotificationManager } from "react-notifications";

export default class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: {},
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    regis({
      email: form[0].value,
      name: form[1].value,
      password: form[2].value,
      password2: form[3].value,
    })
      .then((res) => {
        if (typeof res === "object") this.setState({ errors: res });
        else {
          if (res) {
            NotificationManager.success(
              "Registration Success!",
              "Success",
              2000,
              true
            );
            for (const input of form) {
              input.value = "";
            }
          } else {
            NotificationManager.error(
              "Email already has been taken!",
              "Failed",
              2000,
              true
            );
          }
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="relative w-full h-screen flex items-center justify-center bg-gray-100/70">
        <div className="w-[80%] h-[30rem] rounded-sm bg-white flex flex-col sm:flex-row">
          <div className="basis-[40%] hidden sm:flex items-center justify-center">
            <img src={regisImg} alt="..." />
          </div>
          <div className="basis-[60%] relative flex flex-col items-center justify-center p-3">
            <h1 className="text-gray-700 text-3xl font-kanit">
              ACCOUNT REGISTRATION
            </h1>
            <form
              className="mt-7"
              method="post"
              onSubmit={(e) => this.handleSubmit(e)}
            >
              <div className="w-full mb-4">
                <input
                  className={`appearance-none bg-gray-50 focus:bg-white border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
                    this.state.errors?.email?.fail
                      ? "border-red-300 text-red-300 bg-red-50/90"
                      : ""
                  } focus:outline focus:border-green-300`}
                  name="email"
                  type="text"
                  placeholder="Email..."
                />
                <p class="pl-1 basis-1/2 text-red-500 text-xs italic">
                  {this.state.errors?.email?.msg}
                </p>
              </div>
              <div className="w-full mb-4">
                <input
                  className={`appearance-none bg-gray-50 focus:bg-white border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
                    this.state.errors?.name?.fail
                      ? "border-red-300 text-red-300 bg-red-50/90"
                      : ""
                  } focus:outline focus:border-green-300`}
                  name="name"
                  type="text"
                  placeholder="Name..."
                />
                <p class="pl-1 basis-1/2 text-red-500 text-xs italic">
                  {this.state.errors?.name?.msg}
                </p>
              </div>
              <div className="inline-flex items-center w-full">
                <input
                  className={`appearance-none bg-gray-50 focus:bg-white border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
                    this.state.errors?.password?.fail
                      ? "border-red-300 text-red-300 bg-red-50/90"
                      : ""
                  } focus:outline focus:border-green-300`}
                  name="pwd1"
                  type="password"
                  placeholder="Password..."
                />
                <input
                  className={`appearance-none bg-gray-50 focus:bg-white border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
                    this.state.errors?.password2?.fail
                      ? "border-red-300 text-red-300 bg-red-50/90"
                      : ""
                  } focus:outline focus:border-green-300`}
                  name="pwd2"
                  type="password"
                  placeholder="Confirm password..."
                />
              </div>
              <div className="inline-flex items-center w-full">
                <p class="pl-1 basis-1/2 text-red-500 text-xs italic">
                  {this.state.errors?.password?.msg}
                </p>
                <p class="pl-1 basis-1/2 text-red-500 text-xs italic">
                  {this.state.errors?.password2?.msg}
                </p>
              </div>
              <button
                type="submit"
                className="w-full bg-green-400 p-3 font-bold text-white hover:bg-green-800 focus:outline-none mt-2"
              >
                SIGN UP
              </button>
            </form>
            <Link
              to="/auth/login"
              className="absolute -bottom-28 sm:bottom-3 text-sm cursor-pointer text-green-400 hover:text-green-800"
            >
              ALREADY HAVE AN ACCOUNT?
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
