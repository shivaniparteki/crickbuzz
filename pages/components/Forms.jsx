import Link from "next/link";
import React, { useRef, useState } from "react";
import { ImImages } from "react-icons/im";
import { IoMdAttach } from "react-icons/io";
import { Avatar } from "@mui/material";

const Forms = ({
  type,
  post,
  setPost,
  submitting,
  handleSubmit,
  createPost,
}) => {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!post) {
    setPost({
      prompt: "",
      tag: "", // Add default value for tag or any other properties
    });
  }

  const handleImageUpload = () => {
    fileInputRef.current.click();
  };

  const handleImageSelected = (e) => {
    const selectedFile = e.target.files[0];
    setSelectedImage(selectedFile);
  };

  return (
    <>
      <section className="w-full max-w-full flex-start flex-col text-center pt-16 px-12 h-[100vh] bg-gradient-to-b from-slate-300 to-green-900">
        {/* <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-left">
          <span className="blue_gradient">{type} Post</span>
        </h1> */}

        <p className="mt-12 text-lg text-gray-600 sm:text-xl  text-left max-w-md">
          {type} and share amazing post with the world
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 w-full max-w-2xl flex flex-col gap-7 rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_#bbbbbb33] backdrop-blur p-5"
        >
          <label htmlFor="">
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Create post
            </span>

            <textarea
              value={post?.prompt}
              onChange={(e) => {
                setPost({ ...post, prompt: e.target.value });
              }}
              placeholder="Write your prompt hare..."
              required
              className="w-full flex rounded-lg h-[200px] mt-2 p-3 text-sm text-gray-500 outline-0"
              cols="30"
              rows="10"
            />
          </label>

          <label htmlFor="">
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Tag{" "}
              <span className="font-normal">
                (#product, #webdevelopment, #idea)
              </span>
            </span>

            <input
              value={post.tag}
              onChange={(e) => {
                setPost({ ...post, tag: e.target.value });
              }}
              placeholder="#tag"
              required
              className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
            />
          </label>

          <div className=" flex gap-16 ">
            <label htmlFor="image" className="cursor-pointer">
              <div className="flex flex-start gap-7 ">
                <span className="font-satoshi font-semibold text-gray-700">
                  <Avatar>
                    <ImImages className="text-2xl " />
                  </Avatar>
                </span>
                <span className="font-satoshi font-semibold text-gray-700">
                  <Avatar>
                    <IoMdAttach className="text-2xl" />
                  </Avatar>
                </span>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                id="image"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageSelected}
              />
            </label>

            <div className="flex gap-7 mr-7">
              <button
                type="button"
                className="px-12 py-1.5 text-sm bg-primary-orange rounded-full"
              >
                <Link href="/" className=" text-white text-sm">
                  Cancel
                </Link>
              </button>

              <button
                type="submit"
                // onClick={handleCreatePost}
                disabled={submitting}
                className="px-12 py-1.5 text-sm bg-primary-orange rounded-full text-white"
              >
                {submitting ? `${type}...` : type}
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Forms;
