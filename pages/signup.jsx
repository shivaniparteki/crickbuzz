import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Layout from "./Layout";

const Signup = () => {
  // console.log("process.env.MONGO_URI");
  // console.log(process.env.MONGO_URI);
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignup = async (req, res) => {
    try {
      let obj;
      setLoading(true);
      const response = await axios
        .post("/api/signup", user)
        .then((response) => (obj = response))
        .catch((err) => console.log(err));

      console.log("response");
      console.log(obj);
      console.log("Signup success");

      if (response?.status === 200) {
        router.push("/login");
      } else {
        router.push("/signup");
        alert("User Already Exist");
      }
    } catch (error) {
      console.log("Signup failed", error);
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <>
      <Layout >
        <div className="flex flex-col items-center min-h-screen justify-center bg-white ">
          <div className="wrapper w-[28rem] flex flex-col items-center font-sans text-black border border-[#eee] rounded-lg px-10 py-10 bg-white shadow-[0px_8px_40px_0px_#43454933]">
            <h1 className="text-4xl text-black  ">
              {loading ? "Processing" : "Signup"}
            </h1>
            <hr className="border w-[12rem] my-4" />

            <div className="form-wrapper w-full my-4">
              <div className="form-wrapper flex flex-col gap-2">
                <label className="capitalize" htmlFor="username">
                  username
                </label>
                <input
                  className="p-2 border border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-600 "
                  id="username"
                  type="text"
                  placeholder="username"
                  value={user.username}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                />
              </div>

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
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </div>

              <div>
                <button
                  onClick={onSignup}
                  className="p-3 w-full border-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-blue-500 text-[#fff]"
                >
                  {buttonDisabled ? "No signup" : "Signup "}
                </button>
              </div>
              <Link className="flex justify-center" href="/login">
                {" "}
                Visit the Login Page
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Signup;
