import { useRouter } from "next/router";
import React from "react";

const UserProfile = (   ) => {
  const router = useRouter();
  const { id, username } = router.query;

  console.log("username:", router);
  return (
    <>
      <div className="text-4xl flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Profile</h1>
        <hr className="border w-[12rem] my-4" />
        <p className="mt-5">
          Profile Page
          <span className="p-2 ml-2 text-black rounded bg-orange-600">
            {id}
          </span>
        </p>
      </div>
    </>
  );
};

export default UserProfile;
