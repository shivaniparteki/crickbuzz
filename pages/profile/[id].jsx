// [id].jsx
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for making API requests.
import { RxCross2 } from "react-icons/rx";

const UserProfile = () => {
  const router = useRouter();
  const { id, username } = router.query;
  const [userPosts, setUserPosts] = useState([]); // State to store user's posts.

  useEffect(() => {
    // Define an async function to fetch user posts.
    async function fetchUserPosts() {
      try {
        // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint to fetch user posts.
        const response = await axios.get("/api/prompt", {
          headers: {
            Authorization: `TOKEN_SECRET`, // Replace with your token.
          },
        });

        // Assuming the response contains an array of user posts.
        setUserPosts(response.data);
      } catch (error) {
        console.error("Failed to fetch user posts", error);
      }
    }

    fetchUserPosts(); // Call the function to fetch user posts when the component mounts.
  }, [userPosts]);

  //

  const handleDeletePost = async (postId) => {
    try {
      // Make an API request to delete the post by its ID.
      await axios.delete(`/api/prompt/${postId}`, {
        headers: {
          Authorization: "TOKEN_SECRET", // Replace with your token.
        },
      });

      // Update the state to remove the deleted post.
      setUserPosts(userPosts.filter((post) => post.id !== postId));
    } catch (error) {
      console.log("error");
      console.log(error);
      console.error("Failed to delete post", error);
    }
  };

  return (
    <>
      <div className="max-w-[2440px] m-auto text-1xl flex flex-col  gap-10 pt-24 py-2 px-10">
        <h1 className="text-[4rem] font-sans font-bold underline italic">
          <span className="p-2 ml-2 text-black rounded-md">{id}</span>
        </h1>

        <p className="mt-5 text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias magni
          sit pariatur cupiditate ab, odit tempore optio, neque modi,
          consequatur est exercitationem ea cum. Id voluptates voluptate
          quisquam doloribus repellat Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quasi consequatur explicabo quaerat quo qui non
          vitae, possimus nemo voluptatibus quibusdam facilis, hic
          exercitationem? Velit, aut quae? Nesciunt consequatur dignissimos
          alias.
        </p>

        {/* Display the user's posts */}

        <div className="flex ">
          <Link
            href={"/create-prompt"}
            className="rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center"
          >
            Create Post
          </Link>
        </div>
      </div>
      <p className="text-[3rem] text-center font-bold">Posts</p>
      <div className="flex flex-wrap gap-8 px-16 h-64 overflow-auto mt-4 ">
        {userPosts?.map((element, index) => {
          return (
            <>
              <div className=" relative w-[20rem] border  rounded-lg bg-gradient-to-br from-gray-100 to-gray-400 shadow-[0px_7px_20px_-8px_#121212]">
                <div className="absolute right-0 top-2 mr-5">
                  <button onClick={() => handleDeletePost(element._id)}>
                    <RxCross2 className="text-1xl" />
                  </button>
                </div>
                <div className="px-5 py-4 mt-6 text-justify tracking-tighter">
                  <p>
                    <span className="font-semibold underline break-words">
                      Prompts:
                    </span>{" "}
                    {element?.prompt}
                  </p>
                  <p>
                    <span className="font-semibold underline">Tags:</span>{" "}
                    {element?.tag}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default UserProfile;
