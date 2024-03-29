import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/login", user);
      console.log("Login success", response.data);
      toast.success("Login success");

      if (response?.data?.success === true) {
        alert("Login Successful");
        router.push("/");
      } else {
        alert("Invalid Password");
      }

    } catch (error) {
      console.error("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <>
      <div className="flex flex-col items-center min-h-screen justify-center bg-white ">
        <div className="wrapper w-[28rem] flex flex-col items-center font-sans text-black  rounded-lg px-16 py-10 shadow-[0px_8px_40px_0px_#43454933] bg-white">
          <h1 className="text-4xl text-black ">
            {loading ? "Processing" : "Login"}
          </h1>
          <hr className="border w-[12rem] my-4" />
          <div className="w-full">
            <div className="form-wrapper flex flex-col gap-2">
              <label className="capitalize" htmlFor="email">
                email
              </label>
              <input
                className="p-2 border border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-600 "
                id="email"
                type="text"
                placeholder="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="form-wrapper flex flex-col gap-2">
              <label className="capitalize" htmlFor="password">
                password
              </label>
              <input
                className="p-2 border border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-600 "
                id="password"
                type="password"
                placeholder="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <button
              onClick={onLogin}
              className="p-3  w-full border-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600  bg-blue-500 text-[#fff]"
            >
              {buttonDisabled ? "No login" : "login"}
            </button>
          </div>
          <Link className="flex justify-center" href="/signup">
            Visit the Signup Page
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
