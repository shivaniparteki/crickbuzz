// pages/components/News/[id].js
import Link from "next/link";
import { useRouter } from "next/router";

import { BsArrowLeft } from "react-icons/bs";

function NewsDetail({ post }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" bg-gradient-to-b from-black to-gray-600 h-[100vh]">
      <Link href={"/"}>
        {" "}
        <BsArrowLeft className="text-white px-3 text-[4rem] cursor-pointer " />{" "}
      </Link>
      <div className=" py-10">
        <h1 className="flex justify-center capitalize cursor-pointer mt-2 mb-4 text-gray-400 text-[2.5rem]  ">
          <span className="hover:text-gray-600">{post.title}</span>
        </h1>
        <div className="flex item-center gap-16 mt-24 px-12">
          <img
            className="w-full rounded-md"
            src={`https://picsum.photos/200/200?${post?.userId}`}
            alt="cricket"
          />

          <p className="flex capitalize tracking-wider leading-7 text-white text-[1.1rem] p-8 mt-5 ">
            {post.body} Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Fugiat praesentium voluptatibus veniam suscipit, modi
            voluptates voluptas officia, corporis atque numquam ex commodi?
            Similique, corporis voluptatem nostrum at voluptatum eos dicta.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ipsam
            accusantium saepe, a ratione consequuntur harum commodi ut aperiam
            voluptatem magnam, qui ducimus neque consectetur deserunt? Sint, ad
            rerum? Similique. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Id quis blanditiis fuga, nostrum recusandae distinctio. Quia
            in quasi eligendi, recusandae sequi facilis tempore, ipsam tenetur,
            earum exercitationem sint harum obcaecati!
          </p>
        </div>
        <p className="text-sm text-gray-300 italic mt-2 px-12 w-[25rem]   ">
          The speculation of the rift had become so intense that the PCB
          chairman Zaka Ashraf felt compelled to address it{" "}
        </p>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await response.json();

  // const picRes = await fetch(
  //   `https://picsum.photos/seed/picsum/200/300/${params.id}`
  // );
  // const photo = await picRes.json();
  // console.log("photo");
  // console.log(photo);

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export default NewsDetail;
