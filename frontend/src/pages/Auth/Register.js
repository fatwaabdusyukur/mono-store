import React from "react";
import regisImg from "../../assets/img/sign-up.jpg";
import { Link } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../store/reducers/authReducer";

export default function Register() {
  const data = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = {
      email: form[0].value,
      name: form[1].value,
      password: form[2].value,
      password2: form[3].value,
    };
    dispatch(register(formData));

    if (!data.loading) {
      if (!data?.response.success) {
        NotificationManager.error(
          data?.response.msg,
          "Failed Registration!",
          2500,
          true
        );
      } else {
        NotificationManager.success(
          data?.response.msg,
          "Success Registration!",
          2500,
          true
        );

        for (const input of form) {
          input.value = "";
        }
      }
    }
  };

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
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="w-full mb-4">
              <input
                className={`appearance-none bg-gray-50 focus:bg-white border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
                  data?.errors?.email?.fail
                    ? "border-red-300 text-red-300 bg-red-50/90"
                    : ""
                } focus:outline focus:border-green-300`}
                name="email"
                type="text"
                placeholder="Email..."
              />
              <p class="pl-1 basis-1/2 text-red-500 text-xs italic">
                {data?.errors?.email?.msg}
              </p>
            </div>
            <div className="w-full mb-4">
              <input
                className={`appearance-none bg-gray-50 focus:bg-white border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
                  data?.errors?.name?.fail
                    ? "border-red-300 text-red-300 bg-red-50/90"
                    : ""
                } focus:outline focus:border-green-300`}
                name="name"
                type="text"
                placeholder="Name..."
              />
              <p class="pl-1 basis-1/2 text-red-500 text-xs italic">
                {data?.errors?.name?.msg}
              </p>
            </div>
            <div className="inline-flex items-center w-full">
              <input
                className={`appearance-none bg-gray-50 focus:bg-white border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
                  data?.errors?.password?.fail
                    ? "border-red-300 text-red-300 bg-red-50/90"
                    : ""
                } focus:outline focus:border-green-300`}
                name="pwd1"
                type="password"
                placeholder="Password..."
              />
              <input
                className={`appearance-none bg-gray-50 focus:bg-white border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
                  data?.errors?.password2?.fail
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
                {data?.errors?.password?.msg}
              </p>
              <p class="pl-1 basis-1/2 text-red-500 text-xs italic">
                {data?.errors?.password2?.msg}
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-green-400 p-3 font-bold text-white hover:bg-green-800 focus:outline-none mt-2"
            >
              {data.loading ? (
                <svg
                  className="fill-white inline mr-3 w-4 h-4 text-white animate-spin"
                  viewBox="0 0 100 101"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" />
                </svg>
              ) : (
                ""
              )}
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
